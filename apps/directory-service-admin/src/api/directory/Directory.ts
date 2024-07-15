import { Listing } from "../listing/Listing";

export type Directory = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  listings?: Array<Listing>;
};
