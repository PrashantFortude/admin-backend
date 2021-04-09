import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { IdeaEntity } from './idea/idea.entity'
import { IdeaDTO, Result } from './idea/idea.dto';
import { IdeaType } from './idea/idea.input';
import { IdeaService } from './idea/idea/idea.service'
import { Put } from '@nestjs/common'
import {Admin } from './graphql'

@Resolver()
export class IdeaResolver {
	constructor(private readonly ideaService: IdeaService) { }

	@Query(() => [IdeaDTO])
	async admin(
		@Args('userId') userId:String
	) {
		console.log("inside showall controller");
		return this.ideaService.showAll(userId)
	}

	@Mutation()
	async updateItem(
		@Args('userId') userId:String,
		@Args('input') data:any,
	) {
		console.log("Input of resolver :" + data)
		return await this.ideaService.update(userId, data);
	}

	@Mutation()
	async createItem(
		@Args('userId') userId:String,
		@Args('input') data:any,
	) {
		console.log("Input of resolver :" + data)
		return await this.ideaService.createnew(userId, data);
	}

	// @Mutation(() => Result)
	// async deleteItem(@Args('id') id: string): Promise<Result> {
	// 	return this.ideaService.delete(id);
	// }
}

// @Mutation()
//     async updateStudent(@Args('id') id: string, @Args('input') student: any) {
//         return await this.studentService.update(id, student)
//     }