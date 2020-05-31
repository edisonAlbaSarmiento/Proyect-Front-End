import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

const Component = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="firstName" />
            <TextInput source="secondName" />
            <TextInput source="phone" />
            <TextInput source="email" />
            <TextInput source="password" />
            <TextInput source="address" />
            <TextInput source="idProgram" />
            <TextInput source="imageUrl" />
        </SimpleForm>
    </Create>
)
export default Component
