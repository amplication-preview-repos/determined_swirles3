import { ListingCreateNestedManyWithoutDirectoriesInput } from "./ListingCreateNestedManyWithoutDirectoriesInput";

export type DirectoryCreateInput = {
  name?: string | null;
  description?: string | null;
  listings?: ListingCreateNestedManyWithoutDirectoriesInput;
};
