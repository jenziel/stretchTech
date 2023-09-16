describe("when I visit the app, I can favorite and unfavorite parks", () => {
  const parksUrl =
    "https://developer.nps.gov/api/v1/parks?limit=500&api_key=88uiVoPed9zuR3daHPnsrPxaYV0ZWsiqP66VvpSc";
  beforeEach(() => {
    cy.intercept("GET", parksUrl, { fixture: "sampleParks.json" }).as(
      "getParks"
    );
  });

  const selectArches = () => {
    const archesTitle = cy
      .get(".park-card-lower h3")
      .contains("Arches National Park");
    archesTitle.parent().children(".favorite-button").click();
  };

  const addACardToFavorites = () => {
    cy.visit("http://localhost:3000/");
    cy.wait("@getParks");
    cy.get(".parks-container").should("be.visible");
    selectArches();
  };

  it("should add park to favorites when favorite button is clicked", () => {
    addACardToFavorites();
    cy.get("header").contains("Favorites").click();
    cy.get(".park-card-lower h3")
      .contains("Arches National Park")
      .should("exist");
  });

  it("should remove park from favorites when favorite button is de-selected", () => {
    addACardToFavorites();
    cy.get("header").contains("Favorites").click();
    selectArches();
    cy.get(".park-card-lower h3").should("not.exist");
  });

  it("should change classNames when favorited", () => {
    addACardToFavorites();
    cy.get(".park-card-lower")
      .contains("Arches National Park")
      .parent()
      .children(".favorite-button.favorite")
      .should("exist");
  });
});
