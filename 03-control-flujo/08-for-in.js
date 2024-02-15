// For in nos sirve para iterar las propiedades de un objeto

let user = {
    id:1,
    name:'Felipe',
    age:25,
};

for (let prop in user) {
    console.log(prop, user[prop]);
}
