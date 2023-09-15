/// <reference types="cypress" />

describe('NPA - Park Details', () => {
    const parksUrl = "https://developer.nps.gov/api/v1/parks?limit=500&api_key=88uiVoPed9zuR3daHPnsrPxaYV0ZWsiqP66VvpSc";

    beforeEach(() => {
        cy.intercept("GET", parksUrl, { fixture: 'sampleParks.json' }).as("getParks");
        cy.visit('http://localhost:3000/');
        cy.wait("@getParks");
    });

    it('should display at least one park card on page load', () => {
        cy.get('.park-card').should('have.length.greaterThan', 0);
    });

    it('should display park details when a park card is clicked', () => {
        cy.get('.park-card').first().click();
        cy.url().should('include', '/park/');
        cy.get('.park-details h1').should('not.be.empty');
        cy.get('.activities ul').should('not.be.empty');
        cy.get('.additional-info p').should('not.be.empty');

    });

    it('should handle missing park details gracefully', () => {
        cy.intercept('GET', parksUrl, {fixture: 'sampleParksMissingFields.json'}).as('getParksMissingFields');
        cy.visit('http://localhost:3000/');
        cy.wait('@getParksMissingFields');
        
        cy.get('.park-card').first().click();
        cy.url().should('include', '/park/');
        cy.get('.park-details h1').should('not.be.empty');
    });
    

});


