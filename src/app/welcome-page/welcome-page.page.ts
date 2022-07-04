 
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.page.html',
  styleUrls: ['./welcome-page.page.scss'],
})
export class WelcomePagePage implements OnInit {
  @ViewChild('slides', { static: true }) slides: IonSlides;

  index = 0;
  isLastSlide: boolean = false;

  slideLength: any = 1;
  slidesNumber: any = [];

  constructor(
    private util: UtilService,
    private router: Router,
  ) {
    setTimeout(() => {
      this.slides.length().then((data: any) => {
        this.slideLength = data;
        this.slidesNumber = [];
        for (let i = 0; i < this.slideLength; i++) {
          this.slidesNumber.push(i);
        }
        console.log(this.slidesNumber);
      });
    }, 1000);

  }

  ngOnInit() {
    this.util.disableSideMenu();
  }

  slideChanged(event) {
    this.slides.getActiveIndex().then((data: any) => {
      this.index = data;
    });

    this.slides.isEnd().then(data => {
      this.isLastSlide = data;
    })
  }

  onNext() {
    this.slides.slideNext();
  }

  onSkip() {
    this.router.navigate(['login']);
  }

  onBack() {
    this.slides.slidePrev();
  }
}
