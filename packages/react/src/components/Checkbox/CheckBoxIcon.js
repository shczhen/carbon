import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { ChevronDown16 } from '@carbon/icons-react';
import { settings } from 'carbon-components';

const { prefix } = settings;

export const translationIds = {
  'collapse.group': 'collapse.group',
  'expand.group': 'expand.group',
};

const defaultTranslations = {
  [translationIds['collapse.group']]: 'Collapse group',
  [translationIds['expand.group']]: 'Expand group',
};

const CheckBoxIcon = ({ isExpanded, translateWithId: t }) => {
  const className = cx({
    [`${prefix}--list-box__menu-icon`]: true,
    [`${prefix}--list-box__menu-icon--open`]: isExpanded,
  });
  const description = isExpanded ? t('collapse.group') : t('expand.group');
  return (
    <div
      className={className}
      style={{
        marginRight: '-18px',
        right: 0,
        bottom: 0,
        padding: '0 1rem',
      }}>
      <ChevronDown16 aria-label={description} name="icon--chevron--down" />
    </div>
  );
};

CheckBoxIcon.propTypes = {
  /**
   * Specify whether the group is currently expanded, which will influence the
   * direction of the icon
   */
  isExpanded: PropTypes.bool.isRequired,

  /**
   * i18n hook used to provide the appropriate description for the given
   * icon. This function takes in an id defined in `translationIds` and should
   * return a string message for that given message id.
   */
  translateWithId: PropTypes.func.isRequired,
};

CheckBoxIcon.defaultProps = {
  translateWithId: id => defaultTranslations[id],
};

export default CheckBoxIcon;
