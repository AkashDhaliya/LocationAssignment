export const DBConfig = {
  name: 'MyDB',
  version: 1,
  objectStoresMeta: [
    {
      store: 'data',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } }
      ]
    }
  ]
};