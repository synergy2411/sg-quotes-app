import { LibraryPage } from './../library/library';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams, NavController, AlertController, ToastController } from 'ionic-angular';
import { IQuote } from '../../model/quotes.model';
import { QuoteService } from '../../services/quotes.service';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  quoteGroup: { category: string; quotes: IQuote[]; icon: string; };

  constructor(private navParams: NavParams,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private quoteService : QuoteService,
    private toastCtrl : ToastController) { }

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
          this.quoteService.addQuoteToFavorite(quote);
          const toast = this.toastCtrl.create({
            message: 'Your favorite quote added successfully',
            duration: 3000
          });
          toast.present();
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
