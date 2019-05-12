import styled, { keyframes } from 'styled-components'

const styles = theme => ({
  video: {
    width: '100%',
    height: '100%',
    float: 'left',
    top: 0,
    position: 'fixed'
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  card: {
    minWidth: 300,
    marginTop: '6em',
    background: 'rgba(255, 255, 255, 0.7)',
    zIndex: 0
  },
  avatar: {
    margin: '1em',
    display: 'flex',
    justifyContent: 'center'
  },
  icon: {
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    padding: '0 1em 1em 1em'
  },
  input: {
    marginTop: '1em'
  },
  actions: {
    padding: '0 1em 1em 1em'
  }
})
const rotate360 = keyframes`
  from {
    margin-left:100%;
    width:100%;
  }

  to {
    margin-left:0%;
    width:100%;
  }
`
const Box = styled.div`
  animation: ${rotate360} 0.6s linear;
  padding: '0 1em 1em 1em';
  font-size: 1.2rem;
`

export {
  styles,
  Box
}
