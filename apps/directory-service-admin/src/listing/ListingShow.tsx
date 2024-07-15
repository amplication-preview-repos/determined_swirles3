import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { DIRECTORY_TITLE_FIELD } from "../directory/DirectoryTitle";

export const ListingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="description" source="description" />
        <TextField label="contactInfo" source="contactInfo" />
        <TextField label="title" source="title" />
        <TextField label="address" source="address" />
        <ReferenceField
          label="directory"
          source="directory.id"
          reference="Directory"
        >
          <TextField source={DIRECTORY_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
