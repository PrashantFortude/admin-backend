import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { getConnection, Repository } from 'typeorm';
import { ColumnConfigEntity } from './column.config.entity';

import { ColumnConfigDTO, ColumnConfigInput } from './column.config.dto';
const axios = require('axios');
@Injectable()
export class ColumnConfigService {
    constructor() { }

    async showAll(userId: string): Promise<any> {
        var responseObj = {
            success: false,
            error: null,
            data: []
        }
        var datas;

        try {
            axios.post("http://localhost:5000/graphql", {
                query: `{
                allIdeas{
                  nodes{
                    isEnable
                    userId
                    columnId
                  }
                }
              }`
            }).then(res => {
                console.log(res)
            })
            if (!datas) {
                console.log('failed to fetch data');
                responseObj.error = 'failed to fetch data';
            } else {
                responseObj.success = true;
                responseObj.data = datas.data.data.allIdeas.nodes;
                responseObj.error = null;
                console.log(responseObj.data);
                return responseObj;
            }

        } catch (e) {
            console.log(e.message);
            responseObj.error = e.message || 'internal server error';
            return responseObj;
        }

    }

    async createOrUpdateMany(userId: string, data: [ColumnConfigInput]): Promise<any> {
        const responseObj = {
            success: false,
            error: null,
            data: []
        }

        try {
            axios.post("http://localhost:5000/graphql", {
                query: `mutation($userId: userId, $inputs: inputs){
                createcolumndata(input: {
                  userid:$userId,
                  inputs:$inputs
                }) {
                  boolean
                }
              }`,
                variables: { userId: userId, inputs: data }
            }).then(res => {
                console.log(res);
                responseObj.success = true;
                return responseObj;

            })
        } catch (e) {
            responseObj.error = e.message || 'internal server error'
            return responseObj;
        }
    }
}



