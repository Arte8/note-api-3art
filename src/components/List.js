import React, { Component } from 'react';
// import NoteCard from './NoteCard';

class List extends Component {

  componentWillMount() {
    this.props.getNotes();
  }
  
  render() {
    
      return (
        <div className="list-container">
        List Component
      </div>       
      );
    }
  }

export default List;
