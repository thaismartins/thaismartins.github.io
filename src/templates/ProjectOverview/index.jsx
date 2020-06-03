import React from 'react'
import PropTypes from 'prop-types'

import Center from '@components/Center'
import Image from '@components/Image'
import Button from '@components/Button'

import {
  Container,
  Title,
  Carousel,
  ImageWrapper,
  Details,
  DetailsWrapper,
  Infos,
  Text,
  Buttons,
  ShareButtons,
} from './styles'

const ProjectOverview = ({
  title,
  category,
  technology,
  materials,
  designers,
  downloads,
  images,
}) => {
  return (
    <Container id='projeto'>
      <Center>
        <Title>{title}</Title>

        {images && (
          <Carousel color='orange' arrows dots full>
            {images.map((image, index) => (
              <ImageWrapper key={index}>
                <Image
                  src={image}
                  alt={title}
                  fit='cover'
                  style={{
                    margin: 'auto',
                    right: 0,
                    bottom: 0,
                  }}
                />
              </ImageWrapper>
            ))}
          </Carousel>
        )}

        <Details>
          <DetailsWrapper>
            <Infos>
              {category && (
                <Text>
                  <b>Categoria: </b>
                  {category}
                </Text>
              )}

              {technology && (
                <Text>
                  <b>Tecnologia: </b>
                  {technology}
                </Text>
              )}

              {materials && (
                <Text>
                  <b>Materiais: </b>
                  {materials}
                </Text>
              )}

              {designers && (
                <Text>
                  <b>Projetistas: </b>
                  {designers}
                </Text>
              )}

              <Buttons>
                {downloads.map((download, index) => (
                  <Button
                    key={index}
                    to={download}
                    color='orange'
                    uppercase
                    rounded
                    blank
                  >
                    Download
                  </Button>
                ))}
              </Buttons>
            </Infos>
          </DetailsWrapper>

          <ShareButtons>
            <Button to='#contato' color='orange' uppercase rounded>
              Compartilhe
            </Button>
          </ShareButtons>
        </Details>
      </Center>
    </Container>
  )
}

ProjectOverview.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  technology: PropTypes.string,
  materials: PropTypes.string,
  designers: PropTypes.string,
  downloads: PropTypes.arrayOf(PropTypes.string),
}

ProjectOverview.defaultProps = {
  technology: '',
  materials: '',
  designers: '',
  downloads: [],
}

export default ProjectOverview
