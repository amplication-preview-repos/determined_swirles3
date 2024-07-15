import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ListingListRelationFilter } from "../listing/ListingListRelationFilter";

export type DirectoryWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  listings?: ListingListRelationFilter;
};
