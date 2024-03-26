
import Book from '../Book/Book';
// import UseBookData from '../Hooks/UseBookData';
import Banner from './../Banner/Banner';
import { useEffect, useState } from 'react';

const Books = () => {
    // const {data, loading} = UseBookData


    const [books,setBooks] = useState([]);

    useEffect(()=>{
        fetch('Books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    return (
        <div>
            <Banner></Banner>
            <div className="mt-24">
                <div className="text-center mb-9 text-[40px] font-bold">
                    <h1>Books: {books.length}</h1>
                </div>
            </div>
            <div className='w-[90%] gap-5 m-auto grid lg:grid-cols-3 sm:grid-cols-1'>
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;