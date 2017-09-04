import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class DragSource extends React.Component {
  render() {
    return (
      <div>
        ssssss
      </div>
    )
  }
}

DragSource.propTypes = {
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

DragSource.defaultProps = {
};
