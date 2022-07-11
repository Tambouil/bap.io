import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '../../Models/User'
import RegisterValidator from '../../Validators/RegisterValidator'

export default class RegisterController {
  public showClientForm({ view }: HttpContextContract) {
    return view.render('auth/register-client')
  }
  public async registerClient({ request, response, session }: HttpContextContract) {
    const payload = await request.validate(RegisterValidator)

    await User.create(payload)
    session.flash('success', 'Client created successfully')
    return response.redirect('/register-client')
  }

  public showAdminForm({ view }: HttpContextContract) {
    return view.render('auth/register-admin')
  }
  public async registerAdmin({ request, response, session }: HttpContextContract) {
    const payload = await request.validate(RegisterValidator)

    await User.create(payload)
    await User.query().where('username', payload.username).update({ roleId: 2 })

    session.flash('success', 'Admin created successfully')
    return response.redirect('/register-admin')
  }
}
