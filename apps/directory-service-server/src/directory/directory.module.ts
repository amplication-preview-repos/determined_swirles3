import { Module } from "@nestjs/common";
import { DirectoryModuleBase } from "./base/directory.module.base";
import { DirectoryService } from "./directory.service";
import { DirectoryController } from "./directory.controller";
import { DirectoryResolver } from "./directory.resolver";

@Module({
  imports: [DirectoryModuleBase],
  controllers: [DirectoryController],
  providers: [DirectoryService, DirectoryResolver],
  exports: [DirectoryService],
})
export class DirectoryModule {}
