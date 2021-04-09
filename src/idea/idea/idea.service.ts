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


  async showAll(userId:String) {
      console.log("inside show all");
    try {
      return await this.ideaRepository.find({userId});
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

  async createnew (userId:String,  data:IdeaDTO){
    console.log(data);
    try{
      const idea = await this.ideaRepository.create(data);
      await this.ideaRepository.save(idea);
      return idea;
    } catch(error){
      Logger.log(error);
    }
  }

  async update(userId:String, data: Partial<IdeaDTO>) {
    try
     {
    //   for(let  i = 0; i<data.length;i++){
    //   await this.ideaRepository.update({userId}, data[i]);
    //   }
      await this.ideaRepository.update({userId}, data);
      return await this.ideaRepository.findOne({userId});
    } catch (error) {
      console.log(error)
    }
  }



//   async update(id: string, data: Partial<StudentDTO>): Promise<any> {
//     return await this.client.send('PUT:student', { id: id, ...data });
// }
  // async destroy(id:string) {
  //   try {
  //     this.ideaRepository.delete({id});
  //     return await this.ideaRepository.find({});
  //   } catch (error) {
  //     Logger.log(error);

  //   }
  // }

  // async delete(id:any) {
  //   try {
  //     await this.ideaRepository.delete(id);
  //     return {
  //       success:true
  //     }
  //   } catch (error) {
  //     Logger.log(error);

  //   }
  // }

}
