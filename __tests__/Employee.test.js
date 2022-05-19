const Employee = require('../lib/Employee.js');

test('creates an Employee object', () => {
  const employee = new Employee('Employee', 1);

  expect(employee.name).toBe('Employee');
  expect(employee.id).toBe(1);
});

test('Gets Employee\'s Email', () => {
  const engineer = new Employee('Employee', 1 );

  expect(engineer.getEmail()).toBe('Employee@fakemail.com');
});

test('gets Employee\'s role', () => {
  const employee = new Employee('Employee', 1);

  expect(employee.getRole()).toBe('Employee');
});
