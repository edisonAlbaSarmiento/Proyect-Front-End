import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

const Component = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="short_description" />
            <TextField source="description" />
        </Datagrid>
    </List>
)

export default Component
