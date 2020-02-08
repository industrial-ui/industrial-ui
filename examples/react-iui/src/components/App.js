import React, { Component } from 'react';
import Button from './IUIButton';

import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div>
                <h1>My React App sucks!!!</h1>
                <Button title="not so random text">Some random text</Button>
            </div>
        );
    }
}

export default App;
