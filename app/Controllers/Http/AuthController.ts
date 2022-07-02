import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '../../Models/User'

export default class AuthController {
  public showLoginForm({ view }: HttpContextContract) {
    return view.render('auth/login')
  }
  public async login({ request, auth, response }: HttpContextContract) {
    const { email, password } = request.only(['email', 'password'])

    await auth.attempt(email, password)
    return response.redirect('/')
  }
  public showRegisterForm({ view }: HttpContextContract) {
    return view.render('auth/register')
  }
  public async register({ request, auth, response }: HttpContextContract) {
    const payload = request.only(['username', 'email', 'password'])

    const user = await User.create(payload)

    await auth.login(user)
    return response.redirect('/')
  }
  public async logout({ auth, response }: HttpContextContract) {
    await auth.logout()
    return response.redirect('/')
  }
}
