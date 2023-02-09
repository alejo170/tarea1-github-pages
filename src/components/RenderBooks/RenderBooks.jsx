import s from './style.module.css';

const RenderBooks = ({book, title}) => {
    
  return (
    <>
        {book.map(list => (
            <div className={s.card} key={list.id}>
                <img src={list.thumbnailUrl} alt={title} />
                <h3>{list.title}</h3>
                <p>{list.description}</p>
                <p>USD {list.price}</p>
            </div>      
        ))}
    </>
  )
}

export default RenderBooks