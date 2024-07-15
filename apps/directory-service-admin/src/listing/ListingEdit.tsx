import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DirectoryTitle } from "../directory/DirectoryTitle";

export const ListingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
