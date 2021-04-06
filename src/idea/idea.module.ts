import { Controller, Module } from '@nestjs/common';
import { IdeaService } from './idea/idea.service';
import {IdeaController } from './idea/idea.controller';
import {IdeaEntity } from './idea.entity';
import {TypeOrmModule } from '@nestjs/typeorm';
import { IdeaResolver } from '../idea.resolver';

@Module({
  imports:[TypeOrmModule.forFeature([IdeaEntity])],
  providers: [IdeaService,IdeaResolver],
  controllers:[IdeaController]
})
export class IdeaModule {}
