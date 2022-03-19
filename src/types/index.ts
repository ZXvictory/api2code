export interface SwaggerJsonTS {
  swagger: string
  info: SwaggerInfoTS
  basePath: string
  tags: ApiTagItemTS[]
  paths: {
    [key: string]: {
      [key: string]: SwaggerApiTS
    }
  }
  definitions: {
    [key: string]: SchemaObjectTS
  }
  openapi?: string
}

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

export interface SchemaObjectTS {
  type: SchemaTypeEnum
  required?: string[] // TODO: 是布尔吗
  properties?: {
    [key: string]: SchemaObjectTS
  }
  items?: SchemaObjectTS
}

export interface SwaggerParameterTS {
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
  type: string
  description: string,
  schema: {
    $ref: string
  }
}

export interface CommonParamTS {
  name: string
  type?: string
  description?: string
  required?: boolean
  schema?: SchemaObjectTS
  value?: string
}


export interface SwaggerApiTS {
  summary: string  // 摘要
  description: string
  tags: string[]
  parameters: SwaggerParameterTS // 请求数据
  responses: { // 响应数据
    [key: string]: SwaggerResponsesTS
  }
  operationId?: string
  deprecated?: boolean
  consumes?: string[]
}

interface ApiTagItemTS {
  name: string
  description: string
}

// 响应项
interface ResponseItemTS {
  statusCode: number
  description: string
  data: SchemaObjectTS
}

export interface ApiItemTS {
  path: string
  method: string
  tags: string[]
  summary: string // 摘要
  description: string // 描述
  requestPathParam: CommonParamTS[] // 请求路径参数
  requestPathQuery: CommonParamTS[]  // 请求路径query
  requestHeader: CommonParamTS[] // 请求头
  requestBodyType: string // jdon form row
  requestBody: CommonParamTS[] | string | SchemaObjectTS
  responseList: ResponseItemTS[]
}

export interface ApiInfoTS {
  swagger: string
  info: SwaggerInfoTS
  basePath: string
  tags: ApiTagItemTS[]
  apiList: ApiItemTS[],
  definitions: {
    [key: string]: SchemaObjectTS
  }
  paths: {
    [key: string]: {
      [key: string]: SwaggerApiTS
    }
  }
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
  setServiceTemplateVariable?: () => ({ [key: string]: any })
}


export enum JsonTypeEnum {
  json,
  jsonSchema
}
