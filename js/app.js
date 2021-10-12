var tableDOM = document.getElementById("dataTableBody");

const appendDataToTable = (data) => {
  let noOfRows = tableDOM.rows.length;
  for (let i = 0; i < noOfRows; i++) {
    tableDOM.deleteRow(-1);
  }

  data.forEach((item) => {
    var row = tableDOM.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);

    cell1.innerHTML = item.name;
    cell2.innerHTML = item.position;
    cell3.innerHTML = item.office;
    cell4.innerHTML = item.age;
    cell5.innerHTML = item.startDate;
    cell6.innerHTML = `$${item.salary}`;
    cell7.innerHTML = item.country;
  });
};

var masterData = [
  // Populate objects with name,position,office, age, start date, salary
  {
    name: "Tiger Nixon",
    position: "System Architect",
    office: "Mumbai",
    age: "25",
    startDate: "2011/04/25",
    salary: 22000,
    country: "India",
  },
  {
    name: "Garrett Winters",
    position: "Accountant",
    office: "London",
    age: "35",
    startDate: "2011/07/25",
    salary: 25000,
    country: "England",
  },
  {
    name: "Ashton Cox",
    position: "Junior Technical Author",
    office: "Washington",
    age: "40",
    startDate: "2009/01/12",
    salary: 45000,
    country: "America",
  },
  {
    name: "Cedric Kelly",
    position: "Senior Javascript Developer",
    office: "California",
    age: "42",
    startDate: "2012/03/29",
    salary: 50000,
    country: "Australia",
  },
  {
    name: "Brendon Wagner",
    position: "Software engineer",
    office: "Los Angeles",
    age: "35",
    startDate: "2012/03/29",
    salary: 50000,
    country: "America",
  },
  {
    name: "James",
    position: "Software trainee",
    office: "New York",
    age: "24",
    startDate: "2012/03/29",
    salary: 32000,
    country: "America",
  },
  {
    name: "Jane",
    position: "Accountant",
    office: "Washington",
    age: "47",
    startDate: "2012/03/29",
    salary: 50000,
    country: "Australia",
  },
  {
    name: "Sloan",
    position: "Senior Javascript Developer",
    office: "Mumbai",
    age: "33",
    startDate: "2012/03/29",
    salary: 35000,
    country: "India",
  },
  {
    name: "Sutton",
    position: "Pre sales support",
    office: "Bangalore",
    age: "27",
    startDate: "2012/03/29",
    salary: 29000,
    country: "India",
  },
  {
    name: "Ashtray",
    position: "Sales Assistant",
    office: "Delhi",
    age: "37",
    startDate: "2012/03/29",
    salary: 37000,
    country: "India",
  },
  {
    name: "Vince",
    position: "Integration specialist",
    office: "New York",
    age: "37",
    startDate: "2012/03/29",
    salary: 37000,
    country: "America",
  },
  {
    name: "Jason",
    position: "Software Engineer",
    office: "London",
    age: "35",
    startDate: "2012/03/29",
    salary: 35000,
    country: "England",
  },
  {
    name: "Holder",
    position: "Junior technical author",
    office: "Manchester",
    age: "42",
    startDate: "2012/03/29",
    salary: 50000,
    country: "England",
  },
  {
    name: "Kharry piere",
    position: "Content writer",
    office: "Mumbai",
    age: "25",
    startDate: "2012/03/29",
    salary: 27000,
    country: "India",
  },
  {
    name: "David",
    position: "Python developer",
    office: "New York",
    age: "24",
    startDate: "2012/03/29",
    salary: 295000,
    country: "America",
  },
  {
    name: "Virat",
    position: "Java developer",
    office: "Los angeles",
    age: "32",
    startDate: "2012/03/29",
    salary: 48000,
    country: "New York",
  },
  {
    name: "Kelly",
    position: "Magento developer",
    office: "Delhi",
    age: "35",
    startDate: "2012/03/29",
    salary: 34000,
    country: "India",
  },
  {
    name: "Robert",
    position: "Creative designer",
    office: "London",
    age: "42",
    startDate: "2012/03/29",
    salary: 36000,
    country: "England",
  },
  {
    name: "Cedric",
    position: "Digital marketer",
    office: "Kent",
    age: "42",
    startDate: "2012/03/29",
    salary: 50000,
    country: "England",
  },
  {
    name: "Anderson",
    position: "Java developer",
    office: "London",
    age: "29",
    startDate: "2012/03/29",
    salary: 25000,
    country: "England",
  },
  {
    name: "Stuart",
    position: "Marketing specialist",
    office: "Melbourne",
    age: "39",
    startDate: "2012/03/29",
    salary: 39000,
    country: "Australia",
  },
  {
    name: "Aaron",
    position: "Software developer",
    office: "Atlanta",
    age: "42",
    startDate: "2012/03/29",
    salary: 50000,
    country: "America",
  },
  {
    name: "Max",
    position: "Senior Javascript Developer",
    office: "Chennai",
    age: "23",
    startDate: "2012/03/29",
    salary: 27000,
    country: "India",
  },
  {
    name: "Fredrick",
    position: "UI Designer",
    office: "London",
    age: "47",
    startDate: "2012/03/29",
    salary: 48000,
    country: "England",
  },
  {
    name: "Alex",
    position: "Chief Accountant",
    office: "Colorado",
    age: "34",
    startDate: "2012/03/29",
    salary: 33000,
    country: "America",
  },
  {
    name: "Amber",
    position: "Seo specialist",
    office: "Manchester",
    age: "44",
    startDate: "2012/03/29",
    salary: 50000,
    country: "England",
  },
  {
    name: "Adams",
    position: "Testing specialist",
    office: "Bangalore",
    age: "36",
    startDate: "2012/03/29",
    salary: 35000,
    country: "India",
  },
  {
    name: "Camilla",
    position: "Javascript developer",
    office: "Mumbai",
    age: "43",
    startDate: "2012/03/29",
    salary: 47000,
    country: "India",
  },
  {
    name: "Cole",
    position: "React developer",
    office: "Mumbai",
    age: "26",
    startDate: "2012/03/29",
    salary: 25400,
    country: "India",
  },
  {
    name: "Sprouse",
    position: "Node js specialist",
    office: "Bangalore",
    age: "31",
    startDate: "2012/03/29",
    salary: 345000,
    country: "India",
  },
  {
    name: "Warren",
    position: "Technical analyst",
    office: "Perth",
    age: "43",
    startDate: "2012/03/29",
    salary: 42000,
    country: "Australia",
  },
  {
    name: "Buffet",
    position: "HR Recruiter",
    office: "Melbourne",
    age: "33",
    startDate: "2012/03/29",
    salary: 45600,
    country: "Australia",
  },
  {
    name: "Melanie",
    position: "Senior Javascript Developer",
    office: "Sydney",
    age: "39",
    startDate: "2012/03/29",
    salary: 33500,
    country: "Australia",
  },
  {
    name: "Robbins",
    position: "Junior java developer",
    office: "New York",
    age: "22",
    startDate: "2012/03/29",
    salary: 45000,
    country: "America",
  },
  {
    name: "Andy",
    position: "Marketing specialist",
    office: "Dallas",
    age: "37",
    startDate: "2012/03/29",
    salary: 35678,
    country: "America",
  },
  {
    name: "Frisella",
    position: "UX Designer",
    office: "Los Angeles",
    age: "28",
    startDate: "2012/03/29",
    salary: 26500,
    country: "America",
  },
  {
    name: "Burchard",
    position: "Fashion designer",
    office: "Nashwille",
    age: "34",
    startDate: "2012/03/29",
    salary: 24000,
    country: "America",
  },
  {
    name: "Lucy",
    position: "Java developer",
    office: "Delhi",
    age: "31",
    startDate: "2012/03/29",
    salary: 47000,
    country: "India",
  },
  {
    name: "Ava",
    position: "Software Trainee",
    office: "Los Angeles",
    age: "21",
    startDate: "2012/03/29",
    salary: 25000,
    country: "America",
  },
  {
    name: "Allan",
    position: "Junior tester",
    office: "New York",
    age: "34",
    startDate: "2012/03/29",
    salary: 50000,
    country: "America",
  },
  {
    name: "Madison",
    position: "Online Marketer",
    office: "London",
    age: "27",
    startDate: "2012/03/29",
    salary: 27000,
    country: "England",
  },
  {
    name: "Allen",
    position: "Cold caller",
    office: "Manchester",
    age: "22",
    startDate: "2012/03/29",
    salary: 24400,
    country: "England",
  },
  {
    name: "Kendrick",
    position: "Java developer",
    office: "Yorskhire",
    age: "23",
    startDate: "2012/03/29",
    salary: 34000,
    country: "England",
  },
  {
    name: "Fabian",
    position: "Chief Executive officer",
    office: "Bangalore",
    age: "47",
    startDate: "2012/03/29",
    salary: 50000,
    country: "India",
  },
  {
    name: "Marcus",
    position: "Lead Java developer",
    office: "Bangalore",
    age: "42",
    startDate: "2012/03/29",
    salary: 49500,
    country: "India",
  },
  {
    name: "Rachel",
    position: "Sales Assistant",
    office: "Delhi",
    age: "37",
    startDate: "2012/03/29",
    salary: 33000,
    country: "India",
  },
  {
    name: "Stoinis",
    position: "SQL Developer",
    office: "Bangalore",
    age: "25",
    startDate: "2012/03/29",
    salary: 27600,
    country: "India",
  },
  {
    name: "Elizabeth",
    position: "Magento developer",
    office: "Mumbai",
    age: "32",
    startDate: "2012/03/29",
    salary: 37000,
    country: "India",
  },
  {
    name: "Mike",
    position: "Sales technician",
    office: "Delhi",
    age: "43",
    startDate: "2012/03/29",
    salary: 45700,
    country: "India",
  },
  {
    name: "Illingworth",
    position: "Senior Javascript Developer",
    office: "Bangalore",
    age: "26",
    startDate: "2012/03/29",
    salary: 26000,
    country: "India",
  },
  {
    name: "Gough",
    position: "Software engineer",
    office: "Mumbai",
    age: "48",
    startDate: "2012/03/29",
    salary: 50000,
    country: "India",
  },
];

