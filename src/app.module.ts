import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core/constants';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggingInterceptor } from './shared/logging.interceptor';
import { ColumnConfigModule } from './column-config/column.config.module';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/**/*.graphql']
    }),
    TypeOrmModule.forRoot(),
    ColumnConfigModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor
    }
  ],
})
export class AppModule {

}

// GraphQLModule.forRoot({
//   autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
// }),