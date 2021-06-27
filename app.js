
class shop {
  constructor(shopName, min, max, avg) {
      this.min = min;
      this.max = max;
      this.avgCookiePerCustomer = avg;
      this.shopName = shopName;
      this.total = 0;
      this.list = this.generateList();
  }

  getRandom = function () {
      return Math.floor((Math.random() * (this.max - this.min) + this.min) * this.avgCookiePerCustomer);
  }

  workhour = [
      '6am',
      '7am',
      '8am',
      '9am',
      '10am',
      '11am',
      '12pm',
      '1pm',
      '2pm',
      '3pm',
      '4pm',
      '5pm',
      '6pm',
      '7pm',
  ];
  generateList = function () {
      let result = [];
      for (const hour in this.workhour) {
          var cookies = this.getRandom();
          this.total += cookies;
          result.push(this.workhour[hour] + ': ' + cookies + ' cookies.');
      }
      result.push('Total: ' + this.total + ' cookies.')
      return result;
  }

  getHtml = function () {
      var root = document.createElement('div');
      root.innerHTML = "<h2 style='padding-left:15px;'>" + this.shopName + "</h2>";
      var ul = document.createElement('ul');
      for (let i = 0; i < this.list.length; i++) {
          const element = document.createElement('li');
          element.innerHTML = this.list[i];
          ul.appendChild(element)
      }
      root.appendChild(ul);
      return root;
  }
}

var seattle = new shop('seattle', 23, 65, 6.5);
var Tokyo = new shop('Tokyo', 23, 65, 6.5);
var Dubai = new shop('Dubai', 23, 65, 6.5);
var Paris = new shop('Paris', 23, 65, 6.5);
var Lima = new shop('Lima', 23, 65, 6.5);

document.body.appendChild(seattle.getHtml());
document.body.appendChild(Tokyo.getHtml());
document.body.appendChild(Dubai.getHtml());
document.body.appendChild(Paris.getHtml());
document.body.appendChild(Lima.getHtml());
