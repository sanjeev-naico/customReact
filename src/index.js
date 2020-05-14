import React, { Component,Fragment } from 'react';

export default class CustomReact extends Component {
    render () {

      function handleChange(e) {
        console.log(e.target.value);
      }

        return (
<div>
          <input placeholder={this.props.placeholder} onChange={handleChange}></input>
          </div>
        )

    }

}