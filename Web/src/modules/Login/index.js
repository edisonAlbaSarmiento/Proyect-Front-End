import React from 'react'
import {Footer} from './style'
import logo from '../../images/logo_poli_login.png'
import fondo from '../../images/fondo.jpg'
import TextField from '@material-ui/core/TextField'; 
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class Login extends React.Component{
    render(){
        return(
            <div style={{
                background:'red',
                backgroundImage: `url(${fondo})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: '100%'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '212px'
                }}>
                    <div style={{
                        backgroundColor: '#0F385A',
                        borderRadius: '50%',
                        boxSizing: 'border-box',
                        borderWidth: '100px',
                        height: '190px',
                        width: '190px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center' 
                    }}>
                        <img src={logo} style={{
                            height: '75px',
                        }} alt="logo" />
                    </div>
                </div>
                    <div style={{
                        height: '273px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <div style={{
                        height: '232px',
                        background: '#ffff',
                        width: '426px',
                        borderRadius: '23px',
                        padding: '3px'
                    }}> 
     <TextField
             
              id="input-with-icon-textfield"
              label="TextField"
              InputProps={{
              startAdornment: (
              <InputAdornment position="start">
              
            </InputAdornment>
          ),
        }}
      />
                <div style={{
                        height: '73px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
         <div style={{
                        height: '16px',
                        background: '#ffff',
                        width: '16px',
                        borderRadius: '20px',
                        padding: '3px',
                        marginLeft: '83px'
                        
                    }}></div>
              <Grid container spacing={8} alignItems="flex-end">
              <Grid item>
              </Grid>
              <Grid item>
              <TextField id="input-with-icon-grid" label="With a grid" />  
              </Grid>
              </Grid>
              </div>

              
                        
<div style={{ 
                        height: '43px',
                        display: 'flex',
                        justifyContent: 'center',
                        
                        }}>
    <Button variant="contained" color="white">
        Ingresar
      </Button>                        </div>
     
      
                        <div style={{
                            padding: '16px'
                        }}>
                        </div>
                        <div style={{
                        }}>
                                <a href='/home'> Olvido contraseña</a>
                        </div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center' 
                        }}>
                        <div style={{
                            flex: '1'
                        }}>
                            termni
                        </div>
                        <div style={{
                            flex: '1'
                        }}>
                            poli
                        </div>
                        </div>
                    </div>
                </div>
                <footer style={Footer}>
                    <div style={{display: 'flex', height: '95px'}}>
                        <div style={{flex: '1'}}>
                            xxxx
                        </div>
                        <div style={{flex: '3'}}>
                            xxxx
                        </div>
                        <div style={{flex: '1'}}>
                            xxxx
                        </div>
                    </div>
                    <div style={{
                        padding: '0px',
                        color: '#9ea498',
                        fontSize: '14px',
                        left: '97px',
                        bottom: '0px',
                        height: '45px',
                    }}>
                        <span>
                        Institución Universitaria Politécnico Grancolombiano - IES sujeta a inspección y vigilancia por el Ministerio de Educación nacional mediante Resolución No. 19349 de 1980-11-04
                        </span>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Login
