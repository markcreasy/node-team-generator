const Manager = require('../lib/Manager.js');

test('creates an Manager object', () => {
  const manager = new Manager('Manager', 1, 1);

  expect(manager.name).toBe('Manager');
  expect(manager.id).toBe(1);
  expect(manager.email).toBe('Manager@fakemail.com');
  expect(manager.officeNumber).toBe(1);
});

test('creates an Manager object', () => {
  const manager = new Manager('Manager', 1, 1);

  expect(manager.getRole()).toBe("Manager");
});
