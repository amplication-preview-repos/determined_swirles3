import { DirectoryWhereInput } from "./DirectoryWhereInput";
import { DirectoryOrderByInput } from "./DirectoryOrderByInput";

export type DirectoryFindManyArgs = {
  where?: DirectoryWhereInput;
  orderBy?: Array<DirectoryOrderByInput>;
  skip?: number;
  take?: number;
};
