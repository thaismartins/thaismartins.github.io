import React from 'react'

import Layout from '@layouts/Default'

import SEO from '@components/SEO'
import Error from '@templates/Error'

const NotFoundPage = () => (
  <Layout>
    <SEO title='Página não encontrada' />
    <Error />
  </Layout>
)

export default NotFoundPage
