import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class GridStackItem extends React.Component {
  render() {
    return (
      <div>
        ssssss
      </div>
    )
  }
}

GridStackItem.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
};

GridStackItem.defaultProps = {
};
