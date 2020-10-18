import { Component, ViewChild } from '@angular/core';

import { Platform, NavController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AlertsPage } from './alerts/alerts.page';
import { InputsPage } from './inputs/inputs.page';
import { ListsPage } from './lists/lists.page';
import { CheckboxPage } from './checkbox/checkbox.page';
import { CardsPage } from './cards/cards.page';
import { RangePage } from './range/range.page';
import { ToastPage } from './toast/toast.page';
import { BadgesPage } from './badges/badges.page';
import { TogglesPage } from './toggles/toggles.page';
import { HomePage } from './home/home.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  pages: Array<{title: string, url: any}>;
  
  @ViewChild(NavController) nav: NavController;
  rootPage:any = HomePage;
  constructor(
    private menu: MenuController,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar, private router: Router
  ) {

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide()
    });


    this.pages = [
      { title: 'Alerts', url: 'alerts' },
      { title: 'Inputs', url: 'inputs' },
      { title: 'Lists', url: 'lists' },
      { title: 'CheckBox', url: 'checkbox' },
      { title: 'Cards', url: 'cards' },
      { title: 'Range', url: 'range' },
      { title: 'Toast', url: 'toast' },
      { title: 'Badges', url: 'badges' },
      { title: 'Toggles', url: 'toggles' }
      ];

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}
