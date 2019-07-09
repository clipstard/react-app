import React from 'react';
import logo from './logo.svg';

import './App.css';
import { Toggle } from './toggle';
import { Clock } from './clock';
import { Provider } from 'react-redux';
import * as reducers from './redux_local/reducers';
import { combineReducers } from 'redux';
import { createStore } from 'redux';
import ItemList from './components/ItemList/ItemList';

const themes = {
    light: {
        backgroundColor: 'white',
        color: 'black'
    },
    dark: {
        backgroundColor: 'black',
        color: 'white'
    }
};

const reducer = combineReducers(reducers);
const store = createStore(reducer);
const theme = React.createContext(themes.light);
class App extends React.Component {
    title = document.title;
    constructor(props) {
        super(props);
        this.handleToggleChange = this.handleToggleChange.bind(this);
        this.context = theme;
        this.state = {toggleState: false, theme: this.context};
    }

    handleToggleChange(value) {
        this.toggleContext();
        this.setState({toggleState: value});
    }

    toggleContext() {
       this.setState({theme: (this.state.theme === themes.dark) ? themes.light : themes.dark})
    }

    render() {
        return (
                <div className="App" style={{backgroundColor: this.state.theme.backgroundColor, color: this.state.theme.color}}>
                    <header>
                        <img src={logo} className="App-logo" alt="logo"/>
                        <Clock play={this.state.toggleState}/>
                        <Toggle onToggleChange={this.handleToggleChange}/>
                        <br />
                        <Provider store={store}>
                            { <ItemList documentTitle={this.title} canFlashTitle={this.state.toggleState}/>}
                        </Provider>
                    </header>
                </div>
        );
    }
}

export default App;
