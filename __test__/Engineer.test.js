const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('myEngineerName', 'myEngineerID', 'myEngineerEmail', 'myEngineerGitHub');
  
    expect(engineer.name).toBe('myEngineerName');
    expect(engineer.ID).toBe('myEngineerID');
    expect(engineer.email).toBe('myEngineerEmail');
    expect(engineer.git).toBe('myEngineerGitHub');
  });

test('email is valid', () => {
    const engineer1 = new Engineer('myEngineerName', 'myEngineerID', 'myEngineerEmail@gmail.com', 'myEngineerGitHub');
    expect(engineer1.isEmail()).toBeTruthy();
    const engineer2 = new Engineer('myEngineerName', 'myEngineerID', 'myEngineerEmailgmail.com', 'myEngineerGitHub');
    expect(engineer2.isEmail()).toBeFalsy();
});