interface IPerson {
  fName: string;
  lName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  pin: string;
  phonenos: [
    { phone: string; type: string },
    { phone: string; type: string },
    { phone: string; type: string }
  ];
  emails: [
    { email: string; type: string },
    { email: string; type: string },
    { email: string; type: string }
  ];
}

const person1: IPerson = {
  fName: 'John',
  lName: 'Doe',
  address1: '123 Anywhere St',
  address2: 'Avenue 1',
  city: 'Hyderabad',
  state: 'TS',
  pin: '500081',
  phonenos: [
    { phone: '9492875814', type: 'Home' },
    { phone: '9492875814', type: 'Work' },
    { phone: '9492875815', type: 'Personal' },
  ],
  emails: [
    { email: 'johndoe@gmail.com', type: 'Home' },
    { email: 'johnd@myoffice.com', type: 'Office' },
    { email: 'doejohn@outlook.com', type: 'Personal' },
  ],
};

const person2: IPerson = {
  fName: 'John',
  lName: 'Doe',
  address1: '123 Anywhere St',
  address2: 'Avenue 1',
  city: 'Hyderabad',
  state: 'TS',
  pin: '500081',
  phonenos: [
    { phone: '9492875814', type: 'Home' },
    { phone: '9492875814', type: 'Work' },
    { phone: '9492875815', type: 'Personal' },
  ],
  emails: [
    { email: 'johndoe@gmail.com', type: 'Home' },
    { email: 'johnd@myoffice.com', type: 'Office' },
    { email: 'doejohn@outlook.com', type: 'Personal' },
  ],
};

if (JSON.stringify(person1) === JSON.stringify(person2)) {
  console.log('Both the objects are same');
} else {
  console.log('Both the objects are not same');
}
