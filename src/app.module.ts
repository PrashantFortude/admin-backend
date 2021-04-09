import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import {IdeaController } from './idea/idea.controller'
// import {IdeaService } from './idea/idea.service'
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdeaModule } from './idea/idea.module';
import { join } from 'path';

@Module({
  imports: [ TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({ typePaths: ['./**/*.graphql'],
    definitions: {
      path: join(process.cwd(), 'src/graphql.ts'),
    },})
   ,IdeaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

