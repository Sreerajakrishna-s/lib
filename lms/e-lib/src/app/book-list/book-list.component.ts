import { Component } from '@angular/core';
import { Book1 } from '../book.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books: Book1[] = [];

  constructor(private cartService: CartService) {
    // Initialize the book list (you may fetch it from an API or any other source)
    this.books = [
      { id: 1, title: 'Book 1', availability: 5, quantity: 1, author: 'Author1', genre: 'Genre1', year: 2012, price: '$45.34'  },
      { id: 2, title: 'Book 2', availability: 3, quantity: 1, author: 'Author2', genre: 'Genre2', year: 2020, price: '$34.89'  },
      { id: 3, title: 'Book 3', availability: 2, quantity: 1, author: 'Author3', genre: 'Genre3', year: 2019, price: '$19.67'  },
      // Add more books as needed
    ];
  }

  addToCart(book: Book1) {
    const bookCopy: Book1 = { ...book }; // Create a copy of the book
    this.cartService.addToCart(bookCopy);

  }

  getQuantityInCart(book: Book1): number {
    return this.cartService.getQuantityInCart(book);
  }
}
