import { Model } from '@nozbe/watermelondb'
import { field } from '@nozbe/watermelondb/decorators'

export class NewTableModel extends Model {
  static table = 'InserTableNameHere'

  @field('name') name!: string
}
