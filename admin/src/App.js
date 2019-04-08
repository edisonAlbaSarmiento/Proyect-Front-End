import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList, PostCreate } from './users';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import authProvider from './authProvider';
import loopbackRestClient from './services/Provider';

const dataProvider = loopbackRestClient('http://localhost:8000/api')

const App = () =>   
<Admin
dataProvider={dataProvider}
>
{/* <Resource name="posts" list={ListGuesser} edit={EditGuesser} icon={PostIcon} />
<Resource name="users" list={UserList} edit={EditGuesser} create={PostCreate} icon={UserIcon} /> */}
</Admin>;

export default App;
