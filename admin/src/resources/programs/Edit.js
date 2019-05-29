import React from 'react';
import { Edit, SimpleForm, DisabledInput, TextInput, DateInput, SelectInput, TextField} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const Component = props => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput label="Id" source="id" />
            <TextInput source="name" />
            <RichTextInput source="description" />
            <SelectInput label="users" source="idUser" reference="users">
                <TextField optionText="firstName" />
            </SelectInput>
            <DateInput label="Publication date" source="published_at" />
        </SimpleForm>
    </Edit>
)

export default Component
