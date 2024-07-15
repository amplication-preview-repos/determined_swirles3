import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DirectoryServiceBase } from "./base/directory.service.base";

@Injectable()
export class DirectoryService extends DirectoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
