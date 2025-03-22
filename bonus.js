// Snack 5 (Bonus) - Raccogli i libri

// utilizzare l'url base:
// https://boolean-spec-frontend.vercel.app/freetestapi

// Usando la l'API https://boolean-spec-frontend.vercel.app/freetestapi/books/{id} usa la combinazione di .map() e Promise.all(), per creare una funzione (getBooks) che a partire da un array di id (ids), ritorna una promise che risolve un array di libri (books).
// Testala con l’array [2, 13, 7, 21, 19] .

const baseUrl = 'https://boolean-spec-frontend.vercel.app/freetestapi';
const ids = [2, 13, 7, 21, 19];

async function fetchJson(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
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

getBooks(ids)
    .then(data => console.log('Books:', data))
    .catch(err => console.log(err))