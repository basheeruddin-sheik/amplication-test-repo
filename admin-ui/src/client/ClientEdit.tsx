import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ClientEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Token Expires In" source="accessTokenExpiresIn" />
        <TextInput label="ClientId" source="clientId" />
        <TextInput label="ClientName" source="clientName" />
        <TextInput label="Client Secret" source="clientSecret" />
      </SimpleForm>
    </Edit>
  );
};
