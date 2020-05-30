import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

const Component = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
)
export default Component
