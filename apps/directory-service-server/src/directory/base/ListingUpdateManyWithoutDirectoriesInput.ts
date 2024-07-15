/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ListingWhereUniqueInput } from "../../listing/base/ListingWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ListingUpdateManyWithoutDirectoriesInput {
  @Field(() => [ListingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ListingWhereUniqueInput],
  })
  connect?: Array<ListingWhereUniqueInput>;

  @Field(() => [ListingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ListingWhereUniqueInput],
  })
  disconnect?: Array<ListingWhereUniqueInput>;

  @Field(() => [ListingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ListingWhereUniqueInput],
  })
  set?: Array<ListingWhereUniqueInput>;
}

export { ListingUpdateManyWithoutDirectoriesInput as ListingUpdateManyWithoutDirectoriesInput };
