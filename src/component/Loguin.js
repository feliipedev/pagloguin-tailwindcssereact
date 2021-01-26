import React from 'react';
// import { Container } from './styles';

function component() {
  return (
    <div className="bg-indigo-100">
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-blue-600 lg:min-h-screen lg:flex lg:items-center p-8 sm:p-12">
        <div className="flex-grow">
            <h1 className="text-white text-center text-2xl sm:text-5xl mb-2"> Seja bem-vindo(a)</h1>
            <p className="text-center text-blue-200 sm:text-lg">
              Faça seu login para começar
            </p>
        </div>
      </div>
      <div className="lg:min-h-screen lg:flex lg:items-center p-12 lg:p-24 xl:p-48">
        <div className="flex-grow bg-white shadow-xl rounded-md border border-gray-300 p-8">
            <div className="sm:flex sm:items-center">
              <img src="./image.jpg" alt="logo" className="sm:flex-shrink-0 mx-auto sm:mx-0 h-24 rounded-full"/>
              <div className="sm:ml-4 sm:text-left text-center">
                  <p className="text-xl">Mariana Silva</p>
                  <p className="text-sm text-gray-600">Gerente de suporte técnico</p>
                  <div className="mt-4">
                    <button type="button" className="text-red-500 hover:text-white hover:bg-red-500 border-red-500 font-semibold rounded-md text-xs px-4 py-1 focus:outline-none">
                      Não é Mariana?
                    </button>
                  </div>
              </div>
              <form className="flex w-full mt-8">
                  <input type="password" placeholder="Sua Senha" className="flex-1 w-full text-gray-700 bg-gray-200 rounded-md hover:bg-white border border-gray-200 outline-none focus:bg-white py-2 px-4 ml-4"></input>
                  <button className="flex-shrink-0 bg-green-500 hover:bg-green-600 focus:outline-none py-2 px-4 ml-4 text-white font-semibold rounded-md" type="button">Entrar</button>
              </form>
            </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default component;