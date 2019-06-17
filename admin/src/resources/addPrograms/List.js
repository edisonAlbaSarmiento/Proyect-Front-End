import React from 'react';
import { List, Datagrid, TextField, EditButton, ReferenceField } from 'react-admin';

const Component = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField label="Usuario" source='idUser' reference='users'>
                <TextField source='firstName' />
            </ReferenceField>
            <ReferenceField label="Nombre Pograma" source='idProgram' reference='formationprograms'>
                <TextField source='name' />
            </ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
)

export default Component
