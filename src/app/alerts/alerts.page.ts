import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
})
export class AlertsPage implements OnInit {

  user: string = '';

  constructor(public alertCtrl: AlertController) {
    
   }

  ngOnInit() {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertsPage');
  }


  async mostrarAlert() {
    let prompt =  await this.alertCtrl.create({
      header: 'prompt',
      subHeader: "Digite seu nome",
      inputs: [
        {
          name:'nome',
          placeholder:'Nome'
        }
      ],
      buttons: [
        {
          text:'Cancelar',
          handler: data => {
            console.log('Clicou no cancler');
          }
        },
        {
          text:'Entrar',
          handler: data => {
            this.user = 'Bem vindo ' + data.nome + '!';
            console.log('Clicou no Entrar')
          }
        }
      ]
    });
  await prompt.present();
  }

}


