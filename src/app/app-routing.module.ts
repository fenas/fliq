/*
 * File: app-routing.module.ts
 * Project: fliq
 * File Created: Sunday, 10th May 2020 12:47:35 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 10th May 2020 12:59:51 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
