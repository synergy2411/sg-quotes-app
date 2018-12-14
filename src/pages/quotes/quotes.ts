import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { IQuote } from '../../model/quotes.model';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{

  quoteGroup : { category : string; quotes : IQuote[]; icon : string;};

  constructor(private navParams : NavParams){}

  ngOnInit(){
    this.quoteGroup = this.navParams.get('category');
  }

  onFavorite(quote : IQuote){
    console.log(quote);
  }

}
