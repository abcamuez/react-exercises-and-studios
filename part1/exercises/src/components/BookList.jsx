export default function BookList() {
   let pageTitle = "Book List";
   let book1 = "https://mybookshelf.com.ua/assets/images/products/18116/big/71ukqqzd-vl.webp";
   let book2 = "https://prodimage.images-bn.com/pimages/9780062273062_p0_v5_s1200x630.jpg";
   let book3 = "https://images.ctfassets.net/mk0gyd3cqdg6/JiS1WDDn6yKmDQtBnpojX/33fa93734967c1af5417274a9b9f3615/monk_book.png?w=600&h=600&fit=pad&fm=jpg&bg=white";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Sapiens" />
         <img src={book2} alt="Jab,Jab, Jab, Right Hook" />
         <img src={book3} alt="Think like a monk" />
      </div>      
   );
}