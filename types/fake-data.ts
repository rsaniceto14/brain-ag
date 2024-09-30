import {  } from '@prisma/client';
import { faker } from '@faker-js/faker';
import Decimal from 'decimal.js';



export function fakeUser() {
  return {
    name: faker.person.fullName(),
    password: faker.lorem.words(5),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeUserComplete() {
  return {
    id: faker.number.int(),
    name: faker.person.fullName(),
    password: faker.lorem.words(5),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeRuralProducer() {
  return {
    cpf: faker.lorem.words(5),
    cnpj: undefined,
    name: faker.person.fullName(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeRuralProducerComplete() {
  return {
    id: faker.number.int(),
    cpf: faker.lorem.words(5),
    cnpj: undefined,
    name: faker.person.fullName(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeFarmer() {
  return {
    name: faker.person.fullName(),
    total_area: faker.lorem.words(5),
    total_area_arable: faker.lorem.words(5),
    total_area_vegetable: faker.lorem.words(5),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeFarmerComplete() {
  return {
    id: faker.number.int(),
    name: faker.person.fullName(),
    total_area: faker.lorem.words(5),
    total_area_arable: faker.lorem.words(5),
    total_area_vegetable: faker.lorem.words(5),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    producerId: faker.number.int(),
  };
}
export function fakePlantedCulture() {
  return {
    name: faker.person.fullName(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakePlantedCultureComplete() {
  return {
    id: faker.number.int(),
    name: faker.person.fullName(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    farmerId: faker.number.int(),
  };
}
