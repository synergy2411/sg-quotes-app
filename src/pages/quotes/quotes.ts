import { LibraryPage } from './../library/library';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams, NavController, AlertController } from 'ionic-angular';
import { IQuote } from '../../model/quotes.model';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  quoteGroup: { category: string; quotes: IQuote[]; icon: string; };

  constructor(private navParams: NavParams,
    private navCtrl: NavController,
    private alertCtrl: AlertController) { }

  ngOnInit() {
    this.quoteGroup = this.navParams.get('category');
  }

  onFavorite(quote: IQuote) {
    const alert = this.alertCtrl.create({
      title: "Favorite Quote",
      subTitle: "Are you Sure?",
      message: "Are you sure to make this quote your favorite?",
      buttons: [{
        text: "Yes, Please go ahead",
        handler: () => {
          console.log(quote);
        }
      }, {
        text: "No, I changed my mind",
        handler: () => {
          console.log("Cancelled.");
        }
      }]
    })
    alert.present();

  }

  ionViewWillLeave() {
    this.navCtrl.push(LibraryPage);
  }

}
