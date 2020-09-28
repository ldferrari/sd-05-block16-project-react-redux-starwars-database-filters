// actions sao objetos
// reducers são interpretadores de actions - sempre switch
// store é o estado gravado, informação salva
// no redux nao consegue alterar diretamente o estado
import React from 'react';
import Table from './components/Table';

function App() {
  return (
    <div>
      <Table />
    </div>
  );
}

export default App;
