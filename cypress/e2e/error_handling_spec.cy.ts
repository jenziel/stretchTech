// const API_BASE = 'https://developer.nps.gov/api/v1/';
// const API_KEY = '88uiVoPed9zuR3daHPnsrPxaYV0ZWsiqP66VvpSc';

/// <reference types="cypress" />

describe('Error 404 Page', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit('http://localhost:3000/nonexistentpage');
  });

  it('should display a 404 error message', () => {
    cy.wait(500); 
    cy.contains('404 - Page Not Found').should('be.visible');
  });

  it("should display an apology message", () => {
    cy.contains("Sorry! That page doesn't seem to exist. Try going back to the home page.")
      .should('be.visible');
  });

  it('should display a "Go Back to Home Page" button', () => {
    cy.get('.go-home-button').should('be.visible');
  });

  it("should display a fun fact", () => {
    cy.get('.fun-fact').should('be.visible');
  });
});

/// <reference types="cypress" />

describe('404 Page Sad Paths', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit('http://localhost:3000/nonexistentpage');
  });

  it('should not display on main page or in cards details page', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('404 - Page Not Found').should('not.exist');
    cy.visit('http://localhost:3000/park/yose');
    cy.contains('404 - Page Not Found').should('not.exist');
  });
});


