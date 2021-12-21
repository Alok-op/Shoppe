import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showNav: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  showMenu() {
    let show =  document.getElementById('hello') as HTMLElement;
    show.style.left = '0%';
    console.log("hello accessed")
  }
  hideNav() {
    let hide = document.getElementById('hello') as HTMLElement;
    hide.style.left = '100%';
  }

}
