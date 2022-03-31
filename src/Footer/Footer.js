import './Footer.css';
import React from 'react';


class Footer extends React.Component {
  render() {
    return (
      <footer id='footer' className='footer'>
        <div className="footer-bottom">
          <div className="container">
            <div className="flex-container">
              <div className="flex-item">
                <h1 className="footer-title"><a href="https://rate.am" target="_blank">2022 &copy; Currency Exchange</a></h1>
                <p className='right'>All Rights Reserved</p>
              </div>
              <div className="flex-item">
                <div className="module-body">
                  <ul className="list-unstyled">
                    <li><a href="/sitemap/" tooltip="Կայքի քարտեզ">Կայքի քարտեզ</a></li>
                    <li><a href="https://www.google.ru/maps/@40.1533904,44.4885671,11z" target="_blank" tooltip="Google Sitemap">Google Sitemap</a></li>
                  </ul>
                </div>
              </div>
              <div className="flex-item">
                <div className="module-body">
                  <ul className="list-unstyled">
                    <li><a href="/about" tooltip="Կոնտակտներ">Կոնտակտներ</a></li>
                    <li><a href="/d">Երաշխիքներ</a></li>
                    <li><a href="/s">Ծառայության մասին</a></li>
                    <li><a href="/o">Վերադարձի պայմաններ</a></li>
                    <li><a href="/p">Ծառայությունից օգտվելու համաձայնություն</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-bar">
          <div className="flex-container">
            <div className="flex-item">
              <ul className="link"></ul>
            </div>
            <div className="flex-item">
              <div className="clearfix payment-methods">
                <ul>
                  <img src="/skin/default/images/dummy.png" data-toggle="tooltip" data-placement="top" data-original-title="www.webmoney.ru" alt="" />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
