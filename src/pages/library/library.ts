import { QuotesPage } from './../quotes/quotes';
import { IQuote } from './../../model/quotes.model';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { QUOTES_DATA } from '../../model/quotes';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {

  quotesCollection : { category : string; quotes : IQuote[]; icon : string;}[];

  ngOnInit(){
    this.quotesCollection = QUOTES_DATA;
    console.log(this.quotesCollection);
  }
 
  constructor(private navCtrl : NavController){}

  onSelectCategory(quotesGroup :{ category : string; quotes : IQuote[]; icon : string;} ){
    this.navCtrl.push(QuotesPage, { category : quotesGroup});
    console.log(quotesGroup);
  }

}
