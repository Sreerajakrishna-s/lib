import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotalPrice();
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  updateCartItem(item: any): void {
    // Update the item quantity in the cart and recalculate the total price
    this.cartService.updateCartItem(item);
    this.calculateTotalPrice();
  }

  removeItemFromCart(item: any): void {
    // Remove the item from the cart and recalculate the total price
    this.cartService.removeItemFromCart(item);
    this.calculateTotalPrice();
  }

  placeOrder(): void {
    // Placeholder for the order placement logic
    alert('Order placed successfully!');
    
    // Clear the cart and reset values
    this.cartService.clearCart();
    this.cartItems = [];
    this.totalPrice = 0;
  }
}
