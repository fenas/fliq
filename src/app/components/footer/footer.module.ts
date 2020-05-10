/*
 * File: footer.module.ts
 * Project: fliq
 * File Created: Sunday, 10th May 2020 1:14:42 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 10th May 2020 3:50:30 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule],
  exports: [FooterComponent],
})
export class FooterModule {}
