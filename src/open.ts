import { OptionsTS, JsonTypeEnum } from './types'

/**
 * 生成 API 代码，支持 json、jsonSchema
 *
 * @param {object} data
 * @param {JsonTypeEnum} type
 * @param {OptionsTS} options
 * @return {*}  {string}
 */
export const genApiCode = (data: object, type: JsonTypeEnum, options: OptionsTS): string => {
  console.log('---genApiCode', data, type, options);

  return '';
}
