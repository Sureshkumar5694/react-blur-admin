import React from 'react';
import PropTypes from 'prop-types';

export class TableBody extends React.Component {
  render() {
    return (
      <tbody>
      {this.props.children}
      </tbody>
    );
  }
}
