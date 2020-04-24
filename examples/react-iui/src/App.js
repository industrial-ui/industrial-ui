import React, { Component } from 'react';
import {Button as Btn} from 'industrial-ui';
import adapter from 'svelte-adapter/react';

const Button = adapter(
  Btn,
  {},
  'div',
);

class App extends Component {
    render() {
        return (
            <div>
                <h1>My React IUI example using svelte-adapter</h1>
                <Button title="not so random text" />
            </div>
        );
    }
}

export default App;
