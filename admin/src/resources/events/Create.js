import React from 'react';
import { Create, SimpleForm, TextInput, LongTextInput} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const Component = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <LongTextInput source="short_description" />
            <RichTextInput source="description" />
            <TextInput source="linkPage" />
            <TextInput source="imagenUrl" />
        </SimpleForm>
    </Create>
)
export default Component
