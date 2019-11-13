import React, { Component } from 'react';

class FormCinema extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      poster: '',
      comment: ''
    }
    this.onChange = this.onChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  onChange(e) {
    this.setState({
      [e.target.title] : e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
  }

  render () {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    };
  
    const url = "https://post-a-form.herokuapp.com/api/movies/";

    fetch(url, config)
    .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Le film ${res} a été ajouté!`)
        }
      }).catch(e => {
        console.error(e);
        alert(`Erreur lors de l'ajout d'un film`)
      });

    return(
      <div className="FormEmployee">
      <h1>Cherche un film!</h1>

      <form onSubmit={this.submitForm}>
        <fieldset>
          <legend>Informations</legend>
          <div className="form-data">
            <label htmlFor="title">Titre</label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>

          <div className="form-data">
            <label htmlFor="poster">Prénom</label>
            <input 
              type="url"
              id="poster"
              name="poster"
              onChange={this.onChange}
              value={this.state.poster}
            />
          </div>

          <div className="form-data">
            <label htmlFor="comment">E-mail</label>
            <textarea 
              type="text"
              id="comment"
              name="comment"
              onChange={this.onChange}
              value={this.state.comment}
            />
          </div>
          <hr />
          <div className="form-data">
            <input type="submit" value="Envoyer" />
          </div>
        </fieldset>
      </form>
    </div>
    );
  }
}

export default FormCinema;