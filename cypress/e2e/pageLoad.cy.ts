const parksUrl = "https://developer.nps.gov/api/v1/parks?limit=500&api_key=88uiVoPed9zuR3daHPnsrPxaYV0ZWsiqP66VvpSc"

describe('when I visit the app, all national parks should be displayed', () => {
    beforeEach(() => {
      cy.intercept("GET", parksUrl,
       {fixture: 'sampleParks.json'}).as("getParks")
  })
  it('should display park cards on page load', () => {
    cy.visit('http://localhost:3000/')
    cy.wait("@getParks");
    cy.contains(".LoadingComponent").should("not.exist");
    cy.get(".parks-container").should("be.visible");
    cy.fixture("sampleParks.json").then(sampleParks => {
        sampleParks.data.forEach((park) => {
          cy.get('.parks-container h3').contains(park.fullName)
          cy.get('.parks-container img[src="' + park.images[0].url + '"]')
            .should("be.visible")
            
            });
        });
      });
    });
  
