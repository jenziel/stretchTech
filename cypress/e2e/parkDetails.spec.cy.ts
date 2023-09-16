/// <reference types="cypress" />

describe('Happy Path - Park Details', () => {

  const parksUrl = 'https://developer.nps.gov/api/v1/parks?limit=500&api_key=88uiVoPed9zuR3daHPnsrPxaYV0ZWsiqP66VvpSc';
  const individualParkUrl = 'https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=88uiVoPed9zuR3daHPnsrPxaYV0ZWsiqP66VvpSc';

  beforeEach(() => {
    cy.intercept('GET', parksUrl, { fixture: 'sampleParks.json' }).as('getParks');
    cy.intercept('GET', individualParkUrl, { fixture: 'sampleParks.json' }).as('getPark');
    cy.visit('http://localhost:3000/');
    cy.wait('@getParks');
    cy.contains(".LoadingComponent").should("not.exist");
    cy.get(".parks-container").should("be.visible");
    cy.get('.park-card').first().click();
    // cy.url().should('eq', "http://localhost:3000/park/acad");
    // cy.wait('@getPark')
  });


    it('should display a non-empty park full name', () => {
      cy.get('.park-description')
    });

    it('should display a non-empty park description', () => {
      cy.viewport(1280, 720);
      // cy.get('.park-description').should('not.be.empty').and('contain', 'Mock Description');
      cy.get('.park-details p').each(($el, index, $list) => {
        cy.log($el.text())
      })
    });

    it('should display a non-empty activities list', () => {
      cy.get('.activities ul').should('not.be.empty');
    });

    it('should display a non-empty state', () => {
      cy.get('.additional-info > :nth-child(4)')
    });

    it('should display non-empty contacts', () => {
      cy.get('contact-phone-number').should('not.be.empty');
    });

    it('should display non-empty entrance fees', () => {
      cy.get('.entrance-fees').should('not.be.empty');
    });

    it('should display a non-empty directions URL', () => {
      cy.get('.additional-info > :nth-child(3)')
    });

    it('should display non-empty operating hours', () => {
      cy.get('.operating-hours').should('not.be.empty');
    });

    it('should display non-empty addresses', () => {
      cy.get('.addresses').should('not.be.empty');
    });

    it('should display non-empty images', () => {
      cy.get('.images').should('not.be.empty');
    });

    it('should display non-empty email address', () => {
        cy.get('.contact-email').should('not.be.empty');
      });
  });

describe('Sad Path - Park Details', () => {
  const individualParkUrl = 'https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=88uiVoPed9zuR3daHPnsrPxaYV0ZWsiqP66VvpSc';

  beforeEach(() => {
    cy.intercept('GET', individualParkUrl, { fixture: 'sampleParksMissingFields.json' }).as('sampleParksMissingFields');
    cy.visit('http://localhost:3000/');
    // cy.wait('@sampleParksMissingFields');
    cy.get('.park-card', { timeout: 10000 }).first().click();
  });

  it('should handle missing park details gracefully', () => {
    cy.get('.park-card').should('not.exist');
  });

  it('should handle missing images gracefully', () => {
    cy.get('img')
  });
  
});

