import './reset.css';
import './global.css';
import './App.css';

import Header from './components/header';
import Content from "./components/content";
import Footer from "./components/footer";
import background from "./assets/background.jpg";

function App() {

  return (
    <div className="App">
      <div id="background" style={{background: background}}>
        <div id="container">
          <Header />
          <Content />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
