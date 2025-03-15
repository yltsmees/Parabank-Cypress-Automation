// cypress/support/faker-utils.js
import { faker } from '@faker-js/faker';

// Export pre-configured faker methods
export const generateUser = () => {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state({ abbreviated: true }),
    zipCode: faker.location.zipCode(),
    phone: faker.phone.number('##########'),
    ssn: faker.string.numeric(9),
    username: faker.internet.userName(),
    password: faker.internet.password()
  };
};