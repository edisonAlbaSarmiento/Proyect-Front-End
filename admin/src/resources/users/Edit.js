import React from 'react';
import { Edit, SimpleForm, DisabledInput, TextInput, DateInput, ImageInput, ImageField} from 'react-admin';

const Component = props => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput label="Id" source="id" />
            <TextInput source="firstName" />
            <TextInput source="secondName" />
            <TextInput source="phone" />
            <TextInput source="email" />
            <TextInput source="address" />
            <TextInput source="imageUrl" />
            <ImageField source="imageUrl" title="title" />
            <DateInput label="Publication date" source="published_at" />
        </SimpleForm>
    </Edit>
)

export default Component
