import { ObjectType, Field, ID, InputType,Int } from "@nestjs/graphql";
// import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class IdeaType {
    @Field() userId: string
    @Field() columnId: string;
    @Field() IsEnable: Boolean;
}