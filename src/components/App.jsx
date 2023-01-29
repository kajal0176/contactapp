import React from "react";
import Card from './card'
import Contacts from '../contacts'
function create(contact){
  return (
    <Card
    name={contact.name}
    img={contact.imgURL}
    tel={contact.phone}
    email={contact.email}
    />
  )
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {Contacts.map(create)}
    </div>
  );
}

export default App;
