describe("Test Hotel", () => {
  // Validar el numero de cards que llegan en el hotelsContainer
  let countCards;
  
  it("Validate that all cards appear on page load", () => {
    cy.visit("https://aleechetorres.github.io/hotels/");

    // Validar el numero de cards que llegan en el hotelsContainer
    cy.get(".hotelsContainer").find(".card").its("length").then(length => {
      countCards = length;
      cy.get(".hotelsContainer").find(".card").should("have.length", countCards);
    });
  });

  it("Validate each price filter and verify the number of displayed cards", () => {
    cy.visit("https://aleechetorres.github.io/hotels/");

    cy.get("[name='filter-prices']").select("all");
    cy.get(".hotelsContainer").find(".card").should("have.length", countCards);
    cy.get("[name='filter-prices']").select("$");
    cy.get(".hotelsContainer").find(".card").should("contain", "Price 1");
    cy.get("[name='filter-prices']").select("$$");
    cy.get(".hotelsContainer").find(".card").should("contain", "Price 2");
    cy.get("[name='filter-prices']").select("$$$");
    cy.get(".hotelsContainer").find(".card").should("contain", "Price 3");
    cy.get("[name='filter-prices']").select("$$$$");
    cy.get(".hotelsContainer").find(".card").should("contain", "Price 4");
  });

  it("Clean the filters and verify that all the cards are again present", () => {
    cy.visit("https://aleechetorres.github.io/hotels/");

    cy.get(".filter__Clean").click();
    cy.get(".hotelsContainer").find(".card").should("have.length", countCards);
  })
});