import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ClientCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Token Expires In" source="accessTokenExpiresIn" />
        <TextInput label="ClientId" source="clientId" />
        <TextInput label="ClientName" source="clientName" />
        <TextInput label="Client Secret" source="clientSecret" />
      </SimpleForm>
    </Create>
  );
};
