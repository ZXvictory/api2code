import { genListEnum, SwaggerJsonTS, GenCodeResultTS, OptionsTS } from './types/index';
import { genApi } from './genApi';
import { genTS } from './genTS';
import { genService } from './genService';


/**
 * 生成代码
 *
 * @param {(SwaggerJsonTS | string)} swagger 接收 json、ymal 格式的数据
 * @param {genListEnum} genList
 * @return {*}  {GenCodeResultTS}
 */
export const swaggerGenCode = (swagger: SwaggerJsonTS | string, genList: genListEnum[], options: OptionsTS): GenCodeResultTS => {
  let ts,service,apiInfo;

  if (typeof swagger === 'string') {
    const swaggerData = {
      swagger: '',
      info: {
        title: '',
        version: '',
        description: ''
      },
      basePath: '',
      tags: [],
      paths: {},
      definitions: {}
    }

    apiInfo = genApi(swaggerData);
  } else {
    apiInfo = genApi(swagger);
  }

  if (genList.includes(genListEnum.ts)) {
    ts = genTS(apiInfo, options);
  }

  if (genList.includes(genListEnum.service)) {
    service = genService(apiInfo, options);
  }

  console.log('---options', options);


  const result = {
    apiInfo
  }

  return Object.assign(result, ts ? {ts} : {}, service ? {service}: {});
}
