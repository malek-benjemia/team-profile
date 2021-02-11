const Manager = require('../lib/Manager.js');
test('creates a manager object', () => {
    const manager = new Manager('myManagerName', 'myManagerID', 'myManagerEmail', 'myManagerSchool');
  
    expect(manager.name).toBe('myManagerName');
    expect(manager.ID).toBe('myManagerID');
    expect(manager.email).toBe('myManagerEmail');
    expect(manager.git).toBe('myManagerSchool');
  });