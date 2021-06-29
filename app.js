'use strict '
let timeSlots = [
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
  
  
  function randomInRange(min, max) {
  
    let range = max - min;
  
    return Math.floor(Math.random() * (range + 1)) + min;
  }
  
  
  let seattle = {
    id: 'seattle',
    location: 'Seattle',
    minCustomersPerHour: 23,
    maxCustomersPerHour: 65,
    avgCookiesPerSale: 6.3,
    total:0,
    cookieSales: [],
    generateCustomersPerHour: function () {
      let customersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
      return customersPerHour;
    },
    calcCookiesEachHour: function () {
      let customersPerHour = this.generateCustomersPerHour();
      let cookiesEachHour = customersPerHour * this.avgCookiesPerSale;
      
      return Math.ceil(cookiesEachHour);
    },
    simulateCookieSales: function() {
      
    },
    render: function () {
  
      this.simulateCookieSales();
  
      let ulElem = document.getElementById(this.id);
  
      for (let i = 0; i < timeSlots.length; i++) {
  
        let liElem = document.createElement('li');
  
        
        var cookie =  this.calcCookiesEachHour();
        liElem.textContent = timeSlots[i] + ': ' + cookie + ' cookies';
  
        ulElem.appendChild(liElem);
        this.total += cookie;
      }
  
      let totalItem=document.createElement('li');
      ulElem.appendChild(totalItem);
      totalItem.textContent = `Total: ${this.total} cookies `;
  
    },
  };
  
  
  
 
  seattle.render();

  let tokyo = {
    id: 'tokyo',
    location: 'tokyo',
    minCustomersPerHour: 3,
    maxCustomersPerHour: 24,
    avgCookiesPerSale: 1.2,
    total:0,
    cookieSales: [],
    generateCustomersPerHour: function () {
      let customersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
      return customersPerHour;
    },
    calcCookiesEachHour: function () {
      let customersPerHour = this.generateCustomersPerHour();
      let cookiesEachHour = customersPerHour * this.avgCookiesPerSale;
      
      return Math.ceil(cookiesEachHour);
    },
    simulateCookieSales: function() {
      
    },
    render: function () {
  
      this.simulateCookieSales();
  
      let ulElem = document.getElementById(this.id);
  
      for (let i = 0; i < timeSlots.length; i++) {
  
        let liElem = document.createElement('li');
  
        
  
        liElem.textContent = timeSlots[i] + ': ' + this.calcCookiesEachHour() + ' cookies';
  
        ulElem.appendChild(liElem);
        this.total += this.calcCookiesEachHour[i];
      }
  
      let totalItem=document.createElement('li');
      ulElem.appendChild(totalItem);
      totalItem.textContent = `Total: ${this.total} cookies `;
  
    },
  };
  
  
  
  // render locations
  tokyo.render();


  let dubai = {
    id: 'dubai',
    location: 'dubai',
    minCustomersPerHour: 11,
    maxCustomersPerHour: 38,
    avgCookiesPerSale: 3.7,
    total:0,
    cookieSales: [],
    generateCustomersPerHour: function () {
      let customersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
      return customersPerHour;
    },
    calcCookiesEachHour: function () {
      let customersPerHour = this.generateCustomersPerHour();
      let cookiesEachHour = customersPerHour * this.avgCookiesPerSale;
      
      return Math.ceil(cookiesEachHour);
    },
    simulateCookieSales: function() {
      
    },
    render: function () {
  
      this.simulateCookieSales();
  
      let ulElem = document.getElementById(this.id);
  
      for (let i = 0; i < timeSlots.length; i++) {
  
        let liElem = document.createElement('li');
  
        
  
        liElem.textContent = timeSlots[i] + ': ' + this.calcCookiesEachHour() + ' cookies';
  
        ulElem.appendChild(liElem);
        this.total += this.calcCookiesEachHour[i];
      }
  
      let totalItem=document.createElement('li');
      ulElem.appendChild(totalItem);
      totalItem.textContent = `Total: ${this.total} cookies `;
  
    },
  };
  
  
  
  
  dubai.render();


  let paris = {
    id: 'paris',
    location: 'paris',
    minCustomersPerHour: 20,
    maxCustomersPerHour: 38,
    avgCookiesPerSale: 2.3,
    total:0,
    cookieSales: [],
    generateCustomersPerHour: function () {
      let customersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
      return customersPerHour;
    },
    calcCookiesEachHour: function () {
      let customersPerHour = this.generateCustomersPerHour();
      let cookiesEachHour = customersPerHour * this.avgCookiesPerSale;
      this.total += this.cookiesEachHour;
      
      return Math.ceil(cookiesEachHour);
    },
    simulateCookieSales: function() {
      
    },
    render: function () {
  
      this.simulateCookieSales();
  
      let ulElem = document.getElementById(this.id);
  
      for (let i = 0; i < timeSlots.length; i++) {
        let liElem = document.createElement('li');
  
        
  
        liElem.textContent = timeSlots[i] + ': ' + this.calcCookiesEachHour() + ' cookies';
  
        ulElem.appendChild(liElem);
        
      }
  
      let totalItem=document.createElement('li');
      ulElem.appendChild(totalItem);
      totalItem.textContent = `Total: ${this.total} cookies `;
  
    },
  };
  
  
  
  
  paris.render();

  let lima = {
    id: 'lima',
    location: 'lima',
    minCustomersPerHour: 2,
    maxCustomersPerHour: 16,
    avgCookiesPerSale: 4.6,
    total:0,
    cookieSales: [],
    generateCustomersPerHour: function () {
      let customersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
      return customersPerHour;
    },
    calcCookiesEachHour: function () {
      let customersPerHour = this.generateCustomersPerHour();
      let cookiesEachHour = customersPerHour * this.avgCookiesPerSale;
      
      return Math.ceil(cookiesEachHour);
    },
    simulateCookieSales: function() {
      
    },
    render: function () {
  
      this.simulateCookieSales();
  
      let ulElem = document.getElementById(this.id);
  
      for (let i = 0; i < timeSlots.length; i++) {
  
        let liElem = document.createElement('li');
  
        
  
        liElem.textContent = timeSlots[i] + ': ' + this.calcCookiesEachHour() + ' cookies';
  
        ulElem.appendChild(liElem);
        this.total += this.calcCookiesEachHour[i];
      }
  
      let totalItem=document.createElement('li');
      ulElem.appendChild(totalItem);
      totalItem.textContent = `Total: ${this.total} cookies `;
  
    },
  };
  
  
  
  
  lima.render();




// class shop {
//     constructor(shopName, min, max, avg) {
//         this.min = min;
//         this.max = max;
//         this.avgCookiePerCustomer = avg;
//         this.shopName = shopName;
//         this.total = 0;
//         this.list = this.generateList();
//     }
  
//     getRandom = function () {
//         return Math.floor((Math.random() * (this.max - this.min) + this.min) * this.avgCookiePerCustomer);
//     }
  
//     workhour = [
//         '6am',
//         '7am',
//         '8am',
//         '9am',
//         '10am',
//         '11am',
//         '12pm',
//         '1pm',
//         '2pm',
//         '3pm',
//         '4pm',
//         '5pm',
//         '6pm',
//         '7pm',
//     ];
//     generateList = function () {
//         let result = [];
//         for (const hour in this.workhour) {
//             var cookies = this.getRandom();
//             this.total += cookies;
//             result.push(this.workhour[hour] + ': ' + cookies + ' cookies.');
//         }
//         result.push('Total: ' + this.total + ' cookies.')
//         return result;
//     }
  
//     getHtml = function () {
//         var root = document.createElement('div');
//         root.innerHTML = "<h2 style='padding-left:15px;'>" + this.shopName + "</h2>";
//         var ul = document.createElement('ul');
//         for (let i = 0; i < this.list.length; i++) {
//             const element = document.createElement('li');
//             element.innerHTML = this.list[i];
//             ul.appendChild(element)
//         }
//         root.appendChild(ul);
//         return root;
//     }
//   }
  
//   var seattle = new shop('seattle', 23, 65, 6.5);
//   var Tokyo = new shop('Tokyo', 23, 65, 6.5);
//   var Dubai = new shop('Dubai', 23, 65, 6.5);
//   var Paris = new shop('Paris', 23, 65, 6.5);
//   var Lima = new shop('Lima', 23, 65, 6.5);
  
//   document.body.appendChild(seattle.getHtml());
//   document.body.appendChild(Tokyo.getHtml());
//   document.body.appendChild(Dubai.getHtml());
//   document.body.appendChild(Paris.getHtml());
//   document.body.appendChild(Lima.getHtml());
  
