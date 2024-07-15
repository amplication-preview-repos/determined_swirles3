import { ListingUpdateManyWithoutDirectoriesInput } from "./ListingUpdateManyWithoutDirectoriesInput";

export type DirectoryUpdateInput = {
  name?: string | null;
  description?: string | null;
  listings?: ListingUpdateManyWithoutDirectoriesInput;
};
