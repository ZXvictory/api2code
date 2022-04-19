import { SchemaObjectTS, ObjectValueTS } from './types'

import { quicktype, InputData, JSONSchemaInput, JSONSchemaStore } from 'quicktype-core'


/*
  jsonSchema 转 typescript
  https://github.com/quicktype/quicktype
*/
export const quicktypeJSONSchema = async (targetLanguage: string, typeName: string, jsonSchema: string) => {
  // @ts-ignore
  const schemaInput = new JSONSchemaInput(new JSONSchemaStore());
  const inputData = new InputData();

  await schemaInput.addSource({ name: typeName, schema: jsonSchema });

  inputData.addInput(schemaInput);

  return await quicktype({
    inputData,
    lang: targetLanguage,
    "rendererOptions": {
      "just-types": 'true',
    }
  });
}

// 将 jsonSchema 转成 ts interface
export async function jsonSchema2Interface(jsonSchema: ObjectValueTS, name = 'Root'): Promise<string> {

  // 处理 json 类型数据，没找到 required 的统一设置为 true
  // function setJsonSchemaRequired(jsonSchema: ObjectValueTS) {
  //   const addRequired = (jsonSchema: ObjectValueTS) => {
  //     for (const key in jsonSchema) {
  //       if (Object.prototype.toString.call(jsonSchema[key]) === '[object Object]') {
  //         if (key !== 'properties') {
  //           jsonSchema[key].required = jsonSchema[key].required === undefined ? true : jsonSchema[key].required;
  //         }
  //         addRequired(jsonSchema[key] as ObjectValueTS);
  //       }
  //     }
  //   };
  //   addRequired(jsonSchema);
  // }

  // if ((jsonSchema as ObjectValueTS).properties) {
  //   // @ts-ignore
  //   setJsonSchemaRequired(jsonSchema.properties)
  // }

  const { lines: ts } = await quicktypeJSONSchema(
    "ts",
    name,
    JSON.stringify(jsonSchema)
  );

  const removeLangIndent = (target: string, length = 1): string => {
    return target.replace(/:\s*/, `:${' '.repeat(length)}`)
  }

  return ts.map(item => removeLangIndent(item)).join("\n");
}
