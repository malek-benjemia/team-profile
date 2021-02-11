const Manager = require('../lib/Manager.js');
test('creates a manager object', () => {
    const manager = new Manager('myManagerName', 'myManagerID', 'myManagerEmail', 'myManagerOfficeNumber');
  
    expect(manager.name).toBe('myManagerName');
    expect(manager.ID).toBe('myManagerID');
    expect(manager.email).toBe('myManagerEmail');
    expect(manager.officeNb).toBe('myManagerOfficeNumber');
  });

  test('email is valid', () => {
    const manager1 = new Manager('myManagerName', 'myManagerID', 'myManagerEmail@gmail.com', 'myManagerOfficeNumber');
    expect(manager1.isEmail()).toBeTruthy();
    const manager2 = new Manager('myManagerName', 'myManagerID', 'myManagerEmailgmail.com', 'myManagerOfficeNumber');
    expect(manager2.isEmail()).toBeFalsy();

});