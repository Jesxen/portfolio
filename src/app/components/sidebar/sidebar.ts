import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
scrollTo(sectionId: string) {
  const container = document.getElementById('content');
  const title = document.getElementById(sectionId + '-title');

  if (container && title) {
    container.scrollTo({
      top: title.offsetTop - 100, // margen opcional
      behavior: 'smooth'
    });
  }
}


}
