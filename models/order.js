import moment from 'moment';

class Order {
  constructor(ID, items, totalSum, date) {
    this.ID = ID;
    this.items = items;
    this.totalSum = totalSum;
    this.date = date;
  }
  get readebleDate() {
    return moment(this.date).format('Do MMM YY, hh:mm A');
  }
}

export default Order;
