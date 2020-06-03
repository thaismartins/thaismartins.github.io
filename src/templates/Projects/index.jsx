import React, { useState } from 'react'

import Center from '@components/Center'

import projects from '@content/projects'

import categories from './categories'

import {
  Container,
  Title,
  Text,
  Projects,
  Project,
  Categories,
  Category,
  Buttons,
  Button,
} from './styles'

const Projetcs = () => {
  const [activeCategory, setActiveCategory] = useState('')
  const [activeProject, setActiveProject] = useState('')

  const setCloseProject = e => {
    e.preventDefault()
    setActiveProject('')
  }

  const setOpenProject = (e, project) => {
    e.preventDefault()
    setActiveProject(project)
  }

  return (
    <Container id='projetos'>
      <Center>
        <Title>Projetos</Title>
        <Text>
          Soluções open-source para auxiliar o Sistema de Saúde Brasileiro
          durante a crise do COVID-19
        </Text>

        <Categories>
          <Category
            active={activeCategory === ''}
            onClick={() => setActiveCategory('')}
          >
            Todos
          </Category>
          {categories.map((category, index) => (
            <Category
              key={index}
              active={activeCategory === category.type}
              onClick={() => setActiveCategory(category.type)}
            >
              {category.title}
            </Category>
          ))}
        </Categories>

        <Projects>
          {projects.map((project, index) => (
            <Project
              key={index}
              show={activeCategory === project.categoryType || !activeCategory}
              images={project.images}
              title={project.title}
              category={project.category}
              slug={project.slug}
              open={activeProject === index}
              setOpen={e => setOpenProject(e, index)}
              setClose={setCloseProject}
            />
          ))}
        </Projects>

        <Buttons>
          <Button to='#contato' color='orange' uppercase rounded>
            Compartilhe seu Projeto
          </Button>
        </Buttons>
      </Center>
    </Container>
  )
}

export default Projetcs
