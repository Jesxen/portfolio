import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Portfolio } from "./components/portfolio/portfolio";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Portfolio],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-app');
}
