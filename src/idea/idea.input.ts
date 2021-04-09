import { ObjectType, Field, ID, InputType,Int } from "@nestjs/graphql";
// import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class IdeaType {
    @Field() userId: String
    @Field() columnId: String;
    @Field() IsEnable: Boolean;
}