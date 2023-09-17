import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Book1 } from '../book.model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: Book1[] = [];

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
  }

  removeItemFromCart(book: Book1) {
    this.cartService.removeFromCart(book);
    this.cartItems = this.cartService.getCartItems();
  }

  checkout() {
    this.cartService.checkout();
    this.cartItems = this.cartService.getCartItems();
  }
}
