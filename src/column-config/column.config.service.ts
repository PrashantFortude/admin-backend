import { Injectable } from '@nestjs/common';


import { ColumnConfigDTO, ColumnConfigInput } from './column.config.dto';
const axios = require('axios');
@Injectable()
export class ColumnConfigService {
    constructor() { }

    async showAll(userId: string): Promise<any> {
        var responseObj = {
            success: false,
            error: null,
            data : []
        }
        var datas;

        try{
       datas = await axios.post( "http://localhost:5000/graphql",{
            query: `{
                allIdeas{
                  nodes{
                    isEnable
                    userId
                    columnId
                  }
                }
              }`
        });
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

        var responseObj = {
            success: false,
            error: null,
            data: []
        }
        console.log(userId);
        console.log(data);
        var newdatas = false;
        // try{
       await axios.post("http://localhost:5000/graphql",{
            query: `mutation ($userid: String,$inputs:  [ColumninputInput]){
                createcolumndata(input: {
                  userid: $userid,
                  inputs:$inputs
                }) {
                  clientMutationId
                  boolean
                } 
              }`,
           variables:{userid: userId, inputs:data}
        }).then(res=>{ 
            console.log(res.data)
            newdatas = true
            return newdatas ;
        }).catch(e=>{
            console.log(e.message);
            return e.message;
        })

        // if (!newdatas) {
        //     console.log('failed to fetch data');
        //     responseObj.error = 'failed to fetch data';
        // } else {
        //     responseObj.success = true;
        //     console.log(responseObj);
        //     return responseObj;
        // }
       
    // } catch (e) {
    //     console.log(e.message);
    //     responseObj.error = e.message || 'internal server error';
    //     return responseObj;
    // }
    //     .then(res=>{
    //         responseObj.success = true;
    //         console.log(responseObj);
    //         return responseObj;

    // })
    //     } catch(e){
    //         responseObj.error = e.message || 'intenal server error'
    //         console.log(responseObj)
    //         return responseObj;
    //     }
        }
}



