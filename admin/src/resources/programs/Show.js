import React from 'react';
import { Show, SimpleShowLayout, TextField, DateField } from 'react-admin';

const Component = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="short_description" />
            <TextField source="description" />
            <TextField source="linkPage" />
            <TextField source="imagenUrl" />
            <DateField label="Publication date" source="created_at" />
        </SimpleShowLayout>
    </Show>
)

export default Component
