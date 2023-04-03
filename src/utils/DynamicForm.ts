import { v4 as idv4 } from 'uuid';

export const _DYN_ENTRY_KEY_GET_ERRORS = Symbol();
export const _DYN_ENTRY_KEY_DATA = Symbol();

function getProp(obj: Object, key: string) {
  const castObj = obj as any;
  return castObj[key];
}

export const parseFormSchema = (schema: Array<Object> | Object) => {
  const arraySchema = Array.isArray(schema)
    ? schema
    : Object.keys(schema).map(model => ({
      ...getProp(schema, model),
      model
    }))

  return arraySchema.map(
    field => Array.isArray(field) ? field : [field]
  )
}

export const remapFormUuid = (parsedSchema: Object[][]) => {
  const idprefix = 'ig' + idv4().substring(0, 8);
  // console.log(idprefix);
  let id = 1000;
  
  return parsedSchema.map(r => r.map(c => {
    return {
      ...c,
      uuid: idprefix + id++,
    }
  }))
}