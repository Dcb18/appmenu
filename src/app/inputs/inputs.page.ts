import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
})
export class InputsPage implements OnInit {

  login: string = '';
  senha: string = '';
  mensagem: string = '';


  constructor() { }

  ngOnInit() {
  }

  enviar(campoLogin, campoSenha) {
    this.login = campoLogin;
    this.senha = campoSenha;
    this.mensagem = 'Seus dados foram enviados!';
  }

}
