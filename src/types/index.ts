import json5 from 'json5';

interface SwaggerInfoTS {
  title: string
  version: string
  description: string
  contact?: {  // 联系人
    name: string
    url: string
    email: string
  },
  license?: {  // 许可证
    name: string
    url: string
  }
  termsOfService?: string  // 服务期限
}

enum SwaggerParameterInEnum {
  path,
  query,
  body,
  formData,
  header
}

export enum SchemaTypeEnum {
  string,
  number,
  integer,
  boolean,
  object,
  array,
  null,
  any,
}

interface SchemaObject {
  type: SchemaTypeEnum
  required?: string[] // TODO: 是布尔吗
  properties?: {
    [key: string]: SchemaObject
  }
  items?: SchemaObject
}

interface SwaggerParameterTS {
  name: string
  type: SchemaTypeEnum
  description: string,
  required: boolean,
  in: SwaggerParameterInEnum,
  schema: {
    type: SchemaTypeEnum
    $ref: string
  }
}

interface SwaggerResponsesTS {
  description: string,
  schema: {
    $ref: string
  }
}

interface CommonParamTS {
  name: string
  type: string
  description: string
  required?: boolean
  schema?: SchemaObject
}

interface SwaggerPathsTS {
  [key: string]: {
    [key: string]: {
      summary: string  // 摘要
      description: string
      tags: string[]
      parameters: SwaggerParameterTS // 请求数据
      responses: { // 响应数据
        [key: string]: SwaggerResponsesTS
      }
      operationId?: string
      deprecated?: boolean
    }
  }
}

interface ApiTagItemTS {
  name: string
  description: string
}


export interface SwaggerJsonTS {
  swagger: string
  info: SwaggerInfoTS
  basePath: string
  tags: ApiTagItemTS[]
  paths: SwaggerPathsTS
  definitions: {
    [key: string]: SchemaObject
  }
}

// TODO: 确认下
export enum RequestBodyTypeEnum {
  form,
  json,
  file,
  row
}

// 响应项
interface ResponseItemTS {
  statusCode: number
  description: string
  data: SchemaObject
}

export interface ApiItemTS {
  summary: string // 摘要
  path: string
  method: string
  tags: string[]
  requestParams: CommonParamTS[] // 请求路径参数
  requestQuery: CommonParamTS[]  // 请求路径query
  requestHeader: CommonParamTS[] // 请求头
  requestBodyType: RequestBodyTypeEnum
  requestBody: CommonParamTS[] | string | SchemaObject
  responseList: ResponseItemTS[]
}

export interface ApiInfoTS {
  swagger: string
  info: SwaggerInfoTS
  basePath: string
  tags: ApiTagItemTS[]
  apiList: ApiItemTS[]
}

export interface GenCodeResultTS {
  apiInfo: ApiInfoTS
  ts?: string
  service?: string
}

export const enum genListEnum {
  api,
  ts,
  service
}


export interface OptionsTS {
  // 自定义 ts interface 名称
  setTSInterfaceName?: () => string

  // 自定义 service 模板
  serviceTemplate?: string

  // 自定义 service 模板变量
  setServiceTemplateVariable?: () => ({[key: string]: any})
}


export enum JsonTypeEnum {
  json,
  jsonSchema
}
