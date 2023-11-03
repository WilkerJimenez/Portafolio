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
    const trigger = window.innerHeight / 5 * 4;

    section.forEach(sec => {
      const secTop = sec.getBoundingClientRect().top;
      console.log(trigger)
      if (secTop < trigger) {
        sec.classList.add('scrollAnimation');
      } else {
        sec.classList.remove('scrollAnimation');
      }
    })
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  smoothScroll(event: {
    currentTarget: any;
    srcElement: any; target: any;
  }) {
    var target = event.srcElement.attributes.id || event.currentTarget.id;
    var link = document.getElementById("scroll_" + target);
    console.log(link)
    link?.scrollIntoView({ behavior: "smooth" })

  }
}
