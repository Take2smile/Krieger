describe('Newsletter Subscription', () => {

	const hoeffnerLoginWebsite = 'https://www.hoeffner.de/login';
	const waitingTime = 4000;

//Test for subscribing positive
it('Subscribe email', () => {

	cy.visit(hoeffnerLoginWebsite);
	cy.get('#responsive > div.consentForm__container > div > div > div.consentForm__acceptButtons > div:nth-child(2) > button > div > div.button__label.button__label--')
		.click()
	cy.get('#email')
		.type('testEmail@gmail.com')
	cy.get('#newsletterFormSubmitBtn')
		.click()
	cy.get('#responsive > div.mainContent > footer > div.footerNewsletter.footerNewsletter--lightFooter > div > div.footerNewsletter__confirmation')
		
})

//Test for subscribing with empty email input
it('Subscribe email submit with empty input', () => {

	cy.visit(hoeffnerLoginWebsite);
		cy.get('#responsive > div.consentForm__container > div > div > div.consentForm__acceptButtons > div:nth-child(2) > button > div > div.button__label.button__label--')
		.click()
	cy.get('#newsletterFormSubmitBtn')
		.click()
	cy.get('#email-error')
	
})

//Test for subscribing with invalid email
it('Subscribe email submit with invalid email', () => {

	cy.visit(hoeffnerLoginWebsite);
	cy.get('#responsive > div.consentForm__container > div > div > div.consentForm__acceptButtons > div:nth-child(2) > button > div > div.button__label.button__label--')
		.click()
	cy.get('#email')
		.type('testEmail')
	cy.get('#newsletterFormSubmitBtn')
		.click()
	cy.get('#email-error')

})

//Test for subscribing with xss attack
it('Subscribe email submit with xss attack', () => {

	cy.visit(hoeffnerLoginWebsite);
	cy.get('#responsive > div.consentForm__container > div > div > div.consentForm__acceptButtons > div:nth-child(2) > button > div > div.button__label.button__label--')
		.click()
	cy.get('#email')
		.type('<script>alert(\'defect\')</script>')
	cy.get('#newsletterFormSubmitBtn')
		.click()
	cy.get('#email-error')

})


//Test for validation max  allowed length in the email input
it('Subscribe email input max allowed length', () => {

	cy.visit(hoeffnerLoginWebsite);
	cy.get('#responsive > div.consentForm__container > div > div > div.consentForm__acceptButtons > div:nth-child(2) > button > div > div.button__label.button__label--')
		.click()
	//enter max allowed +1 character
	cy.get('#email')
		.type('testtesttesttesttesttesttest1@gmail.com')
	//validating that only max allowed accepted
	cy.get('#email')
		.should('have.value', 'testtesttesttesttesttesttest@gmail.com') 

})

})