// appendDataToTable(masterData);
// Pagination
let page = 1;
let pageSize = 10;
let totalPages = Math.floor(masterData.length / pageSize);
totalPages += masterData.length % pageSize > 0 ? 1 : 0;

var paginationDOM = document.getElementById("paginationBlock");

for (let i = 1; i <= totalPages; i++) {
  let button = document.createElement("button");
  button.setAttribute("onclick", `changePage(${i})`);
  button.setAttribute("class", "pagination-button");
  button.innerHTML = i;
  paginationDOM.append(button);
}

var start = (page - 1) * pageSize;
var end = start + pageSize;

let paginatedItems = masterData.slice(start, end);
appendDataToTable(paginatedItems);

function changePage(data) {
  page = data;
  var start = (page - 1) * pageSize;
  var end = start + pageSize;

  let paginatedItems = masterData.slice(start, end);
  appendDataToTable(paginatedItems);
}

function resetFilters() {
  appendDataToTable(masterData);
  document.getElementById("filterForm").reset();
  page = 1;
  changePage(page);
}

function searchTable() {
  var searchDOM = document.getElementById("searchInput");
  let tempSearchedArray = [];
  const globalRegex = new RegExp(`^${searchDOM.value}`, "gi");
  masterData.forEach(
    ({ name, position, office, age, startDate, salary, country }) => {
      if (
        globalRegex.test(name) ||
        globalRegex.test(position) ||
        globalRegex.test(office) ||
        globalRegex.test(age) ||
        globalRegex.test(startDate) ||
        globalRegex.test(salary) ||
        globalRegex.test(country)
      ) {
        tempSearchedArray.push({
          name,
          position,
          office,
          age,
          startDate,
          salary,
          country,
        });
      }
    }
  );

  appendDataToTable(tempSearchedArray);
}

