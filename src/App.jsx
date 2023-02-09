import ListBooks from './components/ListBooks/ListBooks';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import imgLogo from './assets/logo.png';

function App() {

  return (
    <>
      <Header logo={imgLogo} title='Logo MERN'></Header>
      <ListBooks></ListBooks>
      <Footer></Footer>
    </>
  )
}

export default App
