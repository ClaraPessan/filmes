import React, { createContext, useState, useContext } from 'react';

const PesquisaContext = createContext();

export function usePesquisaContext() {
  return useContext(PesquisaContext);
}

export function PesquisaProvider({ children }) {
  const [termoPesquisa, setTermoPesquisa] = useState('');

  return (
    <PesquisaContext.Provider 
    value={{ termoPesquisa, setTermoPesquisa }}
    >
      {children}
    </PesquisaContext.Provider>
  );
}
