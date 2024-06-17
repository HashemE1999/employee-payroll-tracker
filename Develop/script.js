// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects

  // For the collectEmployees function, I used a while loop to
  // ensure that it is recalled when addEmployee is true, added
  // prompts for the employee's first name, last name, and salary
  // to be entered, used an isNaN function locally to verify
  // salary inputs as numbers, and implemented the .push() method
  // to add each newly added element via the prompts to the
  // employees array.

  const employees = [];
  let addEmployee = true;
  while (addEmployee) {
    const firstName = prompt("Enter employee's first name:");
    const lastName = prompt("Enter employee's last name:");
    let salary = prompt("Enter employee's salary:");

    if (isNaN(salary)) {
      salary = 0;
    }

    employees.push({
      firstName: firstName,
      lastName: lastName,
      salary: parseInt(salary)
    });

    addEmployee = confirm("Do you want to add another employee?");
  }

  return employees;
}
// Display the average salary
function displayAverageSalary(employees) {
  // TODO: Calculate and display the average salary

  // For the displayAverageSalary function, I used the .forEach()
  // method to call it for each element in the employees array,
  // as well as an equation to calculate an employee's salary
  // using the variable totalSalary defined as 0 added to the
  // input for the prompt. I also used an equation defining
  // the variable averageSalary as the sum of all employees'
  // salaries divided by the total number of employees.

  let totalSalary = 0;

  employees.forEach(employee => {
    totalSalary += employee.salary;
  });

  const averageSalary = totalSalary / employees.length;

  console.log(`The average employee salary between our ${employees.length} employee(s) is $${averageSalary.toFixed(2)}`);

}

// Select a random employee
  // TODO: Select and display a random employee

  // For the getRandomEmployees function, I used the Math.random()
  // method to define the variable randomIndex by choosing a
  // random employee from the previously defined array and
  // subsequently defined the variable randomEmployee with
  // the output for randomIndex for ease of use.

function getRandomEmployee(employees) {
  const randomIndex = Math.floor(Math.random() * employees.length);

  const randomEmployee = employees[randomIndex];

  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
