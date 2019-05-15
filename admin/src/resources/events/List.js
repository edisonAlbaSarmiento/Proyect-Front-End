import React from 'react';
import { List, Datagrid, TextField, EditButton } from 'react-admin';

const Component = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="short_description" />
            <TextField source="description" />
            <TextField source="linkPage" />
            <TextField source="imagenUrl" />
            <EditButton />
        </Datagrid>
    </List>
)

export default Component