document.getElementById("filterForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const countryCheckboxes = document.querySelectorAll(
    'input[name="country"]:checked'
  );
  const cityCheckboxes = document.querySelectorAll(
    'input[name="city"]:checked'
  );

  let countryArray = [];
  let cityArray = [];

  countryCheckboxes.forEach((checkbox) => {
    countryArray.push(checkbox.value);
  });

  cityCheckboxes.forEach((checkbox) => {
    cityArray.push(checkbox.value);
  });

  var salaryDOM = document.getElementById("salaryDropDown");
  var ageDOM = document.getElementById("ageDropDown");

  let salaryBounds = salaryDOM.value.split("-");
  let lowSalaryBound = parseInt(salaryBounds[0]);
  let highSalaryBound = parseInt(salaryBounds[1]);

  let ageBounds = ageDOM.value.split("-");
  let lowAgeBound = ageBounds[0];
  let highAgeBound = ageBounds[1];

  let tempSearchedArray = [];

  masterData.forEach(
    ({ name, position, office, age, startDate, salary, country }) => {
      if (
        age >= lowAgeBound &&
        age <= highAgeBound &&
        salary >= lowSalaryBound &&
        salary <= highSalaryBound &&
        countryArray.includes(country) &&
        cityArray.includes(office)
      ) {
        tempSearchedArray.push({
          name,
          position,
          office,
          age,
          startDate,
          salary,
          country,
        });
      }
    }
  );

  appendDataToTable(tempSearchedArray);
});
