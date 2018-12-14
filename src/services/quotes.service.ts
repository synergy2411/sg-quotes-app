import { Injectable } from '@angular/core';
import { IQuote } from '../model/quotes.model';

@Injectable()
export class QuoteService {
    private favoriteQuotes : IQuote[] = [];

    getFavoriteQuotes(){
        return this.favoriteQuotes;
    }

    addQuoteToFavorite(quote : IQuote){
        this.favoriteQuotes.push(quote);
        console.log(this.favoriteQuotes);
    }
}
