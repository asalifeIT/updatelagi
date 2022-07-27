import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
  
})
export class InformationPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    loop: true,
    autoplay: {
          delay: 3500
    }
  };
  tabID;
  constructor(
    private router: Router
    )  { }

  ngOnInit() {}

  openAstoinfo(){
    this.router.navigate(['astoinfo']);
  }

  openDev(){
    this.router.navigate(['developer']);
  }

  openTeam(){
    this.router.navigate(['myteam']);
  }
  close(){
    this.router.navigate(['home']);
  }
  openSupport(){
    this.router.navigate(['support']);
  }

  }


