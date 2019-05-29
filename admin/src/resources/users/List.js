import React from 'react';
import { List, Datagrid, TextField, ImageField, EditButton } from 'react-admin';

const Component = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="firstName" />
            <TextField source="secondName" />
            <TextField source="phone" />
            <TextField source="email" />
            <TextField source="address" />
            <ImageField source="imageUrl" title="profile" />
            <EditButton />
        </Datagrid>
    </List>
)

export default Component
