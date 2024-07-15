import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DirectoryTitle } from "../directory/DirectoryTitle";

export const ListingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="contactInfo" source="contactInfo" />
        <TextInput label="title" source="title" />
        <TextInput label="address" source="address" />
        <ReferenceInput
          source="directory.id"
          reference="Directory"
          label="directory"
        >
          <SelectInput optionText={DirectoryTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
