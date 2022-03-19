import { genListEnum, SwaggerJsonTS, GenCodeResultTS, OptionsTS, ApiInfoTS } from './types/index';
import { genApi } from './genApi';
import { genTS } from './genTS';
import { genService } from './genService';


/**
 * 生成代码
 *
 * @param {SwaggerJsonTS} swagger 接收 json、ymal 格式的数据
 * @param {genListEnum} genList
 * @return {*}  {GenCodeResultTS}
 */
export const swaggerGenCode = async (swagger: SwaggerJsonTS, genList: genListEnum[] = [], options: OptionsTS = {}): GenCodeResultTS => {
  let ts,service;

  const apiInfo = await genApi(swagger);

  if (genList.includes(genListEnum.ts)) {
    ts = genTS(apiInfo, options);
  }

  if (genList.includes(genListEnum.service)) {
    service = genService(apiInfo, options);
  }

  const result = {
    apiInfo
  }

  return Object.assign(result, ts ? {ts} : {}, service ? {service}: {});
}
