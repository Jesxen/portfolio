import { Component } from '@angular/core';
import { About } from '../../sections/about/about';
import { Skills } from '../../sections/skills/skills';
import { Projects } from '../../sections/projects/projects';
import { Education } from '../../sections/education/education';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-portfolio',
  imports: [About, Skills, Projects, Education, Sidebar],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  scrollTo(sectionId: string) {
    const container = document.getElementById('content');
    const title = document.getElementById(sectionId + '-title');

    if (container && title) {
      container.scrollTo({
        top: title.offsetTop - 20,
        behavior: 'smooth',
      });
    }
  }
}
