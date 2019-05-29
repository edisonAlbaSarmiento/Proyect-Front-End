import React from 'react';
import { Create, SimpleForm, TextInput, ReferenceField, TextField} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const Component = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <RichTextInput source="description" />
            <ReferenceField label="users" source="idUser" reference="users">
                <TextField optionText="firstName" />
            </ReferenceField>
        </SimpleForm>
    </Create>
)
export default Component
