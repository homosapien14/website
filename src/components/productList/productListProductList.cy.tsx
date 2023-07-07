import React from 'react'
import { ProductList } from './productList'

describe('<ProductList />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ProductList />)
  })
})