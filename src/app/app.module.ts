import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//added for form comms
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuotesListComponent } from './quotes-list/quotes-list.component';
import { HeaderComponent } from './header/header.component';
import { UpvotePipe } from './upvote.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuotesListComponent,
    HeaderComponent,
    UpvotePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
