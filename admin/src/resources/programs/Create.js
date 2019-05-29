import React from 'react';
import { Create, SimpleForm, TextInput, ReferenceInput, SelectInput} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const Component = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <RichTextInput source="description" />
        </SimpleForm>
    </Create>
)
export default Component
