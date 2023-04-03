// 
const url = require('url');
const adress = 'https://www.meusite.com.br/catalog?produtos=cadeira';
const parseUrl = new url.URL(adress);

console.log(`host: ${parseUrl.host}`);
console.log(`pathname: ${parseUrl.pathname}`);
console.log(`search: ${parseUrl.search}`);
console.log(`serarchParams: ${parseUrl.searchParams}`);
console.log(`searchParams.get(produtos): ${parseUrl.searchParams.get('produtos')}`); // já retorna o valor