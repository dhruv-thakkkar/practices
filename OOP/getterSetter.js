const account = {
  owner: "Dhruv",
  get salary() {
    return this.mySalary;
  },

  set salary(sal) {
    this.mySalary = sal;
  },
};

account.salary = 50000;
console.log(account.salary);
