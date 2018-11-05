/** Class representing a User */
class User {

  /**
   * Create a user
   * @param {string} firstname
   * @param {string} lastname
   * @param {string} country
   * @param {number} age
   * @param {string|string[]} payment_methods
   */
  constructor(firstname, lastname, country, age, payment_methods) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.country = country;
    this.age = age;
    this.payment_methods = payment_methods;
    this.validator = new userValidator();
    this.validator.checkAll(this.age, this.country, this.payment_methods);
  }

  /**
   * Make an alert of the firstname
   */
  alertFirstName() {
    alert('Your firstname is ' + this.firstname);
  }

  /**
   * Make an alert of the lastname
   */
  alertLastName() {
    alert('Your name is ' + this.lastname);
  }

  /**
   * Make an alert of the Birth date
   */
  alertBirthDate() {
    let date = new Date();
    alert('Your birthyear is ' + (date.getFullYear() - this.age));
  }

}

class userValidator {

  /**
   * Init validator rules
   */
  constructor() {
    this.allowedCountry = ['FRANCE', 'ESPAGNE', 'ALLEMAGNE', 'ITALIE', 'SUISSE'];
    this.allowedPaymentMethods = ['VISA', 'MASTERCARD', 'PAYPAL', 'CASH'];
    this.minAge = 18;
    this.accepptedPaymentMethods = [];
    this.notAcceptedPaymentMethods = [];
  }

  /**
   * Make an alert that say if user is allowed to stay here
   * @param {number} age
   */
  checkAge(age) {
    if (this.minAge > age) {
      alert('You\'re a little kid, go away');
    } else {
      alert('It\'s ok, you are over or equal to ' + this.minAge);
    }
  }

  /**
   * Make an alert that say if the user has an allowed country
   * @param {string} country
   */
  checkCountry(country) {
    if (this.allowedCountry.indexOf(country.toUpperCase()) < 0) {
      alert(country + ' isn\'t an allowed country');
    } else {
      alert(country + ' is an allowed Country ;)');
    }
  }

  /**
   * Alert the user allowed & not allowed payment methods
   * @param {string|string[]} paymentMethods
   */
  checkPaymentMethods(paymentMethods) {
    /* Cannot use "this" in forEach scope so put it in self const */
    const self = this;
    Array.from(paymentMethods).forEach(function (e) {
      if (self.allowedPaymentMethods.indexOf(e.toUpperCase()) > -1) {
        self.accepptedPaymentMethods.push(e);
      } else {
        self.notAcceptedPaymentMethods.push(e);
      }
    });
    if (this.accepptedPaymentMethods.length > 0) {
      alert('payment Methods allowed that you can use are: ' + this.accepptedPaymentMethods.join());
    }
    if (this.notAcceptedPaymentMethods.length > 0) {
      alert('payment Methods forbidden that you cannot use are: ' + this.notAcceptedPaymentMethods.join());
    }
  }

  /**
   * Check user age, country and payment methods
   * @param {number} age
   * @param {string} country
   * @param {string|string[]} payment_methods
   */
  checkAll(age, country, payment_methods) {
    this.checkAge(age);
    this.checkCountry(country);
    this.checkPaymentMethods(payment_methods);
  }

}

let user = new User('Pierre', 'Demailly', 'France', '20', ['mastercard', 'cash']);

user.alertFirstName();
user.alertLastName();
user.alertBirthDate();
