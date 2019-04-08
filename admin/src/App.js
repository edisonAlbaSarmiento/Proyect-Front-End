import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList, PostCreate } from './users';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import authProvider from './authProvider';
import loopbackRestClient from 'aor-loopback';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () =>   <Admin authProvider={authProvider} restClient={loopbackRestClient('http://localhost:8000/explorer/')}>
<Resource name="posts" list={ListGuesser} edit={EditGuesser} icon={PostIcon} />
<Resource name="users" list={UserList} edit={EditGuesser} create={PostCreate} icon={UserIcon} />
</Admin>;

export default App;
