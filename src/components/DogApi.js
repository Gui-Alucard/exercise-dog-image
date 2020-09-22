import React, { Component } from 'react';

class DogApi extends Component {
  constructor() {
    super();

    this.dogFetch = this.dogFetch.bind(this);
    this.newStateSpecie = this.newStateSpecie.bind(this);
    this.setSpecie = this.setSpecie.bind(this);

    this.state = {
      urlDog: '',
      specie: '',
      load: true,
      name: '',
    };
  };

  async dogFetch(specie) {
    if (specie === '') {
      const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
      const json = await res.json()
      const emptyState = this.setState({ urlDog: json.message })
      const dogBreed = this.state.urlDog.split("/")[4];
      this.setState({
        specie: specie,
        load: false,
        name: dogBreed
      })
      return emptyState;
    }
    const response = await fetch(`https://dog.ceo/api/breed/${specie}/images/random`)
    const json = await response.json()
    const newState = this.setState({ urlDog: json.message })
    this.setState({
      specie: specie,
      load: false,
    })
    return newState;
  }

  setSpecie({ target }) {
    const value = target.value;
    this.setState({
      specie: value,
    })
  }

  newStateSpecie() {
    const { specie } = this.state;
    if (specie !== '') {
      this.dogFetch(specie)
    } else {
      alert('Por favor digite uma raça!')
    }
  }

  componentDidMount() {
    this.dogFetch('akita');
  }

  componentDidUpdate() {
    // this.newStateSpecie();
  }
    
  render() {
    const { urlDog, specie, load, name } = this.state;
    if (load) return <h1>loading...</h1>;
    return (
      <div className="dog-component">
        <label htmlFor="search-input">Pesquise a raça: 
        <input
          type="search"
          value={specie}
          id="search-input"
          name="search"
          onChange={this.setSpecie}
        />
        <button type="button" onClick={() => this.newStateSpecie()}>Pesquisar</button>
        </label>
        <div className="img-container">
          <p>{name}</p>
          <img src={urlDog} alt="um dogizinho"/>
        </div>
        <div>
          <button className="btn" type="button" onClick={() => this.dogFetch(specie)}>Outo Doginhu</button>
        </div>
      </div>
    )
  }
}

export default DogApi;