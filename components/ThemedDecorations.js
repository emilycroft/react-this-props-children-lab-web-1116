import React from 'react'

class ThemedDecoration extends React.Component {
  render () {
    var child = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      })
    })
    return (
      <div className="child">
        {child}
      </div>
    )
  }
}

module.exports = ThemedDecoration
