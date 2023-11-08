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
  
  Lufthansa.book(111, "Dhruv");
  Lufthansa.book(222, "Raj");
  console.log(Lufthansa);
  
  const euroWing = {
    airline: "Eurowing",
    code: "EW",
    bookings: [],
  };
  
  const book = Lufthansa.book;
  //console.log(book(23,"Sd")) Normal function points THIS to undefined
  
  book.call(euroWing, 333, "Ram");
  console.log(euroWing);
  
  book.apply(euroWing, [444, "Rahul"]); //APPLY USES ARRAY THATS ALL
  
  book.call(euroWing, ...[555, "Khush"]); //IF U DONT WANT TO USE APPLY USE CALL WITH SPREAD OPERATOR
  console.log(euroWing);
  