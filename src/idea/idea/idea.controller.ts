import {
    Controller,
    Get,
    Logger,
    Post,
    Param,
    Body,
    Delete,
    Put,
    Patch,
    UsePipes,
    UseGuards,
    Query,
    HttpStatus,
    UseInterceptors,
    UploadedFile,
    UploadedFiles
  } from '@nestjs/common';
  import { IdeaService } from './idea.service';
  import { IdeaDTO } from '../idea.dto';
  import { FileInterceptor,FilesInterceptor } from '@nestjs/platform-express';
  
  @Controller('idea')
  export class IdeaController {
    private logger = new Logger('IdeaController');
  
    constructor(private ideaService: IdeaService) { }
  
  
    @Get()
    async showAllIdeas() {
      // return await this.ideaService.showAll();
    }
  
    @Post()
    createIdea(@Body() data: IdeaDTO) {
      return this.ideaService.create(data);
    }
  
    // @Patch(':id')
    // async updateIdea(@Param('id') id: string, @Body() data: Partial<IdeaDTO>) {
    //   return await {
    //     statusCode: HttpStatus.OK,
    //     message: 'User update successfully',
    //     data: await this.ideaService.update(id, data),
    //   };
    // }
  
  
  }
  