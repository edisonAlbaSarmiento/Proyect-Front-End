import React from 'react';
import { List, Datagrid, TextField, EditButton } from 'react-admin';

const Component = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />  
            <EditButton />
        </Datagrid>
    </List>
)

export default Component
