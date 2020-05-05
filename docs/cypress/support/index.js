// const compareText = (el, string) => {
//   const escaped = string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//   const regex = new RegExp(escaped, 'i');
//   return el.invoke('text').should('match', regex) ? el : null;
// };
// Cypress.Commands.add('compareText', compareText);

Cypress.Commands.add('changeStylesheet', function (stylesheet) {
  cy.window().then(win => {
    cy.wait(1000);
    cy.get('#choose-stylesheet .trigger').click();
    cy.get('#choose-stylesheet .menu').should('exist');
    cy.get('#choose-stylesheet .menu li[data-stylesheet="' + stylesheet + '"]').click();
    cy.location('search').should('contain', 'theme=' + stylesheet);
  });
});
