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

Route.on('/').render('auth/login')
Route.on('/home').render('pages/home')
Route.on('/upload').render('pages/upload')
Route.on('/addclient').render('auth/register-client')
Route.on('/addadmin').render('auth/register-admin')

Route.post('login', 'AuthController.login')
Route.delete('logout', 'AuthController.logout')
Route.post('registerAdmin', 'AuthController.registerAdmin')
Route.post('registerClient', 'AuthController.registerClient')
