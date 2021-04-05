import React, { Component, Children, cloneElement } from 'react';

class Validate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  // Метод validate, завязанный на стейт(будто бы в нашей форме происходят изменения)
  validate = () => {
    const { counter } = this.state;
    alert('getAlert from Validate');
    this.setState({ counter: counter + 1 });
  }

  // Проверяем, действительно ли что-то поменялось, и если да, то вызываем метод validate()
  // Меняем стейт, чтобы передать изменения ниже по цепочке
  componentDidUpdate(prevProps, prevState) {
    const { count } = this.props;
    if (this.props.count !== prevProps.count && count !== undefined) {
      this.setState({ counter: count })
      this.validate()
    }
  }

// Вложенность компонента самого в себя, реализовал с помощью children и cloneElement
  render() {
    const { children } = this.props;
    return (
      <div>
        {Children.map(children, child => {
          return cloneElement(child, {count: this.state.counter})
        })}
        <button className="btn btn-primary mt-2" onClick={() => this.validate()}>Click</button>
      </div>
    );
  }
}
export default Validate;