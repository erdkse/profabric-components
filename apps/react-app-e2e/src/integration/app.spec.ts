describe('pf-button', () => {
  beforeEach(() => cy.visit('/'));

  it('should be loading on click', () => {
    cy.get(':nth-child(2) > [theme="success"]').click();
    cy.get(':nth-child(2) > [theme="success"]').should('have.attr', 'loading');
  });
  it('shouldnt be clickable on click when loading', () => {
    cy.get(':nth-child(3) > [theme="success"]').click();
    cy.get(':nth-child(3) > [theme="success"]')
      .should('have.attr', 'loading')
      .should('have.be', 'disabled');
  });
});
