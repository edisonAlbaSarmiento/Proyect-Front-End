import React from 'react';
import { List, Datagrid, TextField, EditButton, ReferenceField } from 'react-admin';

const Component = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField label="users" source="idUser" reference="users">
                <TextField optionText="firstName" />
            </ReferenceField>
            <ReferenceField label="program" source="idProgram" reference="formationprograms">
                <TextField optionText="name" />
            </ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
)

export default Component
