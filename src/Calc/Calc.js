import './Calc.css';
import React from 'react';


class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0
    }
  }

  calcRate = (e) => {
    e.preventDefault();
    let elements = e.target.elements;
    let countCurrency = elements['count-currency'].value;
    let typeCurrency = elements['type-currency'].value;
    this.setState({ result: (countCurrency / this.state.rate[typeCurrency]).toFixed(2) })
  }

  static getDerivedStateFromProps(props) {
    return { rate: props.rate }
  }

  render() {
    return (
      <div className="calculator">
        <h3>Փոխարժեքի հաշվիչ</h3>
        <div className="block">
          <div>Ես ցանկանում եմ</div>
          <div>
            <form onSubmit={this.calcRate}>
              <input name='count-currency' type="number" defaultValue="1000" />
              <select name='type-currency' id="">
                {Object.keys(this.props.rate).map(keyName =>
                  <option key={keyName}>{keyName}</option>
                )}
              </select>
              <input type="submit" value="Հաշվել" />
            </form>
          </div>
          <div>
            <h4>Արդյունք</h4>
            <ul className="calc-res">
              <li>{this.state.result} USD </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Calc;
