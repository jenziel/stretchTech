/// <reference types="cypress" />

describe('NPA - Park Details', () => {
    const parksUrl = "https://developer.nps.gov/api/v1/parks?limit=500&api_key=88uiVoPed9zuR3daHPnsrPxaYV0ZWsiqP66VvpSc";

    beforeEach(() => {
        cy.intercept("GET", parksUrl, { fixture: 'sampleParks.json' }).as("getParks");
        cy.visit('http://localhost:3000/');
        cy.wait("@getParks");
    });

    describe('Happy Path - Park Details', () => {
        it('should display park details when a park card is clicked', () => {
            // Click on the first park card
            cy.get('.park-card').first().click();
            cy.url().should('include', '/park/');

            // Check if park details are displayed
            cy.get('.park-details h1').should('not.be.empty');
            cy.get('.park-details p').should('not.be.empty');
            cy.get('.activities ul').should('not.be.empty');
            cy.get('.states').should('not.be.empty');
            cy.get('.contacts').should('not.be.empty');
            cy.get('.entrance-fees').should('not.be.empty');
            cy.get('.directions-url').should('not.be.empty');
        });

        it('should display park full name', () => {
            // Click on the first park card
            cy.get('.park-card').first().click();
            
            // Check if park full name is displayed
            cy.get('.park-details h1').should('not.be.empty');
        });

        // Add more tests for other properties like description, activities, states, contacts, entranceFees, etc.
    });
    
    describe('Sad Path - Park Details', () => {
        beforeEach(() => {
            cy.intercept("GET", parksUrl, { fixture: 'sampleParksMissingFields.json' }).as("getParksMissingFields");
            cy.visit('http://localhost:3000/park/acad/');
            cy.wait("@getParksMissingFields");
        });
    
        it('should handle missing park details gracefully', () => {
            // Check if a specific element (e.g., .park-card) does not exist
            cy.get('.park-card').should('not.exist');
    
            // You can add more assertions to check for other elements as needed
            // For example:
            // cy.get('.some-other-element').should('not.exist');
        });
    });
    
});
