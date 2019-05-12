import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Admin, Resource } from 'react-admin';
import News from './resources/news'
import loopbackRestClient from './services/Provider';
import authProvider from './Auth/authProvider'
import Login from './Auth/Login'

const dataProvider = loopbackRestClient('http://localhost:8000/api')

const App = () =>   
<Admin
authProvider={authProvider}
dataProvider={dataProvider}
// loginPage={Login}
>
{
<Resource name="news"
create={News.Create}
list={News.List} 
edit={News.Edit}
show={News.show}
icon={News.PostIcon} /> 
}
</Admin>;

export default App;
