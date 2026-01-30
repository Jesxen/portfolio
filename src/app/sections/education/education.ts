import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Educations } from '../../interface/education.interface';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education implements AfterViewInit {
  @ViewChildren('educationItem', { read: ElementRef }) educationItems!: QueryList<ElementRef>;

  educations: Educations[] = [
    {
      img: 'assets/hs.png',
      name: 'High School Diploma in Technological Sciences',
      institution: 'CEAD Santa Cruz de Tenerife Mercedes Pinto',
      date: '2022',
    },
    {
      img: 'assets/ma.png',
      name: 'Auxiliary Operations in Assembly and Maintenance of Microcomputer Systems',
      institution: 'CIFP César Manrique',
      date: '2023',
    },
    {
      img: 'assets/web.png',
      name: 'Higher Technician in Web Application Development',
      institution: 'CIFP César Manrique',
      date: '2026 - Present',
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
      { threshold: 0.2 },
    );

    this.educationItems.forEach((item) => observer.observe(item.nativeElement));
  }
}
