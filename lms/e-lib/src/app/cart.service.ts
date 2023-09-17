import { Injectable } from '@angular/core';
import { Book1 } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Book1[] = [];
  clearCart: any;
  updateCartItem: any;
  removeItemFromCart: any;

  addToCart(book: Book1) {
    const cartItem = this.cartItems.find(item => item.id === book.id);
    if (cartItem) {
      cartItem.availability--;
    } else {
      const cartBook: Book1 = { ...book, availability: book.availability - 1 };
      this.cartItems.push(cartBook);
    }
  }

  removeFromCart(book: Book1) {
    const cartItem = this.cartItems.find(item => item.id === book.id);
    if (cartItem) {
      if (cartItem.availability < book.availability) {
        cartItem.availability++;
      }
      if (cartItem.availability === book.availability) {
        const index = this.cartItems.indexOf(cartItem);
        if (index !== -1) {
          this.cartItems.splice(index, 1);
        }
      }
    }
  }

  getCartItems() {
    return this.cartItems;
  }

  getQuantityInCart(book: Book1): number {
    const cartItem = this.cartItems.find(item => item.id === book.id);
    return cartItem ? cartItem.quantity : 0;
  }

  checkout() {
    // Perform the necessary actions for checking out the books, such as saving the order details or making API calls.
    // You can clear the cart after successful checkout if needed.
    this.cartItems = [];
  }
}
