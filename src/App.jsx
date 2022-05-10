import './App.scss';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import MyRouters from './config/MyRouters'

function App() {
  return (
    <div className="App">
      <Header/>
      <MyRouters/>
      <Footer/>
    </div>
  );
}

export default App;
