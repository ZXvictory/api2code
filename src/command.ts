#!/usr/bin/env node
import { Command } from 'commander';
import { genListEnum, SwaggerJsonTS, GenCodeResultTS, OptionsTS } from './types/index';
import { parseSwagger } from './utils/parseSwagger';
import { genTS } from './genTS';
import { genService } from './genService';


console.log(1111);


const program = new Command();

program.version('1.0.0')

program
  .command('clone <source> [destination]')
  .description('clone a repository into a newly created directory')
  .action((source, destination) => {
    console.log('clone command called');
  });

// /**
//  * 生成代码
//  *
//  * @param {SwaggerJsonTS} swagger 接收 json、ymal 格式的数据
//  * @param {genListEnum} genList
//  * @return {*}  {GenCodeResultTS}
//  */
// export const swaggerGenCode = async (swagger: SwaggerJsonTS, genList: genListEnum[] = [], options: OptionsTS = {}): Promise<GenCodeResultTS> => {
//   let ts,service;

//   const apiInfo = await parseSwagger(swagger);

//   if (genList.includes(genListEnum.ts)) {
//     ts = genTS(apiInfo, options);
//   }

//   if (genList.includes(genListEnum.service)) {
//     service = genService(apiInfo, options);
//   }


//   const result = Object.assign({apiInfo}, ts ? {ts} : {}, service ? {service}: {});

//   return result;
// }
