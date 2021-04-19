import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { getConnection, Repository } from 'typeorm';
import { ColumnConfigEntity } from './column.config.entity';

import { ColumnConfigDTO, ColumnConfigInput } from './column.config.dto';
const axios = require('axios');
@Injectable()
export class ColumnConfigService {
    constructor(@InjectRepository(ColumnConfigEntity) public columnConfigRepository: Repository<ColumnConfigEntity>) { }

    async showAll(userId: string): Promise<any> {

        axios.post( "http://localhost:5000/graphql",{
            query: `{
                allIdeas{
                  nodes{
                    isEnable
                    id
                  }
                }
              }`
        }).then(res=>{
            console.log(res)
        })

        const responseObj = {
            success: false,
            error: null,
            data: []
        }
        try {
            const resultSet = await this.columnConfigRepository.find({ userId: userId });
            if (!resultSet) {
                responseObj.error = 'failed to fetch data';
            } else {
                responseObj.success = true;
                responseObj.data = resultSet;
            }
            return responseObj;
        } catch (e) {
            responseObj.error = e.message || 'internal server error';
            return responseObj;
        }

    }

    async createOrUpdateMany(userId: string, data: [ColumnConfigInput]): Promise<any> {

        axios.post( "http://localhost:5000/graphql",{
            query: `mutation($userId: userId, $popclubingparameters: popclubingparameters){
                createcolumndata(input: {
                  userid:$userId,
                  popclubingparameters:$popclubingparameters
                }) {
                  boolean
                }
              }`,
              variables:{userId:userId,popclubingparameters:data }
        }).then(res=>{
            console.log(res)



    }
        )}
}


