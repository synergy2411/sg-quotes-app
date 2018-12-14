import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { IQuote } from './../../model/quotes.model';

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  favQuote : IQuote;

  constructor(private navParams : NavParams,
              private navCtrl : NavController,
              private viewCtrl : ViewController){
    this.favQuote = this.navParams.get("favQuote");
    console.log("Quotes : ", this.favQuote);
  }

  onClose(flag : boolean = false){
    // this.navCtrl.pop();
    this.viewCtrl.dismiss(flag);
  }


}
