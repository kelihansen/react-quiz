import React, { Component } from 'react';
import Notes from './Notes';
import AddNote from './AddNote';

export default class App extends Component {

  state = {
    notes: [
      { 
        date: new Date('2/12/2018'),
        text: 'Learn React'
      },
      { 
        date: new Date('2/27/2018'),
        text: 'Learn Redux'
      },
      { 
        date: new Date('3/23/2018'),
        text: 'Create Cool Project'
      }
    ]
  };

  handleAdd = ({ note }, timestamp) => {
    const newNote = { date: timestamp.toLocaleString(), text: note };
    this.setState(({ notes }) => {
      notes.push(newNote);
      return { notes };
    });
  };

  render() {
    const { notes } = this.state;

    return (
      <div>
        <h1>Notes:</h1>
        <Notes notes={notes}/>
        <h2>Add a note:</h2> <AddNote onAdd={this.handleAdd}/>
      </div>
    );
  }
}