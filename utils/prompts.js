function managerPrompts(){
  // TODO: Add validation
  return [
    {
      type: 'text',
      name: 'name',
      message: `Please enter a name for this Manager`,
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a name!');
          return false;
        }
      }
    },
    {
      type: 'number',
      name: 'id',
      message: `Please enter an id for this Manager`,
    },
    {
      type: 'text',
      name: 'email',
      message: `Please enter an email for this Manager`
    },
    {
      type: 'number',
      name: 'officeNumber',
      message: `Please enter an office number for this Manager`
    }
  ];
}

function engineerPrompts(){
  // TODO: Add validation
  return [
    {
      type: 'text',
      name: 'name',
      message: `Please enter a name for this Engineer`,
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a name!');
          return false;
        }
      }
    },
    {
      type: 'number',
      name: 'id',
      message: `Please enter an id for this Engineer`,
    },
    {
      type: 'text',
      name: 'email',
      message: `Please enter an email for this Engineer`
    },
    {
      type: 'text',
      name: 'gitHubUserName',
      message: `Please enter a gitHub username for this Engineer`
    }
  ];
}

function internPrompts(){
  // TODO: Add validation
  return [
    {
      type: 'text',
      name: 'name',
      message: `Please enter a name for this Intern`,
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a name!');
          return false;
        }
      }
    },
    {
      type: 'number',
      name: 'id',
      message: `Please enter an id for this Intern`,
    },
    {
      type: 'text',
      name: 'email',
      message: `Please enter an email for this Intern`
    },
    {
      type: 'text',
      name: 'school',
      message: `Please enter a school for this Intern`
    }
  ];
}


module.exports = { managerPrompts, engineerPrompts, internPrompts};
