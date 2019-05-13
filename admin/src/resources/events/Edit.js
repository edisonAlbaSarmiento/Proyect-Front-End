import React from 'react';
import { Edit, SimpleForm, DisabledInput, TextInput, DateInput, LongTextInput} from 'react-admin';

const Component = props => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput label="Id" source="id" />
            <TextInput source="name"/>
            <LongTextInput source="short_description"/>
            <TextInput source="description"/>
            <DateInput label="Publication date" source="published_at" />
        </SimpleForm>
    </Edit>
)

export default Component
