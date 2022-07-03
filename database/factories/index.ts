import Factory from '@ioc:Adonis/Lucid/Factory'
import User from '../../app/Models/User'

const UserFactory = Factory.define(User, ({ faker }) => ({
  username: faker.internet.userName(),
  email: faker.internet.email(),
  password: 'secret',
})).build()

export default UserFactory
