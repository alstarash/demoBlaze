# demoBlaze
1. Cypress and node.js should be installed
2. Chance.js javascript library should be installed on dev mode. This is to generate random username and password for signup
3. Execute 'tests.js'
4. Homepage loading is test 1 to demo the before each .
5. Test 2 has the following scenario
	a. Navigate to https://demoblaze.com 
  b. Click signup and create a new account 
  c. Login to your account 
  d. Add 'Samsung Galaxy S6" to your cart 
  e. Navigate to the cart, and verify that you have the correct phone
6. Note that test case 2.e validates the correct phone has been added and not the phone number. Might be a typo on requirements 

Areas for improvement
1. Break down signup and login into seperate tests. 
2. Login credentials can be added to commands so they can easily used to verify other tests
3. Catch the windows alerts when signup fails and try again with a pre defined number of times
4. Site uses lot of JS windows alerts. Will need a global way to handle with using stub or similar
4. Enhance code to verify product is added to cart only once
 
