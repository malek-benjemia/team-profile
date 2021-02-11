const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('myEngineerName', 'myEngineerID', 'myEngineerEmail', 'myEngineerGitHub');
  
    expect(engineer.git).toBe('myEngineerGitHub');
    expect(engineer.role).toBe('Engineer');
  });

test('get git hub works', () => {
  const engineer = new Engineer('myEngineerName', 'myEngineerID', 'myEngineerEmail@gmail.com', 'myEngineerGitHub');
  expect(engineer.getGithub()).toEqual('myEngineerGitHub');
});

test('get role works', () => {
  const engineer = new Engineer('myEngineerName', 'myEngineerID', 'myEngineerEmail@gmail.com', 'myEngineerGitHub');
  expect(engineer.getRole()).toEqual('Engineer');
});