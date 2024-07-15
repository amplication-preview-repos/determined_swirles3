import { DirectoryWhereUniqueInput } from "../directory/DirectoryWhereUniqueInput";

export type ListingCreateInput = {
  description?: string | null;
  contactInfo?: string | null;
  title?: string | null;
  address?: string | null;
  directory?: DirectoryWhereUniqueInput | null;
};
