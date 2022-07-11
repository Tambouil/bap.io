/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.on('/home').render('pages/home')
Route.on('/upload').render('pages/upload')

//Auth
Route.get('/', 'AuthController.showLoginForm')
Route.post('/', 'AuthController.login')
Route.delete('/logout', 'AuthController.logout')

//User
Route.get('/register-client', 'RegisterController.showClientForm')
Route.post('/register-client', 'RegisterController.registerClient')
Route.get('/register-admin', 'RegisterController.showAdminForm')
Route.post('register-admi', 'RegisterController.registerAdmin')

Route.post('/upload', 'UploadController.upload')
