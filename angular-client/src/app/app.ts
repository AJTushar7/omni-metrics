import { Component, signal } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  imports: [DashboardComponent],
  template: `<app-dashboard></app-dashboard>`,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-client');
}
