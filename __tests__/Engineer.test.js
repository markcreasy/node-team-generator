const Engineer = require('../lib/Engineer.js');

test('creates an Engineer object', () => {
  const engineer = new Engineer('Engineer', 1, 'github');

  expect(engineer.name).toBe('Engineer');
  expect(engineer.id).toBe(1);
});

test('Get Engineer\'s Email', () => {
  const engineer = new Engineer('Engineer', 1 , 'github');

  expect(engineer.getEmail()).toBe('Engineer@fakemail.com');
});

test('Get Engineer\'s gitHub', () => {
  const engineer = new Engineer('Engineer', 1 , 'github');

  expect(engineer.getGitHub()).toBe('github');
});

test('Get Engineer\'s Role', () => {
  const engineer = new Engineer('Engineer', 1, 'gitHub');

  expect(engineer.getRole()).toBe("Engineer");
});
