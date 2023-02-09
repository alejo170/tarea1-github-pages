import { useState } from 'react';
import { booksApi } from '../../api/booksApi';
import RenderBooks from '../RenderBooks/RenderBooks';
import s from './style.module.css';

const ListBooks = () => {

  const [currentBook, setCurrentBook] = useState(booksApi);

  const bookList = (book) => {
    setCurrentBook(book)
  }

  return (
    <div className={s.grid}>
      <RenderBooks list={bookList} book={currentBook} title='MERNbooks'></RenderBooks>
    </div>
  )
}

export default ListBooks