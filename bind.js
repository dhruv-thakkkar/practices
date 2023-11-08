let Lufthansa = {
  airline: "Lufthansa",
  code: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline}, flight ${flightNum} `
    );
    this.bookings.push({ flight: flightNum, name: name });
  },
};

const euroWing = {
  airline: "EurowingX",
  code: "EW",
  bookings: [],
};

const book = Lufthansa.book;
const bookEW = book.bind(euroWing);
bookEW(23,"Rakesh")
console.log(euroWing)

const bookX = Lufthansa.book;
const bookEWX = book.bind(euroWing,123);
bookEW(23,"Rakesh")
console.log(euroWing)