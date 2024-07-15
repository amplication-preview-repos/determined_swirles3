import { Directory } from "../directory/Directory";

export type Listing = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  contactInfo: string | null;
  title: string | null;
  address: string | null;
  directory?: Directory | null;
};
