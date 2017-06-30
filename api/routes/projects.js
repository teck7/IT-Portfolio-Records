const express = require('express')

const router = express.Router()

//fake db
const projects = [
    {
        title: 'Ruby Command Line App',
        skills: 'Ruby'
    },
    {
        title: 'Portfolio Website',
        skills: 'HTML5 / CSS3 / Bootstrap 3 / JS / Wireframe Design'
    },
    {
        title: 'Rails Two Sided Marketplace',
        skills: 'Rails 5 / Ruby / HTML5 / CSS3 / Bootstrap 3 / Wireframe Design / DB Schema Design'
    },
    {
        title: 'React / NodeJs / ExpressJS / MongoDB Client',
        skills: ' React  Node and Express Framework / JS / Bootstrap 4 / Wireframe Design / DB Schema Design'
    }
]

router.get('/projects', (req, res) => {
    res.json(projects)
})

module.exports = router
//export default router
