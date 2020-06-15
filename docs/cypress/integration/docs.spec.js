describe('Testing documentation', function () {
  it('check landing', function () {
    cy.visit('/');
    cy.get('header').find('h1');
    cy.get('header').find('a');
    cy.get('header').find('a').click();
    cy.location('pathname').should('eq', '/docs/installation');
  });

  it('check pages for emptiness', function () {
    cy.visit('/docs/installation');
    cy.get('body > nav').get('li').each(($el, index, $list) => {
      cy.wrap($el).click();
      cy.get('#content').find('header');
      cy.get('#content').get('header h1').invoke('text').should('not.be.empty');
    });
  });

  it('check stylesheet change', function () {
    cy.visit('/docs/installation');
    cy.changeStylesheet('semantic');
    cy.changeStylesheet('spectre');
    cy.changeStylesheet('tailwind');
  });
});
