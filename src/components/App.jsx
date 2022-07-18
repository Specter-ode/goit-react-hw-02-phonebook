import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Container from './Container/Container';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };
  state = {
    contacts: [
      {
        id: nanoid(),
        username: 'Rosie Simpson',
        number: '459-12-56',
        gender: 'female',
      },
      {
        id: nanoid(),
        username: 'Hermione Kline',
        number: '443-89-12',
        gender: 'female',
      },
      {
        id: nanoid(),
        username: 'Eden Clements',
        number: '645-17-79',
        gender: 'male',
      },
      {
        id: nanoid(),
        username: 'Annie Copeland',
        number: '227-91-26',
        gender: 'female',
      },
    ],
    fieldFilter: '',
  };
  addNewContact = dataAfterSubmit => {
    const { username, number, gender } = dataAfterSubmit;
    const contact = { id: nanoid(), username, number, gender };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };
  deleteContact = contactId => {
    console.log(contactId);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  getVisibleContacts = () => {
    const { fieldFilter, contacts } = this.state;
    const normalizedFilter = fieldFilter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.username.toLowerCase().includes(normalizedFilter)
    );
  };
  changeFilter = e => {
    this.setState({ fieldFilter: e.target.value });
  };

  render() {
    const { fieldFilter } = this.state;
    return (
      <div>
        <Container>
          <Section title="Телефонная книга">
            <ContactForm catchSubmitInfo={this.addNewContact} />
          </Section>
          <Section title="Контакты">
            <Filter
              valueFromFilter={fieldFilter}
              catchFilterInfo={this.changeFilter}
            />
            <ContactList
              contacts={this.getVisibleContacts()}
              onDelete={this.deleteContact}
            />
          </Section>
        </Container>
      </div>
    );
  }
}

export default App;
