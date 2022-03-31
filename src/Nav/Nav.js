import './Nav.css';
import React from 'react';


class Nav extends React.Component {
  render() {
    return (
      <div className='header-nav'>
        <div className='container'>
          <nav>
            <ul>
              <li><a href="/">Գլխավոր</a></li>
              <li><a href="exchanges">Փոխանակման կետեր</a></li>
              <li><a href="/about">Կոնտակտներ</a></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
export default Nav;
