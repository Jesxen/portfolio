import { Component, signal } from '@angular/core';
import { Portfolio } from './components/portfolio/portfolio';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Portfolio],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('portfolio-app');

  
}