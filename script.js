//В объекте data существует метод addRecord, который аргументами получает любой набор объектов.
//Метод addRecord добавляет все свойства переданных объектов в data.

data = {
    addRecord: function(...item){   
        return Object.assign(this, ...item);
    },
    p: 600,
    str: 'hello',
    y: -50
}

data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50});

console.log(data.x)
console.log(data.y)
console.log(data.z)
console.log(data.p)
console.log(data.str) 