/// <reference types="cypress" />
// @ts-check
it('loads', () => {
  // application should be running at port 3000
  cy.visit('localhost:3000')

  // passing assertions
  // https://on.cypress.io/get
  // GV: can't take screenshot of this nested element .screenshot() because ...
  cy.get('.new-todo').get('footer')
  // GV: takes screenshot of this element and saves it on the temp folder with the name "input.png"
  cy.get('.new-todo').screenshot('temp/input')

  // this assertion fails on purpose
  // can you fix it?
  // https://on.cypress.io/get
  // GV: added a timeout of 1 sec
  // GV: take screenshot of the element and saves it with the name of the test "loads.png"
  cy.contains('h1', 'todos', { timeout: 1000 }).screenshot()

  // GV: using a custom data attribute
  cy.contains('[data-cy=app-title]', 'todos')

  // GV: take screenshot of the entire page
  cy.screenshot({ capture: 'fullPage' })

  // can you write "cy.contains" using regular expression?
  // cy.contains('h1', /.../)

  // also good practice is to use data attributes specifically for testing
  // see https://on.cypress.io/best-practices#Selecting-Elements
  // which play well with "Selector Playground" tool
  // how would you do select this element?
})
