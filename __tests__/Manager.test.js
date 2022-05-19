const Manager = require('../lib/Manager.js');

test('creates an Manager object', () => {
  const manager = new Manager('Manager', 1, 1);

  expect(manager.name).toBe('Manager');
  expect(manager.id).toBe(1);
  expect(manager.officeNumber).toBe(1);
});

test('Gets Manager\'s Email', () => {
  const engineer = new Manager('Manager', 1 , 1);

  expect(engineer.getEmail()).toBe('Manager@fakemail.com');
});

test('Gets Manager\'s Role', () => {
  const manager = new Manager('Manager', 1, 1);

  expect(manager.getRole()).toBe("Manager");
});
