import React from 'react';
import PropTypes from 'prop-types';
import { FormattedRelative, intlShape } from 'react-intl';
import { isoCompatibleDate } from '../../../common/helpers';

const RelativeDateTime = (props, context) => {
  const { date, defaultValue } = props;
  if (date) {
    const isoDate = isoCompatibleDate(date);
    const title = context.intl.formatDate(isoDate, {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
      year: 'numeric',
    });

    /* eslint-disable react/style-prop-object */
    return (
      <span title={title}>
        <FormattedRelative value={isoDate} style="numeric" />
      </span>
    );
    /* eslint-enable react/style-prop-object */
  }

  return <span>{defaultValue}</span>;
};

RelativeDateTime.contextTypes = {
  intl: intlShape,
};

RelativeDateTime.propTypes = {
  date: PropTypes.any,
  defaultValue: PropTypes.node,
};

RelativeDateTime.defaultProps = {
  date: null,
  defaultValue: '',
};

export default RelativeDateTime;
