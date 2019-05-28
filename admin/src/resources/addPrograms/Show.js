import React from 'react';
import { Show, SimpleShowLayout, TextField, DateField, ReferenceField } from 'react-admin';

const Component = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <ReferenceField label="users" source="idUser" reference="users">
                    <TextField  optionText="firstName" />
                </ReferenceField>
                <ReferenceField label="users" source="idProgram" reference="formationprograms">
                    <TextField  optionText="name" />
                </ReferenceField>
            <DateField label="Publication date" source="created_at" />
        </SimpleShowLayout>
    </Show>
)

export default Component
