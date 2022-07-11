import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application'

export default class UploadController {
  public async upload({ request, response, session }: HttpContextContract) {
    const file = request.file('bap')
    if (!file) {
      return session.flash('error', 'No file uploaded')
    }

    await file.move(Application.tmpPath('uploads'))
    session.flash('success', 'File uploaded successfully')
    return response.redirect().back()
  }
}
