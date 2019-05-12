import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { propTypes, reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import compose from 'recompose/compose'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CircularProgress from '@material-ui/core/CircularProgress'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import Logo from '../logo.svg'

import { styles, Box } from './../styles'

import { Notification, translate, userLogin } from 'react-admin'

// see http://redux-form.com/6.4.3/examples/material-ui/
const renderInput = ({
  meta: { touched, error } = {},
  input: { ...inputProps },
  ...props
}) => (
  <TextField
    error={!!(touched && error)}
    helperText={touched && error}
    {...inputProps}
    {...props}
    fullWidth
  />
)

class Login extends Component {
    login = auth => // eslint-disable-line
      this.props.userLogin(
        auth,
        this.props.location.state
          ? this.props.location.state.nextPathname
          : '/'
      )

    render () {      
      const { classes, handleSubmit, isLoading, translate } = this.props
      return (
        <div className={classes.main}>
          <Card className={classes.card}>
            <Box className='box'>
              <div className={classes.avatar}>
                <img src={Logo} alt='Logo' />
              </div>
              <form onSubmit={handleSubmit(this.login)}>
                <div className={classes.form}>
                  <div className={classes.input}>
                    <Field
                      name='username'
                      component={renderInput}
                      label={translate('ra.auth.username')}
                      disabled={isLoading}
                    />
                  </div>
                  <div className={classes.input}>
                    <Field
                      name='password'
                      component={renderInput}
                      label={translate('ra.auth.password')}
                      type='password'
                      disabled={isLoading}
                    />
                  </div>
                </div>
                <CardActions className={classes.actions}>
                  <Button
                    variant='raised'
                    type='submit'
                    color='primary'
                    disabled={isLoading}
                    className={classes.button}
                    fullWidth
                  >
                    {isLoading && (
                      <CircularProgress size={25} thickness={2} />
                    )}
                    {translate('pos.login')}
                  </Button>
                </CardActions>
              </form>
            </Box>
          </Card>
          <Notification />

        </div>
      )
    }
}

Login.propTypes = {
  ...propTypes,
  authProvider: PropTypes.func,
  classes: PropTypes.object,
  previousRoute: PropTypes.string,
  translate: PropTypes.func.isRequired,
  userLogin: PropTypes.func.isRequired
}

const mapStateToProps = state => ({ isLoading: state.admin.loading > 0 })

const enhance = compose(
  translate,
  reduxForm({
    form: 'signIn',
    validate: (values, props) => {
      const errors = {}
      const { translate } = props
      if (!values.username) {
        errors.username = translate('ra.validation.required')
      }
      if (!values.password) {
        errors.password = translate('ra.validation.required')
      }
      return errors
    }
  }),
  connect(
    mapStateToProps,
    { userLogin }
  ),
  withStyles(styles)
)

export default enhance(Login)
