import React from 'react';
import { List, Datagrid, TextField, EditButton } from 'react-admin';

const Component = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="firstName" />
            <TextField source="secondName" />
            <TextField source="phone" />
            <TextField source="email" />
            <TextField source="address" />
            <TextField source="imagenUrl" />
        </Datagrid>
    </List>
)

export default Component
