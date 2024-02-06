import { tableSchema } from '@nozbe/watermelondb'

export const NewTableSchema = tableSchema({
  name: 'InserTableNameHere',
  columns: [{ name: 'name', type: 'string' }]
})
