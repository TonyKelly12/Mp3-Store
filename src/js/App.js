/**
 * Created by toned_000 on 3/5/2017.
 */
const css = require('../Sass/main.scss');
import React from 'react';
import {render} from 'react-dom';
import ContactList from './ContactList';
class App extends React.Component{
    render(){
        return (
            <div>
                <h1>Contacts Lists</h1>
                <ContactList />
            </div>

        )
    }
}

render(<App />, document.getElementById('app'));
