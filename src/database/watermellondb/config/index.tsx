import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'
import { NewTableModel } from '../template/model'
import schema from './schema'
// import migrations from './migrations'

const adapter = new SQLiteAdapter({
  schema,
  //   migrations,
  jsi: true /* Platform.OS === 'ios' */,
  onSetUpError: (error) => {}
})

export const projectDb = new Database({
  adapter,
  modelClasses: [NewTableModel]
})
