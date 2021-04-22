import { ColumnConfigService } from './../column.config.service';
import { ColumnConfigDTO, ColumnConfigInput } from './../column.config.dto';
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";


@Resolver('ColumnConfig')
export class ColumnConfigResolver {
    constructor(private columnConfigService: ColumnConfigService) {
    }

    @Query()
    async columnConfigs(@Args('userId') userId: string): Promise<ColumnConfigDTO> {
        return await this.columnConfigService.showAll(userId);
    }

    @Mutation()
    async createOrUpdateMultiple(@Args('userId') userId: string, @Args('input') input: [ColumnConfigInput]):Promise<any> {
        return await this.columnConfigService.createOrUpdateMany(userId, input)
    }
}