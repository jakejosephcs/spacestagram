describe("renders the home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get("#start").clear();
    cy.get("#end").clear();
  });

  it("renders correctly", () => {
    cy.get("#header").should("exist");
    cy.get("#title").should("exist");
    cy.get("#subtitle").should("exist");
    cy.get("#datepicker").should("exist");
  });

  it("date picker renders the correct card details", () => {
    cy.get("#start").type("2022-01-16");
    cy.get("#end").type("2022-01-16");
    cy.get(".card-title").contains("Retreating");
    cy.get(".card-date").contains("2022-01-16");
    cy.get(".card-learn").contains("LEARN MORE");
    cy.get(".card-like").contains("LIKE");
  });

  it("invalid date range renders the correct error", () => {
    cy.get("#start").type("2022-01-16");
    cy.wait(2000);
    cy.get("#end").type("2022-01-15");
    cy.wait(2000);
    cy.get(".status").contains("Please select a correct date range");
    cy.get(".status").contains("No results");
  });

  it("clicking like likes the image", () => {
    cy.get("#start").type("2022-01-16");
    cy.get("#end").type("2022-01-16");
    cy.wait(2000);
    cy.get(".card-like").click();
    cy.get(".card-like").contains("UNLIKE");
  });

  it("click learn more displays the learn more modal", () => {
    cy.get("#start").type("2022-01-16");
    cy.get("#end").type("2022-01-16");
    cy.wait(2000);
    cy.get(".card-learn").click();
    cy.get(".modal-container").should("exist");
  });

  it("learn more modal displays the correct information", () => {
    cy.get("#start").type("2022-01-16");
    cy.get("#end").type("2022-01-16");
    cy.wait(2000);
    cy.get(".card-learn").click();
    cy.get(".modal-description").should("exist");
    cy.get(".modal-description").contains(
      "What type of cloud is that? This retreating"
    );
  });

  it("learn more modal closes when the close button is clicked", () => {
    cy.get("#start").type("2022-01-16");
    cy.get("#end").type("2022-01-16");
    cy.wait(2000);
    cy.get(".card-learn").click();
    cy.get(".modal-description").should("exist");
    cy.get(".modal-close").click();
    cy.get(".modal-description").should("not.exist");
  });
});
