import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { IdeaEntity } from './idea/idea.entity'
import { IdeaDTO, Result } from './idea/idea.dto';
import { IdeaType } from './idea/idea.input';
import { IdeaService } from './idea/idea/idea.service'
import { Put } from '@nestjs/common'

@Resolver()
export class IdeaResolver {
	constructor(private readonly ideaService: IdeaService) { }

	// @Query(() => [IdeaDTO])
	// async pokemon() {
	// 	console.log("inside showall controller");
	// 	return this.ideaService.showAll()
	// }

	// @Mutation(() => IdeaDTO)
	// async updateItem(
	// 	@Args('id') id: string,
	// 	@Args('input') input: IdeaType,
	// ): Promise<IdeaType> {
	// 	console.log("Input of resolver :" + input)
	// 	return this.ideaService.update(id, input);
	// }

	// @Mutation(() => Result)
	// async deleteItem(@Args('id') id: string): Promise<Result> {
	// 	return this.ideaService.delete(id);
	// }
}