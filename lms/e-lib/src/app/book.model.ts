export interface Book {
    title: string;
    author: string;
    subject: string;
    publishDate: Date;
    genre: string;
    year: number;
    name: string;
  }

export interface SearchBook {
    name: string;
    author: string;
    genre: string;
    year: number;
    
  }
  

export interface AvailableBook{

      title: string;
      author: string;
      genre: string;
      year: number;
      availableCopies: number;
  }

export interface Book1{
  id: number;
  title: string;
  availability: number;
  quantity: number;
  author: string;
  genre: string;
  year: number;
  price: string;

}