import './Rate.css';
import React from 'react';
import Calc from '../Calc/Calc';


class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      currencyRate: {}
    }
    this.currency = ['AMD', 'RUB', 'EUR', 'GBP']
    this.getRate();
  }

  getRate = () => {
    fetch('https://v6.exchangerate-api.com/v6/dc883b8b28602ed7c502b541/latest/USD')
      .then(data => {
        return data.json()
      })
      .then(data => {
        this.setState({ date: data.time_last_update_utc });
        let result = {};
        for (let i = 0; i < this.currency.length; i++) {
          result[this.currency[i]] = data.conversion_rates[this.currency[i]];
        }
        this.setState({ currencyRate: result })
      })
  }
  render() {
    return (
      <div className='rate'>
        <h3>Արտարժույթի փոխարժեք {this.state.date}</h3>
        <div className="flex-container">
          {Object.keys(this.state.currencyRate).map(keyName =>
          (
            <div className="block flex-item" key={keyName}>
              <div className="currency-name">{keyName}</div>
              <div className="currency-in">{this.state.currencyRate[keyName].toFixed(2)} * </div>
              <p>* Կարելի է գնել 1 USD-ով</p>
            </div>
          )
          )}
        </div>
        <Calc rate={this.state.currencyRate} />
      </div>
    );
  }
}
export default Rate;
