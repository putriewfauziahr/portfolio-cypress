class loginPageObject {

   visitWebsite(){
        cy.visit('/');
   }

   validateLoginLink(){
        cy.get('li.authorization-link:nth-child(2) > a:nth-child(1)')
        .should("have.attr", "href", "https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/")
   }

   validateLandingPage(){
        cy.get('span.content.bg-white:nth-child(2) > span.info').should('be.visible').should('contain', 'New Luma Yoga Collection');
        cy.get('span.content.bg-white:nth-child(2) > strong.title').should('be.visible').should('contain', 'Get fit and look fab in new seasonal styles');
   }

}

export default new loginPageObject();