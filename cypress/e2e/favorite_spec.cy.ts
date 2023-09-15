describe("when I visit the app, I can favorite and unfavorite parks", () => {
  const parksUrl =
    "https://developer.nps.gov/api/v1/parks?limit=500&api_key=88uiVoPed9zuR3daHPnsrPxaYV0ZWsiqP66VvpSc";
  beforeEach(() => {
    cy.intercept("GET", parksUrl, { fixture: "sampleParks.json" }).as(
      "getParks"
    );
  });
  it("should add park to favorites when favorite button is clicked", () => {
    cy.visit("http://localhost:3000/");
    cy.wait("@getParks");
    cy.get(".parks-container").should("be.visible");
    cy.get(".park-card").should("exist");
    cy.get(".park-card-lower").should("be.visible");
    cy.get(".favorite-button").should("be.visible");
    cy.get(".favorite-button").last().click();
  });
});
