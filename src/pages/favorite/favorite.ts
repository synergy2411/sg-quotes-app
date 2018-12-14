import { QuotePage } from './../quote/quote';
import { Component, OnInit } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { QuoteService } from '../../services/quotes.service';
import { IQuote } from './../../model/quotes.model';


@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {

  favQuotes: IQuote[];

  constructor(private quoteService: QuoteService,
    private modalCtrl: ModalController) { }

  onSelectFav(quote: IQuote) {
    const modal = this.modalCtrl.create(QuotePage, { favQuote: quote });
    modal.present();

    modal.onDidDismiss((flag) => {
      if (flag) {
        this.onUnfavorite(quote);
        // this.quoteService.removeFromFavorite(quote);
        // this.favQuotes = this.quoteService.getFavoriteQuotes();
      }
    })
  }

  onUnfavorite(quote: IQuote) {
    this.quoteService.removeFromFavorite(quote);
    this.favQuotes = this.quoteService.getFavoriteQuotes();
  }

  ionViewWillEnter() {
    this.favQuotes = this.quoteService.getFavoriteQuotes();
    console.log(this.favQuotes);
  }


}
