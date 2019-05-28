import React from 'react';
import { Create, SimpleForm, ReferenceInput, SelectInput} from 'react-admin';

const Component = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="users" source="idUser" reference="users">
                <SelectInput optionText="firstName" />
            </ReferenceInput>
            <ReferenceInput label="program" source="idProgram" reference="formationprograms">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
)
export default Component
