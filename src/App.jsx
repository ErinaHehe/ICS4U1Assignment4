import React from 'react';
import HeronsFormula from './assets/components/HeronsFormula.jsx';
import AmbiguousCase from './assets/components/AmbiguousCase.jsx';
import NewtonsMethod from './assets/components/NewtonsMethod.jsx';
import PolynomialFunction from './assets/components/PolynomialFunction.jsx';
 
function App() {
  return (
    <div className="container">
      <HeronsFormula />
      <AmbiguousCase />
      <NewtonsMethod />
      <PolynomialFunction />
    </div>
  );
};

export default App;