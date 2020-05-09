/*
 * File: auth-routing.module.ts
 * Project: fliq
 * File Created: Sunday, 10th May 2020 12:57:50 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 10th May 2020 12:58:16 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, { path: 'login', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) }, { path: 'login', loadChildren: () => import('./reset/reset.module').then(m => m.ResetModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
