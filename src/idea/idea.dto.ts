import { ObjectType, Field, ID, InputType } from "@nestjs/graphql";

@ObjectType()
export class IdeaDTO {
    @Field(() => ID) readonly id?: string;
    @Field() userId: string
    @Field() columnId: string;
    @Field() IsEnable: Boolean;
}

@ObjectType()
export class Result {
    @Field() success:Boolean
}