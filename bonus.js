// Snack 5 (Bonus) - Raccogli i libri

// utilizzare l'url base:
// https://boolean-spec-frontend.vercel.app/freetestapi

// Usando la l'API https://boolean-spec-frontend.vercel.app/freetestapi/books/{id} usa la combinazione di .map() e Promise.all(), per creare una funzione (getBooks) che a partire da un array di id (ids), ritorna una promise che risolve un array di libri (books).
// Testala con l’array [2, 13, 7, 21, 19] .

const baseUrl = 'https://boolean-spec-frontend.vercel.app/freetestapi';
const ids = [2, 13, 7, 21, 19];

async function fetchJson(url) {
    const res = await fetch(url);
    const books = await res.json();
    return books;
};

async function getBooks(arr) {
    try {
        const promises = arr.map(el => fetchJson(`${baseUrl}/books/${el}`));
        const books = await Promise.all(promises);

        return books;

    } catch (err) {
        throw new Error('Could not fetch data', err)
    }

};

// getBooks(ids)
//     .then(data => console.log('Books:', data))
//     .catch(err => console.error(err))


// Snack 6 (Bonus) - Ordina i libri

// Crea una variabile booleana (areThereAvailableBooks) per verificare se c’è almeno un libro disponibile.
// Crea un array (booksByPrice) con gli elementi di books ordinati in base al prezzo (crescente).
// Ordina l’array booksByPrice in base alla disponibilità (prima quelli disponibili), senza creare un nuovo array.

const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];


const areThereAvailableBooks = books.some(book => book.available);

const booksByPrice = books.sort((a, b) => {
    const priceNoCurrencyA = parseFloat(a.price.replace(/[^0-9]\^./g, ''));
    const priceNoCurrencyB = parseFloat(b.price.replace(/[^0-9]\^./g, ''));
    return priceNoCurrencyA - priceNoCurrencyB;
});

booksByPrice.sort((a, b) => {
    return b.available - a.available
})



console.log(areThereAvailableBooks);
console.log(booksByPrice);