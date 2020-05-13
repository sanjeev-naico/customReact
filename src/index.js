import React, { Component,Fragment } from 'react';

export default class DummyComponent extends Component {
    render () {

        return (
            <Fragment>
            <button
              onClick={() => {
               alert("Oh look, an alert!");
              }} 
            >
              Show Alert
            </button>
            <button
              onClick={() => {
                console.log("You just broke something!");
              }}
            >
              Oops, an error
            </button>
            <button
              onClick={() => {
               console.log("It's ok now!");
              }}
            >
              Success!
            </button>
          </Fragment>
        )

    }

}