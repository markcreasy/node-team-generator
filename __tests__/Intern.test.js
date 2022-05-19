const Intern = require('../lib/Intern.js');

test('creates an Intern object', () => {
  const engineer = new Intern('Intern', 1, 'school');

  expect(engineer.name).toBe('Intern');
  expect(engineer.id).toBe(1);
});

test('Get Intern\'s Email', () => {
  const engineer = new Intern('Intern', 1 , 'school');

  expect(engineer.getEmail()).toBe('Intern@fakemail.com');
});

test('Get Intern\'s School', () => {
  const engineer = new Intern('Intern', 1 , 'school');

  expect(engineer.getSchool()).toBe('school');
});

test('Get Intern\'s Role', () => {
  const engineer = new Intern('Intern', 1, 'school');

  expect(engineer.getRole()).toBe("Intern");
});
