import React from 'react';
import { List, Datagrid, TextField, EmailField, 
EditButton, Edit, SimpleForm, DisabledInput, ReferenceInput, SelectInput,
TextInput,LongTextInput, Create
} from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
-           <TextField source="username" />
            <EmailField source="email" />
-           <TextField source="address.street" />
            <TextField source="phone" />
            <TextField source="website" />
            <TextField source="company.name" />
            <EditButton />
        </Datagrid>
    </List>
);

export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
+           <DisabledInput source="id" />
            <ReferenceInput source="userId" reference="users">
-               <SelectInput optionText="id" />
+               <SelectInput optionText="name" />
            </ReferenceInput>
-           <TextInput source="id" />
            <TextInput source="title" />
-           <TextInput source="body" />
+           <LongTextInput source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Create>
);