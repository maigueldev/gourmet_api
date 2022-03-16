import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import Profile from '@modules/profiles/infra/typeorm/entities/Profile'
 
export default class CreateProfiles implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Profile)
      .values([
        { name: 'Administrador', is_active: 1 },
      ])
      .execute()
  }
}