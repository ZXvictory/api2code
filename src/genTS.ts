import { ApiInfoTS, OptionsTS, JsonTypeEnum } from './types';
import { genTSInterface } from './open/index';

export const genTS = (apiInfo: ApiInfoTS, options: OptionsTS): string => {
  console.log('---genService', apiInfo, options);

  genTSInterface(apiInfo, JsonTypeEnum.jsonSchema, options);

  return ''
}
