const Employee = require('../lib/Employee.js');

test('creates an Employee object', () => {
  const employee = new Employee('Employee', 1);

  expect(employee.name).toBe('Employee');
  expect(employee.id).toBe(1);
  expect(employee.email).toBe('Employee@fakemail.com');
  expect(employee.getRole()).toBe('Employee');
});

test('gets Employee\'s role', () => {
  const employee = new Employee('Employee', 1);

  expect(employee.getRole()).toBe('Employee');
});
