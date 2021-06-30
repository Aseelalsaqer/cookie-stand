function shop(shopName, min, max, avg) {
    this.min = min;
    this.max = max;
    this.avgCookiePerCustomer = avg;
    this.shopName = shopName;
    this.total = 0;


    this.workhour = [
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


    this.getRandom = function () {
        return Math.floor((Math.random() * (this.max - this.min) + this.min) * this.avgCookiePerCustomer);
    }


    this.cookiesPerHour = [];
    this.generateList = function () {
        let result = [];
        for (const hour in this.workhour) {
            var cookies = this.getRandom();
            this.total += cookies;
            result.push(this.workhour[hour] + ': ' + cookies + ' cookies.');

        }
        result.push('Total: ' + this.total + ' cookies.')
        return result;
    }

    this.getHtml = function () {
        this.list = generateList();
        var root = document.createElement('div');
        root.innerHTML = "<h2 style='padding-left:15px;'>" + + "</h2>";
        var ul = document.createElement('ul');
        for (let i = 0; i < this.list.length; i++) {
            const element = document.createElement('li');
            element.innerHTML = this.list[i];
            ul.appendChild(element)

        }
        root.appendChild(ul);

        return root;
    }
    this.getTableRow = function () {
        var html = "<tr><td class='tableElement'>" + this.shopName + "</td>";
        for (const hour in this.workhour) {
            var cookies = this.getRandom();
            this.cookiesPerHour.push(cookies);
            this.total += cookies;
            html += "\n<td class='tableElement'>" + cookies + "</td>";

        }
        html += "\n<td class='tableElement'>" + this.total + "</td>";
        html += "\n</tr>";

        this.cookiesPerHour.push(this.total);
        return html;
    }
    this.tableRow = this.getTableRow();
}

const cookiesForm = document.getElementById('cookiesForm');
cookiesForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const newLocation = event.target.shopname.value;
    const newmincust = event.target.min.value;
    const newmaxcust = event.target.max.value;
    const newavgcust = event.target.avg.value;
    for (let i = 0; i < locations.length; i++) {
        const loc = locations[i];
        if (loc.shopName === newLocation) {
            // existing shop
            locations[i] = new shop(newLocation, newmincust, newmaxcust, newavgcust);
            GenerateTable();
            return;
        }
    }

    // new shop
    const newShop = new shop(newLocation, newmincust, newmaxcust, newavgcust);
    locations.push(newShop);
    GenerateTable();
}

var locations = [];

locations.push(new shop('Seattle', 23, 65, 6.5));
locations.push(new shop('Tokyo', 23, 65, 6.5));
locations.push(new shop('Dubai', 23, 65, 6.5));
locations.push(new shop('Paris', 23, 65, 6.5));
locations.push(new shop('Lima', 23, 65, 6.5));

function GenerateTable() {
    var oldTable = document.getElementById('salesTable');
    if (oldTable) oldTable.remove();

    var table = document.createElement('table');
    table.id = "salesTable";
    var header = [
        '6:00am',
        '7:00am',
        '8:00am',
        '9:00am',
        '10:00am',
        '11:00am',
        '12:00pm',
        '1:00pm',
        '2:00pm',
        '3:00pm',
        '4:00pm',
        '5:00pm',
        '6:00pm',
        '7:00pm',
    ];

    var tableContent = "<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>";
    header.forEach(element => {
        tableContent += "\n<td><b>" + element + "</b></td>"
    });
    tableContent += "\n<td>Daily Location Total</td></tr>";

    locations.forEach(location => {
        tableContent += location.tableRow;
    });

    var footer = "<tr id='totalsRow' ><td  class='tableElement'> Totals </td>";
    var totalCookiesPerHour = [];
    for (let i = 0; i < 15; i++) {
        var totalPerHour = 0;
        locations.forEach(location => {
            totalPerHour += location.cookiesPerHour[i];
        });
        totalCookiesPerHour.push(totalPerHour);
    }

    totalCookiesPerHour.forEach(cookies => {
        footer += "\n<td class='tableElement'>" + cookies + "</td>";
    });
    footer += "\n</tr>";
    table.innerHTML = tableContent;
    table.innerHTML += footer;

    document.body.appendChild(table);
}

GenerateTable();