describe('Testing dropdown documentation page', function () {
  before(() => {
    cy.visit('/docs/dropdown');
  });

  // TODO: check focus opening (and make it)
  // TODO: check other dropdown examples except first two

  it('check simple example with Tailwind', function () {
    cy.wait(1000);
    cy.get('#dd-1').contains('Toggle me').click();
    cy.get('#dd-1 .absolute').should('exist').get('.block').first().click();
    cy.get('#dd-1 .absolute').should('not.exist');
  });

  it('check click outside on simple example with Tailwind', function () {
    cy.wait(1000);
    cy.get('#dd-1').contains('Toggle me').click();
    cy.get('#dd-1 .absolute').should('exist');
    cy.get('#content header').first().click(); // Click outside check
    cy.get('#dd-1 .absolute').should('not.exist');
  });

  it('check opening on simple example with Semantic', function () {
    cy.changeStylesheet('semantic');
    cy.wait(1000);
    cy.get('#dd-1').contains('Toggle me').click();
    cy.get('#dd-1 .menu').should('exist').get('.item').first().click();
    cy.get('#dd-1 .menu').should('not.exist');
  });

  it('check opening on simple example with Spectre', function () {
    cy.changeStylesheet('spectre');
    cy.wait(1000);
    cy.get('#dd-1').contains('Toggle me').click();
    cy.get('#dd-1 .menu').should('exist').get('.menu-item').first().click();
    cy.get('#dd-1 .menu').should('not.exist');
  });

  it('check onHover example with Tailwind', function () {
    cy.changeStylesheet('tailwind');
    cy.wait(1000);
    cy.get('#dd-2').contains('Hover me').trigger('mouseenter');
    cy.get('#dd-2 .absolute').should('exist').trigger('mouseleave');
    cy.get('#dd-2 .absolute').should('not.exist');
  });

  it('check onHover example with Semantic', function () {
    cy.changeStylesheet('semantic');
    cy.wait(1000);
    cy.get('#dd-2').contains('Hover me').trigger('mouseenter');
    cy.get('#dd-2 .menu').should('exist').trigger('mouseleave');
    cy.get('#dd-2 .menu').should('not.exist');
  });

  it('check onHover example with Spectre', function () {
    cy.changeStylesheet('spectre');
    cy.wait(1000);
    cy.get('#dd-2').contains('Hover me').trigger('mouseenter');
    cy.get('#dd-2 .menu').should('exist').trigger('mouseleave');
    cy.get('#dd-2 .menu').should('not.exist');
  });
});
