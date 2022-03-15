import { SwaggerJsonTS, ApiInfoTS, RequestBodyTypeEnum, SchemaTypeEnum } from "./types";

export const genApi = (swaggerData: SwaggerJsonTS): ApiInfoTS => {
  console.log("----genApi", swaggerData);

  return {
    swagger: "",
    info: {
      title: "",
      version: "",
      description: "",
    },
    basePath: "",
    tags: [
      {
        name: "string",
        description: "string",
      },
    ],
    apiList: [
      {
        summary: "string", // 摘要
        path: "string",
        method: "string",
        tags: ["string"],
        requestParams: [
          {
            // 请求路径参数
            name: "string",
            type: "string",
            description: "string",
          },
        ],
        requestQuery: [
          {
            // 请求路径query
            name: "string",
            type: "string",
            description: "string",
          },
        ],
        requestHeader: [
          {
            // 请求头
            name: "string",
            type: "string",
            description: "string",
          },
        ],
        requestBodyType: RequestBodyTypeEnum.json,
        requestBody: "", // CommonParamTS[] | string | SchemaObject
        responseList: [
          {
            statusCode: 200,
            description: "string",
            data: {
              type: SchemaTypeEnum.string
            }
          },
        ],
      },
    ],
  };
};
