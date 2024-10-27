import loginPageObject from '../pageObjects/loginPage.cy';

describe('Feature Login', () =>{
    it('Login with Valid Credential', ()=>{
        loginPageObject.visitWebsite();
        loginPageObject.validateLoginLink();
        loginPageObject.validateLandingPage();
    })
})