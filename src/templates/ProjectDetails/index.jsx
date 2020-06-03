import React from 'react'
import PropTypes from 'prop-types'

import Background from '@components/Background'
import Center from '@components/Center'

import {
  Container,
  Title,
  Text,
  Procedures,
  ProcedureHeader,
  ProcedureTitle,
  ProcedureTitleWrapper,
  ProcedureItem,
} from './styles'

const ProjectDetails = ({ details, procedures }) => {
  const hasProcedures = procedures.makers || procedures.hospitals
  const title = hasProcedures ? 'Procedimentos' : 'Detalhes'

  return details || hasProcedures ? (
    <Container id='projeto'>
      <Background color='darkPurple'>
        <Center>
          <Title>{title}</Title>
          <Text dangerouslySetInnerHTML={{ __html: details }} />

          {procedures.makers && (
            <Procedures>
              <ProcedureHeader>
                <ProcedureTitle>
                  <ProcedureTitleWrapper>Para os Makers</ProcedureTitleWrapper>
                </ProcedureTitle>
              </ProcedureHeader>

              {procedures.makers.map((procedure, index) => (
                <ProcedureItem
                  key={index}
                  icon={procedure.icon}
                  title={procedure.title}
                  text={procedure.text}
                  rtl={index % 2 === 0}
                  color='purple'
                  gradient
                />
              ))}
            </Procedures>
          )}

          {procedures.hospitals && (
            <Procedures>
              <ProcedureHeader>
                <ProcedureTitle>
                  <ProcedureTitleWrapper>
                    Para os Hospitais
                  </ProcedureTitleWrapper>
                </ProcedureTitle>
              </ProcedureHeader>

              {procedures.hospitals.map((procedure, index) => (
                <ProcedureItem
                  key={index}
                  icon={procedure.icon}
                  title={procedure.title}
                  text={procedure.text}
                  rtl={index % 2 === 0}
                  color='purple'
                  gradient
                />
              ))}
            </Procedures>
          )}
        </Center>
      </Background>
    </Container>
  ) : (
    ''
  )
}

const proceduresType = {
  title: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
}

ProjectDetails.propTypes = {
  details: PropTypes.string.isRequired,
  procedures: PropTypes.shape({
    makers: PropTypes.arrayOf(PropTypes.shape(proceduresType)),
    hospitals: PropTypes.arrayOf(PropTypes.shape(proceduresType)),
  }),
}

ProjectDetails.defaultProps = {
  procedures: {},
}

export default ProjectDetails
