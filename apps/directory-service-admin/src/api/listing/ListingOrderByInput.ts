import { SortOrder } from "../../util/SortOrder";

export type ListingOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  contactInfo?: SortOrder;
  title?: SortOrder;
  address?: SortOrder;
  directoryId?: SortOrder;
};
