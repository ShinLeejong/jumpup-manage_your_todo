import './reset.css';
import './global.css';
import './App.css';

import Header from './components/header';
import Content from "./components/content";
import Footer from "./components/footer";

function App() {

  const style = {
    backgroundImage: "url('./assets/background.jpg')",
  };

  return (
    <div className="App">
      <div id="background" style={style}>
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
