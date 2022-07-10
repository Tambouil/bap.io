import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '../../Models/User'
import RegisterValidator from '../../Validators/RegisterValidator'

export default class AuthController {
  public async login({ request, auth, response }: HttpContextContract) {
    const { username, password } = request.only(['username', 'password'])

    await auth.attempt(username, password)
    return response.redirect('/home')
  }
  public async registerClient({ request, response, session }: HttpContextContract) {
    const payload = await request.validate(RegisterValidator)

    await User.create(payload)
    session.flash('success', 'User created successfully')
    return response.redirect().back()
  }
  public async registerAdmin({ request, auth, response }: HttpContextContract) {
    const payload = await request.validate(RegisterValidator)

    const user = await User.create(payload)

    await auth.login(user)
    return response.redirect('/home')
  }
  public async logout({ auth, response }: HttpContextContract) {
    await auth.logout()
    return response.redirect('/')
  }
}
