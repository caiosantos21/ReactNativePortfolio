import { appSchema } from '@nozbe/watermelondb'
import { NewTableSchema } from '../template/schema'

export default appSchema({
  version: 1,
  tables: [NewTableSchema]
})
