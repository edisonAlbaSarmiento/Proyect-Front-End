import React from 'react';
import { Edit, SimpleForm, DisabledInput, TextInput, DateInput, LongTextInput, ImageField} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const Component = props => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput label="Id" source="id" />
            <TextInput source="name"/>
            <LongTextInput source="short_description"/>
            <RichTextInput source="description"/>
            <TextInput source="linkPage" />
            <TextInput source="imagenUrl" />
            <ImageField source="imagenUrl" title="title" />
            <DateInput label="Publication date" source="published_at" />
        </SimpleForm>
    </Edit>
)

export default Component
