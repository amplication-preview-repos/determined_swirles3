import * as graphql from "@nestjs/graphql";
import { DirectoryResolverBase } from "./base/directory.resolver.base";
import { Directory } from "./base/Directory";
import { DirectoryService } from "./directory.service";

@graphql.Resolver(() => Directory)
export class DirectoryResolver extends DirectoryResolverBase {
  constructor(protected readonly service: DirectoryService) {
    super(service);
  }
}
