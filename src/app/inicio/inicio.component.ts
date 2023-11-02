import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  scrollHandler(event: any) {
    let section = document.querySelectorAll('section');
    const trigger = window.innerHeight/5*4;
    
    section.forEach(sec => {
      const secTop = sec.getBoundingClientRect().top;
      if(secTop < trigger){
        sec.classList.add('scrollAnimation');
      } else {
        sec.classList.remove('scrollAnimation');
      }
    })
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
