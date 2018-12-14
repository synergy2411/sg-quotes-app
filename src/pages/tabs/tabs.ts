import { LibraryPage } from './../library/library';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FavoritePage } from './../favorite/favorite';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  favoritePage = FavoritePage;
  libraryPage = LibraryPage;

}
