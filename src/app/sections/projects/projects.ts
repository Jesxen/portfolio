import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Project } from '../../interface/projects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements AfterViewInit {

  @ViewChildren('projectItem', { read: ElementRef }) projectItems!: QueryList<ElementRef>;

  projects: Project[] = [
    {
      title: 'Majesty',
      description: `Majesty is a full-stack web application for exploring hotels and managing user reviews.
      The project includes an Angular frontend and a PHP + MySQL backend.`,
      link: 'https://github.com/Jesxen/Majesty',
    },
    {
      title: 'Simple Tasks Manager',
      description: `It uses a REST API developed in PHP to handle communication between the client and the server.`,
      link: 'https://github.com/Jesxen/task-manager',
    },
    {
      title: 'Simple Restaurant Reservation System',
      description: `A simple and elegant web application for managing restaurant reservations. Built with PHP, MySQL, Blade, TailwindCSS, and JavaScript, it offers a modern, user-friendly experience.`,
      link: 'https://github.com/Jesxen/restaurant-reservations',
    },
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    this.projectItems.forEach((item) => observer.observe(item.nativeElement));
  }
}
