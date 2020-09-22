import React, { Component } from 'react';
import species from '../data';

export default class ListDogs extends Component {
  render() {
    return (
      <div className="list-dog">
        <h3>Lista de Nomes para Pesquisa</h3>
        {species.map((specie) => <span key={specie}>{specie}</span>)}
      </div>
    )
  }
}
