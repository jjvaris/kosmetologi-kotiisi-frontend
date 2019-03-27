import React, { Component } from 'react';

export default class ContactForm extends Component {
  state = {
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
    errors: {},
    touched: false,
    submitted: false
  };

  validators = {
    fullName: {
      isValid: input => input && input.length >= 0,
      error: 'Nimi on pakollinen'
    },
    email: {
      isValid: input => input && input.length >= 0,
      error: 'Sähköposti on pakollinen'
    },
    message: {
      isValid: input => input && input.length >= 0,
      error: 'Viesti on pakollinen'
    }
  };

  handleChange = event => {
    this.setState({ touched: true });
    const { name, value } = event.target;
    if (this.state.errors[name]) {
      const { errors } = this.state;
      errors[name] = undefined;
      this.setState({ errors });
    }
    this.setState({ [name]: value });
  };

  handleValidation = event => {
    if (!this.state.touched) return;
    const { name, value } = event.target;
    const { isValid, error } = this.validators[name];
    if (!isValid(value)) {
      const { errors } = this.state;
      errors[name] = error;
      this.setState({ errors });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    if (!this.formIsValid()) return;
    console.log('lähetetään form', this.state);
    this.setState({
      fullName: '',
      email: '',
      phoneNumber: '',
      message: '',
      errors: {},
      touched: false,
      submitted: true
    });
  };

  formIsValid() {
    console.log('validating form...', this.state);
    const { fullName, email, message } = this.state;
    const errors = {};
    if (!this.validators.fullName.isValid(fullName))
      errors.fullName = this.validators.fullName.error;
    if (!this.validators.email.isValid(email))
      errors.email = this.validators.email.error;
    if (!this.validators.message.isValid(message))
      errors.message = this.validators.message.error;
    this.setState({ errors });
    return Object.keys(errors).length === 0;
  }

  render() {
    return this.state.submitted ? (
      <div>Kiitos viestistäsi. Palaan asiaan mahdollisimman pian!</div>
    ) : (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="text-input">
          <input
            type="text"
            name="fullName"
            placeholder="Nimi *"
            className={`${
              this.state.errors.fullName
                ? 'form__input--error form__input'
                : 'form__input'
            } `}
            onChange={this.handleChange}
            onBlur={this.handleValidation}
            value={this.state.fullName}
          />
          {this.state.errors.fullName && (
            <span className="form__error">{this.state.errors.fullName}</span>
          )}
        </div>
        <div className="text-input">
          <input
            type="email"
            name="email"
            placeholder="Sähköposti *"
            className={`${
              this.state.errors.email
                ? 'form__input--error form__input'
                : 'form__input'
            } `}
            onChange={this.handleChange}
            onBlur={this.handleValidation}
            value={this.state.email}
          />
          {this.state.errors.email && (
            <span className="form__error">{this.state.errors.email}</span>
          )}
        </div>
        <div className="text-input">
          <input
            type="text"
            name="phoneNumber"
            placeholder="Puhelinnumero"
            className="form__input"
            onChange={this.handleChange}
          />
        </div>
        <div className="textarea">
          <textarea
            name="message"
            placeholder="Viesti *"
            className={`${
              this.state.errors.message
                ? 'form__textarea--error form__textarea'
                : 'form__textarea'
            } `}
            onChange={this.handleChange}
            onBlur={this.handleValidation}
            value={this.state.message}
          />
          {this.state.errors.message && (
            <span className="form__error">{this.state.errors.message}</span>
          )}
        </div>
        <button type="submit" className="form__button">
          LÄHETÄ
        </button>
      </form>
    );
  }
}
