import react, { Component } from 'react';
import axios from 'axios';

const CrudProvider = React.createContext();
export const CrudConsumer = CrudContext.Consumer;

export class CrudConsumer extends Component {

  render() {
    return (
      <CrudContext.Provider value={{
        ...this.state
      }}>
        { this.props.children }
      </CrudContext.Provider>
    )
  }
}