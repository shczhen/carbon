import React from 'react';
import classNames from 'classnames';
import Icon from './Icon';
if (process.env.importSASS || process.env.importSASS === undefined) {
  require('@console/bluemix-components/consumables/scss/components/card/card.scss');
}

const propTypes = {
  className: React.PropTypes.string,
  id: React.PropTypes.string,
  ariaLabel: React.PropTypes.string,
  iconName: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
};

const CardActionItem = ({ className, id, ariaLabel, iconName, description, ...other }) => {
  const cardActionItemClasses = classNames({
    'bx--app-actions__button': true,
    [className]: className,
  });

  return (
    <button
      {...other}
      className={cardActionItemClasses}
      id={id}
      aria-label={ariaLabel}
    >
      <Icon
        className="bx--app-actions__button--icon"
        name={iconName}
        description={description}
      />
    </button>
  );
};

CardActionItem.propTypes = propTypes;

export default CardActionItem;
