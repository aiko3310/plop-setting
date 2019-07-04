const cust = require('../cust.config');

module.exports = plop => {
  plop.setGenerator('page', {
    description: 'Create page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What\'s your page name?'
      }
    ], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        path: cust.path.page +'{{ properCase name }}/{{ properCase name }}.js',
        templateFile: './templates/component.hbs'
      },
      {
        type: 'add',
        path: cust.path.page +'{{ properCase name }}/index.js',
        templateFile: './templates/index.hbs'
      }
    ] // array of actions
  });
}