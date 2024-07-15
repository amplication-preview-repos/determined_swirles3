import { Directory as TDirectory } from "../api/directory/Directory";

export const DIRECTORY_TITLE_FIELD = "name";

export const DirectoryTitle = (record: TDirectory): string => {
  return record.name?.toString() || String(record.id);
};
