import { Injectable, HttpException, HttpStatus,Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ReturningStatementNotSupportedError } from 'typeorm';
var xlsx = require("xlsx");
import { IdeaEntity } from '../idea.entity';
import { IdeaDTO } from '../idea.dto';

@Injectable()
export class IdeaService {
  constructor(
    @InjectRepository(IdeaEntity)
    public ideaRepository: Repository<IdeaEntity>,
  ) {}
  

  async showAll() {
      console.log("inside show all");
    try {
      return await this.ideaRepository.find({
     
      });
    } catch (error) {
      Logger.log(error);
    }

  }

  async create(data: IdeaDTO) {
    console.log(data);
    try {
      const idea = await this.ideaRepository.create(data);
      await this.ideaRepository.save(idea);
      return idea;
    } catch (error) {
      Logger.log(error)
    }
  }

  async update(id:string, data: Partial<IdeaDTO>) {
    try {
      await this.ideaRepository.update({id}, data);
      return await this.ideaRepository.findOne({id});
    } catch (error) {
      console.log(error)
    }
  }

  async destroy(id:string) {
    try {
      this.ideaRepository.delete({id});
      return await this.ideaRepository.find({});
    } catch (error) {
      Logger.log(error);

    }
  }

  async delete(id:any) {
    try {
      await this.ideaRepository.delete(id);
      return {
        success:true
      }
      // return await this.ideaRepository.findOne(id);
    } catch (error) {
      Logger.log(error);

    }
  }

}
