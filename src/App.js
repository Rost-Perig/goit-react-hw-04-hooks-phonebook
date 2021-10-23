// import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Section from './componets/Section';
import InputsForm from './componets/InputsForm';
import ContactList from './componets/ContactList';


function App() {
  const [contacts, setContacts] = useState([]);

  const contactEraser = data => {
    //как вариант 
    //   let tempArr = [...contacts];
    //   // let deleteObjIndex = tempArr.findIndex(item => item.id === data);
    //   // tempArr.splice(deleteObjIndex , 1);
    // tempArr.splice(tempArr.findIndex(item => item.id === data), 1);
    // setContacts([...tempArr]);

    //напрямую
    contacts.splice(contacts.findIndex(item => item.id === data), 1)
    setContacts([...contacts]);
  };

  const appStateChanger = data => {
    if (contacts.findIndex(item => item.subscriber === data.subscriber) !== -1) {
      return alert(`Абонент с именем ${data.subscriber} уже существует!`);
    };

    if (contacts.findIndex(item => item.number === data.number) !== -1) {
      return alert(`Такой номер ${data.number} уже присвоен другому абоненту!`);
    };

    setContacts(prevState => [...prevState, data]);
  };

  useEffect(() => {
    (window.localStorage.getItem('contacts')) && setContacts(JSON.parse(window.localStorage.getItem('contacts')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="App">
      
      <Section title={"Phonebook"}>
        <InputsForm contactToUp={appStateChanger}/>
      </Section>

      <Section title={"Contacts"}>
          <ContactList contactArr={contacts} idToDel={contactEraser}/>
      </Section>

    </div>
  )
};

export default App;
