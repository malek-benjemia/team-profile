const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('myInternName', 'myInternID', 'myInternEmail', 'myInternSchool');

    expect(intern.school).toBe('myInternSchool');
    expect(intern.role).toBe('Intern');
  });

test('get school works', () => {
  const intern = new Intern('myInternName', 'myInternID', 'myInternEmail@gmail.com', 'myInternSchool');
  expect(intern.getSchool()).toEqual('myInternSchool');
});

test('get role works', () => {
  const intern = new Intern('myInternName', 'myInternID', 'myInternEmail@gmail.com', 'myInternSchool');
  expect(intern.getRole()).toEqual('Intern');
});