class LoginPage {
  visit() {
    cy.visit('https://www.saucedemo.com');
  }

  enterUsername(username) {
    cy.get('[data-test="username"]').clear().type(username);
  }

  enterPassword(password) {
    cy.get('[data-test="password"]').clear().type(password);
  }

  clickLogin() {
    cy.get('[data-test="login-button"]').click();
  }

  getErrorMessage() {
    return cy.get('[data-test="error"]');
  }

  clickLogout() {
    cy.get('#logout_sidebar_link').click();
  }
}

module.exports = new LoginPage();
