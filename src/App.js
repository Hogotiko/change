import './App.css';
import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Rate from './Rate/Rate';
import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import Exchanges from './Exchanges/Exchanges';


class App extends React.Component {
  render() {
    return (
      <div className="site" >
        <Header />
        <div className="container">
          <main>
            <Routes>
              <Route path='/' element={<Rate />} />
              <Route path='/about' element={<About />} />
              <Route path='/exchanges' element={<Exchanges />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    );
  }

}
export default App;
