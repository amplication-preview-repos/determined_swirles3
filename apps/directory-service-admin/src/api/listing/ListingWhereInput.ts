import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DirectoryWhereUniqueInput } from "../directory/DirectoryWhereUniqueInput";

export type ListingWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  contactInfo?: StringNullableFilter;
  title?: StringNullableFilter;
  address?: StringNullableFilter;
  directory?: DirectoryWhereUniqueInput;
};
