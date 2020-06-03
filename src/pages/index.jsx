import React from 'react'

import Layout from '@layouts/Default'

import SEO from '@components/SEO'

import Banner from '@templates/Banner'
import Numbers from '@templates/Numbers'
import Manifest from '@templates/Manifest'
import Projects from '@templates/Projects'
import MakerCycle from '@templates/MakerCycle'
import Press from '@templates/Press'
import Testimonials from '@templates/Testimonials'
import Volunteers from '@templates/Volunteers'
import MakePart from '@templates/MakePart'
import Partners from '@templates/Partners'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Banner full />
    <Numbers />
    <Manifest />
    <Projects />
    <MakerCycle />
    <Press />
    <Testimonials />
    <Volunteers />
    <MakePart />
    <Partners />
  </Layout>
)

export default IndexPage
