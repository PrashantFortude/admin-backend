import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
// import { FileInterceptor } from '@nestjs/platform-express';
// import { Express } from 'express';
// import { diskStorage } from 'multer';
import { AppService } from './app.service';

// import { editFileName, excelFileFilter } from './utils/file-upload.utils';

import 'dotenv/config'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @UseInterceptors(FileInterceptor('file', {
  //   storage: diskStorage({
  //     destination: process.env.EXCEL_PATH || './src/excel-data',
  //     filename: editFileName
  //   }),
  //   fileFilter: excelFileFilter,
  // }))
  // @Post('file')
  // uploadFile(
  //   @UploadedFile() file: Express.Multer.File,
  // ) {
  //   return {
  //     file: file
  //   };
  // }
}
