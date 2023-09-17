import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { BookService } from './book.service';
import { BookListComponent } from './book-list/book-list.component';
import { SearchComponent } from './search/search.component';
import { BookAvailabilityComponent } from './book-availability/book-availability.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';
import { QuoteDisplayComponent } from './quote-display/quote-display.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AudioComponent } from './audio/audio.component';
import { NewsComponent } from './news/news.component';
import { ApiService } from './api.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BookListComponent,
    SearchComponent,
    BookAvailabilityComponent,
    HomeComponent,
    CartComponent,
    QuoteDisplayComponent,
    CheckoutComponent,
    AudioComponent,
    NewsComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BookService, CartService,ApiService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
