const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('myManagerName', 'myManagerID', 'myManagerEmail', 'myManagerOfficeNumber');
  
    expect(manager.officeNb).toBe('myManagerOfficeNumber');
    expect(manager.role).toBe('Manager');
  });

test('get office number works', () => {
  const manager = new Manager('myManagerName', 'myManagerID', 'myManagerEmail@gmail.com', 'myManagerOfficeNumber');
  expect(manager.getOfficeNumber()).toEqual('myManagerOfficeNumber');
});

test('get role works', () => {
  const manager = new Manager('myManagerName', 'myManagerID', 'myManagerEmail@gmail.com', 'myManagerOfficeNumber');
  expect(manager.getRole()).toEqual('Manager');
});