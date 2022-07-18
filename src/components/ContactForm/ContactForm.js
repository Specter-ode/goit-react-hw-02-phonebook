import React, { Component } from 'react';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    id: '',
    username: '',
    number: '',
    gender: 'unknown',
    adult: false,
  };
  handleChange = e => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.catchSubmitInfo(this.state);
    this.clearFields();
  };
  handleAdultChange = e => {
    console.log(e.target.checked);
    this.setState({ adult: e.target.checked });
  };
  clearFields = () => {
    this.setState({
      username: '',
      number: '',
      gender: 'unknown',
      adult: false,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label className={s.label}>
          <input
            type="text"
            name="username"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleChange}
            className={s.input}
            placeholder="Jacob Mercer"
          />
          Имя
        </label>
        <label className={s.label}>
          <input
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
            className={s.input}
          />
          Номер телефона
        </label>
        <p>Ваш пол:</p>
        <label className={s.label}>
          <input
            type="radio"
            name="gender"
            value="unknown"
            checked={this.state.gender === 'unknown'}
            onChange={this.handleChange}
            className={s.input}
          />
          Не указано
        </label>
        <label className={s.label}>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === 'male'}
            onChange={this.handleChange}
            className={s.input}
          />
          Мужской
        </label>
        <label className={s.label}>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === 'female'}
            onChange={this.handleChange}
            className={s.input}
          />
          Женский
        </label>
        <label className={s.label}>
          <input
            type="checkbox"
            name="adult"
            checked={this.state.adult}
            onChange={this.handleAdultChange}
            className={s.input}
          />
          Мне уже есть 18 лет
        </label>
        <button type="submit" disabled={!this.state.adult}>
          Добавить контакт
        </button>
      </form>
    );
  }
}
export default ContactForm;
