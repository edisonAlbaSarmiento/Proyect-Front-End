import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList, PostCreate } from './users';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () =>   <Admin dataProvider={dataProvider}>
<Resource name="posts" list={ListGuesser} edit={EditGuesser} />
<Resource name="users" list={UserList} edit={EditGuesser} create={PostCreate}/>
</Admin>;

export default App;
