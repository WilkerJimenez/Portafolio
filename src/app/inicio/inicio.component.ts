import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  fadeInAnimation() {
    const observable = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
          entry.target.classList.remove('.hideAnimation');
          entry.target.classList.add('.showAnimation');
        }
      })
    })
    const classType = document.querySelectorAll('.hideAnimation');
    classType.forEach((e) => observable.observe(e))
    console.log("done")
  }


}
