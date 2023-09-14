// /// <reference types="cypress" />

// describe('Error 404 Page', () => {
//   beforeEach(() => {
//     cy.viewport(1280, 720);
//     cy.visit('http://localhost:3000/nonexistentpage');
//   });

//   it('should display a 404 error message', () => {
//     cy.wait(500);
//     cy.contains('404 - Page Not Found').should('be.visible');
//   });

//   it("should display an apology message", () => {
//     cy.contains("Sorry! That page doesn't seem to exist. Try going back to the home page.")
//       .should('be.visible');
//   });

//   it('should display a "Go Back to Home Page" button', () => {
//     cy.get('.go-home-button').should('be.visible');
//   });

//   it("should display a fun fact", () => {
//     cy.get('.fun-fact').should('be.visible');
//   });
// });

// /// <reference types="cypress" />

// describe('404 Page Sad Paths', () => {
//   beforeEach(() => {
//     cy.viewport(1280, 720);
//     cy.visit('http://localhost:3000/nonexistentpage');
//   });

//   it('should not display on main page or in cards details page', () => {
//     cy.visit('http://localhost:3000/');
//     cy.contains('404 - Page Not Found').should('not.exist');
//     cy.visit('http://localhost:3000/park/yose');
//     cy.contains('404 - Page Not Found').should('not.exist');
//   });
// });

// /// <reference types="cypress" />

// describe('Error 500 Page', () => {
//   beforeEach(() => {
//     cy.viewport(1280, 720);
//     cy.visit('http://localhost:3000/test-500');
//   });

//   it('should display a 500 error message', () => {
//     cy.contains('500 - Internal Server Error').should('be.visible');
//   });

//   it("should display an apology message", () => {
//     cy.contains("Oops! Something went wrong on our end.").should('be.visible');
//     cy.contains("We're working to fix it. Please try again later.").should('be.visible');
//   });

//   it('should display a "Go Back to Home Page" button', () => {
//     cy.get('.go-home-button').should('be.visible');
//   });

//   it('should display an error image', () => {
//     cy.get('.error-image').should('be.visible');
//   });

// });

// /// <reference types="cypress" />

// describe('Error 500 Page - Sad path', () => {
//   beforeEach(() => {
//     cy.viewport(1280, 720);

//     cy.intercept('GET', 'http://localhost:3000/test-500', {
//       statusCode: 500,
//       body: 'Internal Server Error',
//       headers: {
//         'content-type': 'text/html',
//       },
//     });

//     cy.request({
//       url: 'http://localhost:3000/test-500',
//       failOnStatusCode: false,
//     });
//   });

//   it('should not display on main page or in cards details page', () => {
//     cy.visit('http://localhost:3000/');
//     cy.contains('404 - Page Not Found').should('not.exist');
//     cy.visit('http://localhost:3000/park/yose');
//     cy.contains('404 - Page Not Found').should('not.exist');
//   });

// });

/// <reference types="cypress" />

describe('ErrorComponent', () => {

  const API_BASE = 'https://developer.nps.gov/api/v1/';
  const API_KEY = '88uiVoPed9zuR3daHPnsrPxaYV0ZWsiqP66VvpSc';

  beforeEach(() => {
    cy.intercept('GET', `${API_BASE}parks?limit=500&api_key=${API_KEY}`, {
      statusCode: 403,
      body: 'Forbidden'
    });
  });

  it('should display the error page', () => {
    cy.viewport(1280, 720);
    cy.visit('http://localhost:3000/');
    cy.contains("Oops! We're looking for it!").should('be.visible');
    // cy.contains('error discription').should('be.visible');
  });
  

});
