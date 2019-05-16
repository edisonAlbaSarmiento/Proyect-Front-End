import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Admin, Resource } from 'react-admin';
import News from './resources/news'
import Events from './resources/events'

import loopbackRestClient from './services/Provider';
import authProvider from './Auth/authProvider'
import Login from './Auth/Login'

const dataProvider = loopbackRestClient('http://localhost:8003/api')

class App extends Component   {
    render () {
      return (
    <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    // loginPage={Login}
    >
    <Resource name="news"
        create={News.Create}
        list={News.List} 
        edit={News.Edit}
        show={News.show}
        icon={News.PostIcon} 
    />
    <Resource name="events"
        create={Events.Create}
        list={Events.List} 
        edit={Events.Edit}
        show={Events.show}
        icon={Events.PostIcon}
    /> 
</Admin>
    )
}
}

export default App;
