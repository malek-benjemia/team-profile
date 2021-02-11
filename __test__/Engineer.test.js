const Engineer = require('../lib/Engineer.js');
test('creates an engineer object', () => {
    const engineer = new Engineer('myEngineerName', 'myEngineerID', 'myEngineerEmail', 'myEngineerGitHub');
  
    expect(engineer.name).toBe('myEngineerName');
    expect(engineer.ID).toBe('myEngineerID');
    expect(engineer.email).toBe('myEngineerEmail');
    expect(engineer.git).toBe('myEngineerGitHub');
  });