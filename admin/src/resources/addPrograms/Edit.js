import React from 'react';
import { Edit, SimpleForm, DisabledInput, ReferenceInput, SelectInput, DateInput} from 'react-admin';

const Component = props => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput label="Id" source="id" />
            <ReferenceInput label="users" source="idUser" reference="users">
                <SelectInput optionText="firstName" />
            </ReferenceInput>
            <ReferenceInput label="program" source="idProgram" reference="formationprograms">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <DateInput label="Publication date" source="published_at" />
        </SimpleForm>
    </Edit>
)

export default Component
