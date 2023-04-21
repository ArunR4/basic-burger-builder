import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import BugerBuilder from './containers/BugerBuilder/BurgerBuilder';

const App = () => (
  <div>
    <Layout>
      <BugerBuilder/>
    </Layout>
  </div>
);

export default App;