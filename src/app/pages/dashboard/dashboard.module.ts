import { FooterComponent } from './../../components/footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  declarations: [DashboardComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
