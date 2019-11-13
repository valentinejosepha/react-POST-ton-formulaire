import React, { Component } from 'react';

class FormCinema extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      poster: '',
      comment: ''
    }
    
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.postData();
  }



  postData() {
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
          alert(`Le film ${this.state.title} a été ajouté!`)
        }
      }).catch(e => {
        console.error(e);
        alert(`Erreur lors de l'ajout d'un film`)
      });
  }

  render() {
    return (
      <div className="FormCinema">
        <h1>Cherche un film!</h1>

        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Informations</legend>
            <div className="form-data">
              <label htmlFor="title">Titre</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.handleChange}
                //value={this.state.title}
              />
            </div>

            <div className="form-data">
              <label htmlFor="poster">Lien du poster</label>
              <input
                type="url"
                id="poster"
                name="poster"
                onChange={this.handleChange}
                //value={this.state.poster}
              />
            </div>

            <div className="form-data">
              <label htmlFor="comment">Commentaire</label>
              <textarea
                type="text"
                id="comment"
                name="comment"
                onChange={this.handleChange}
                //value={this.state.comment}
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