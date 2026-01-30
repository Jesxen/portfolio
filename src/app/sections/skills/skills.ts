import { Component } from '@angular/core';
import { Skill } from '../../interface/skills.interface';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skills: Skill[] = [
    { img: 'assets/html-icon.png', name: 'Html5' },
    { img: 'assets/css.png', name: 'CSS3' },
    { img: 'assets/tailwind-css-icon.png', name: 'TailwindCSS' },
    { img: 'assets/javascript-icon.png', name: 'JavaScript' },
    { img: 'assets/typescript-icon.png', name: 'TypeScript' },
    { img: 'assets/angular-icon.png', name: 'Angular' },
    { img: 'assets/figma-icon.png', name: 'Figma' },
    { img: 'assets/php-icon.png', name: 'PHP' },
    { img: 'assets/mysql-icon.png', name: 'MySQL' },
    { img: 'assets/git-icon.png', name: 'Git' },
    { img: 'assets/docker-icon.png', name: 'Docker' },
    { img: 'assets/postman.png', name: 'POSTMAN' },
  ];
}
