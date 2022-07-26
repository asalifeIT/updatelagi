import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barcodekamar',
  templateUrl: './barcodekamar.page.html',
  styleUrls: ['./barcodekamar.page.scss'],
})
export class BarcodekamarPage implements OnInit {
  barcode1: any[] = [
    {id: 1, name: '', src: '', background: '', page: ''},
  ];

  constructor(
    private router: Router,
  ) { }
  
  ngOnInit() {}
  
  close() {
    this.router.navigate(['barcodehk']);
  }
}
