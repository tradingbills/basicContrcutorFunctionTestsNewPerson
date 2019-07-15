"use strict";

function User(fname, lname) {
  (this._firstName = fname), (this._lastName = lname);
}

User.prototype.getFirstName = function getFirstName() {
  return this._firstName;
};
User.prototype.getLastName = function getLastName() {
  return this._lastName;
};

export { User };
