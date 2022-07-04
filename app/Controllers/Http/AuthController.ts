import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '../../Models/User'
import RegisterValidator from '../../Validators/RegisterValidator'

export default class AuthController {
  public showLoginForm({ view }: HttpContextContract) {
    return view.render('auth/login')
  }
  public async login({ request, auth, response }: HttpContextContract) {
    const { username, password } = request.only(['username', 'password'])

    await auth.attempt(username, password)
    return response.redirect('/home')
  }
  public showRegisterForm({ view }: HttpContextContract) {
    return view.render('auth/register')
  }
  public async register({ request, auth, response }: HttpContextContract) {
    const payload = await request.validate(RegisterValidator)

    const user = await User.create(payload)

    await auth.login(user)
    return response.redirect('/')
  }
  public async logout({ auth, response }: HttpContextContract) {
    await auth.logout()
    return response.redirect('/')
  }
}
