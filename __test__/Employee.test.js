const Employee = require('../lib/Employee.js');

test('creates a employee object', () => {
    const employee = new Employee('myEmployeeName', 'myEmployeeID', 'myEmployeeEmail');
  
    expect(employee.name).toBe('myEmployeeName');
    expect(employee.ID).toBe('myEmployeeID');
    expect(employee.email).toBe('myEmployeeEmail');
    expect(employee.role).toBe('Employee');
  });

test('email is valid', () => {
    const employee1 = new Employee('myEmployeeName', 'myEmployeeID', 'myEmployeeEmail@gmail.com');
    expect(employee1.isEmail()).toBeTruthy();
    const employee2 = new Employee('myEmployeeName', 'myEmployeeID', 'myEmployeeEmailgmail.com');
    expect(employee2.isEmail()).toBeFalsy();

});

test('get name works', () => {
    const employee = new Employee('myEmployeeName', 'myEmployeeID', 'myEmployeeEmail@gmail.com');
    expect(employee.getName()).toEqual('myEmployeeName');
});

test('get ID works', () => {
    const employee = new Employee('myEmployeeName', 'myEmployeeID', 'myEmployeeEmail@gmail.com');
    expect(employee.getID()).toEqual('myEmployeeID');
});

test('get email works', () => {
    const employee = new Employee('myEmployeeName', 'myEmployeeID', 'myEmployeeEmail@gmail.com');
    expect(employee.getEmail()).toEqual('myEmployeeEmail@gmail.com');
});

test('get role works', () => {
    const employee = new Employee('myEmployeeName', 'myEmployeeID', 'myEmployeeEmail@gmail.com');
    expect(employee.getRole()).toEqual('Employee');
});