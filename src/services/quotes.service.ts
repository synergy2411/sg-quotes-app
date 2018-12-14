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
         this.isQuoteFavorite(quote);
    }

    removeFromFavorite(quote : IQuote){
        const position = this.favoriteQuotes.findIndex((el : IQuote)=>{
            return el.id === quote.id;
        })
        this.favoriteQuotes.splice(position, 1);
    }

    isQuoteFavorite(quote : IQuote){
        return this.favoriteQuotes.find((el : IQuote)=>{
            return el.id === quote.id
        } )
    }
}
