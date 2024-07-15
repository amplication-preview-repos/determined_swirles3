import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DirectoryService } from "./directory.service";
import { DirectoryControllerBase } from "./base/directory.controller.base";

@swagger.ApiTags("directories")
@common.Controller("directories")
export class DirectoryController extends DirectoryControllerBase {
  constructor(protected readonly service: DirectoryService) {
    super(service);
  }
}
