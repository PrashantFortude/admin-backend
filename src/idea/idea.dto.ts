import { ObjectType, Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class IdeaDTO {
    @Field(() => ID) readonly id?: string;
    @Field() userId: String
    @Field() columnId: String;
    @Field() IsEnable: Boolean;
}

@ObjectType()
export class Result {
    @Field() success:Boolean
}

