const express = require("express")
const hdbs = require("express-handlebars")

const app = express()

app.use(express.static('public'))

app.engine('handlebars', hdbs.engine()) // hab handlebars
app.set('view engine', 'handlebars')

// rotas
app.get('/react', (req, res) => {

    const about = "React é uma biblioteca JavaScript de front-end gratuita e de código aberto para construir interfaces de usuário baseadas em componentes de interface do usuário. É mantido pela Meta e por uma comunidade de desenvolvedores e empresas individuais."

    const subPage = true

    res.render('react', {subPage, about})
})

app.get('/vue', (req, res) => {

    const about = "Vue.js é uma estrutura JavaScript front-end de modelo-visualização de código aberto para construir interfaces de usuário e aplicativos de página única. Foi criado por Evan You e é mantido por ele e pelo resto dos membros ativos da equipe principal."

    const subPage = true

    res.render('vue', {subPage, about})
})

app.get('/angular', (req, res) => {

    const about = "Angular é uma estrutura de aplicativo da Web gratuita e de código aberto baseada em TypeScript, liderada pela equipe Angular do Google e por uma comunidade de indivíduos e empresas. Angular é uma reescrita completa da mesma equipe que criou o AngularJS."

    const subPage = true

    res.render('angular', {subPage, about})
})

app.get('/', (req, res) => {
    const pages = [{
        title: 'React',
        message: 'Clique aqui para saber mais sobre React!',
        link: '/react'
    },
    {
        title: 'Vue',
        message: 'Clique aqui para saber mais sobre Vue!',
        link: '/vue'
    },
    {
        title: 'Angular',
        message: 'Clique aqui para saber mais sobre Angular!',
        link: '/angular'
    }]

    const subPage = false

    res.render('home', {pages, subPage})
})

app.listen(3000, () => {
    console.log("Page ativa")
})