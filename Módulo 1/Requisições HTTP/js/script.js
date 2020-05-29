window.addEventListener('load', function(){
    
    doFetch();
    doFetchAsync();
    
    divisionPromise(12, 6).then(result => {
        console.log(result);
    });

    executeDivisionPromise();
    executeDivisionPromiseAsyncAwait();
});

function doFetch() {
    fetch('https://api.github.com/users/DanielleRS').then(res => {
        res.json().then(data => {
            showData(data);
        });
    }).catch(error => {
        console.log('Erro na requisição');
    });
}

async function doFetchAsync() {
    const res = await fetch('https://api.github.com/users/DanielleRS');
    const json = await res.json();
    console.log(json);
}

function showData(data){
    const user = document.querySelector('#user');
    user.textContent = data.login + ' ' + data.name;
}

function divisionPromise(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject('Não é possível dividir por 0');
        }

        resolve(a / b);
    });
}

function executeDivisionPromise() {
    divisionPromise(12, 0).then(result => {
        console.log(result);
    }).catch(errorMessage => {
        console.log('Falha na divisão. ' + errorMessage);
    });
}

async function executeDivisionPromiseAsyncAwait() {
    const division = await divisionPromise(12, 2);
    console.log(division);
}

/**
 * Promises são construções cuja execução retorna algo no futuro, ou seja, é uma promessa de execução.
 * A execução pode ser resolvida (ok), ou rejeitada (erro).
 * A promise resolvida é interceptada com then.
 * A promise rejeitada é interceptada com catch.
 * Resolve parcialmente o problema do callback hell.
 */

 /**
  * Async/await
  * Açúcar sintático (syntax sugar) sobre promises.
  * Melhoram a legibilidade do código.
  * Dá a impressão de código síncrono.
  * Deve-se decorar a função com async.
  * Toda instrução relacionada à promise deve ser precedida de await.
  */

  /**
   * O comando fetch é utilizado para requisições HTTP.
   * Trabalha internamente com promises.
   * O mais comum é que os dados sejam retornados no formato JSON.
   * Promises:
   *    - muito utilizadas no JavaScript assíncrono.
   *    - resolvem parcialmente o problema do callback hell.
   * Async/await:
   *    - açúcar sintático de promises.
   *    - melhora a legibilidade do código.
   */