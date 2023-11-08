import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  correo: string = "wilkerjim011";
  value:boolean = true;
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
    this.navMenu();
    link?.scrollIntoView({ behavior: "smooth" })

  }

  redirect(url: string) {
    window.open(url, '_blank');
  }

  navMenu() {
    let body = document.getElementById('body');
    let navegation = document.getElementById('cellNav');
    let btn = document.getElementById('menuBtn');
    if (this.value === true) {
      navegation?.classList.remove("cellNavAnimationOut")
      btn?.classList.remove("-rotate-0")
      navegation?.classList.remove("hidden")
      btn?.classList.add("-rotate-90")
      body?.classList.add("fixed")
      navegation?.classList.add("cellNavAnimation")
      this.value = false;
    } else {
      navegation?.classList.add("cellNavAnimationOut")
      setTimeout(() => {
        navegation?.classList.add("hidden")
      }, 100);
      btn?.classList.remove("-rotate-90")
      body?.classList.remove("fixed")
      btn?.classList.add("-rotate-0")
      this.value = true;
    }
  }


}
