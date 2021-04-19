import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { ColumnConfigService } from './column.config.service';
import { ColumnConfigResolver } from './graphql/column.config.resolver';
import { ColumnConfigEntity } from './column.config.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ColumnConfigEntity])],
  providers: [ColumnConfigService, ColumnConfigResolver]
})
export class ColumnConfigModule { 
  
}
