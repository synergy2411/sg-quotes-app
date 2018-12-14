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

    removeFromFavorite(quote : IQuote){
        const position = this.favoriteQuotes.findIndex((el : IQuote)=>{
            return el.id === quote.id;
        })
        this.favoriteQuotes.splice(position, 1);
    }

}
