const Intern = require('../lib/Intern.js');
test('creates an intern object', () => {
    const intern = new Intern('myInternName', 'myInternID', 'myInternEmail', 'myInternSchool');
  
    expect(intern.name).toBe('myInternName');
    expect(intern.ID).toBe('myInternID');
    expect(intern.email).toBe('myInternEmail');
    expect(intern.git).toBe('myInternSchool');
  });