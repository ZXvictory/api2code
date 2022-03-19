import { TSOptionTS, JsonTypeEnum } from './types'

/**
 * 生成 TS Interface 代码，支持 json、jsonSchema 格式
 *
 * @param {object} data
 * @param {JsonTypeEnum} type
 * @param {TSOptionTS} options
 * @return {*}  {string}
 */
export const genTSCode = (data: object, type: JsonTypeEnum, options: TSOptionTS): string => {
  console.log('---genApiCode', data, type, options);

  return '';
}
