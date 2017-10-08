import React from 'react';

import HeaderState from '../containers/HeaderState'

import {
  Provider,
  Heading,
} from 'rebass';

const Index = () => (
  <Provider>
    <HeaderState />
    <Heading>Home</Heading>
  </Provider>
)

export default Index;
