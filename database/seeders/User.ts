import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Role from '../../app/Enums/Roles'
import User from '../../app/Models/User'
import UserFactory from '../factories'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await User.create({
      username: 'admin',
      email: 'v.berceaux@gmail.com',
      password: 'admin',
      role_id: Role.ADMIN,
    })

    await UserFactory.createMany(10)
  }
}
