export interface User {
  address: Address;
  company: Company;
  id: number;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
}

export interface Address {
  city: string;
  geo: Geo;
  street: string;
  suite: string;
  zipcode: string;
}

export interface Geo {
  lat: string;
  long: string;
}

export interface Company {
  bs: string;
  catchPhrase: string;
  name: string;
}
