const PORT = 5000;

const express = require('express'); //importar

const app = express(); //inicializar express

app.set('view engine','ejs');

app.get('/', (req , res ) => {

    res.render('index');  //res.send(html); anterior
});

app.get('/productos', (req , res , next) => {

    const productosArr = [  
                            {   
                            nombre: 'Coca-cola', 
                            descripcion: 'Gaseosa de 2L', 
                            cantidad: 5,
                            precio: 54
                            },
                            {   
                            nombre: 'Merengadas', 
                            descripcion: 'Galletas Merengadas rellenas',
                            cantidad: 10,
                            precio: 23
                            },
                            {  
                            nombre: 'Philip KS', 
                            descripcion: 'Cigarrillos Philip Morris KS', 
                            cantidad: 7,
                            precio: 60
                            },
                        ];

    res.render('productos', {productos: productosArr});
});

app.get('/perfil', (req , res ) => {

    res.render('perfil');  //res.send(html); anterior
});

app.get('/servicios', (req , res ) => {

    res.render('servicios');  
});

app.get('/form', (req , res ) => {

    res.render('form');  
});

app.use(express.static('public')); //da acceso a la carpeta public

app.listen(PORT , () => console.info('iniciando en puerto '+ PORT));



