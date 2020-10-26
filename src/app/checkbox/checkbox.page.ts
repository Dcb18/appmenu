import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  azeitona: boolean;
  martini: boolean;
  manhattan: boolean;

  constructor() { }

  ngOnInit() {
  }
  
  updateAzeitona() {
    console.log('O item Azeitona foi atualizado:' + this.azeitona);
  }
  
  updateMartini() {
    console.log('O item Martini foi atualizado:' + this.martini);
  }

  updateManhattan() {
    console.log('O item Manhattan foi atualizado:' + this.manhattan);
  }

}
