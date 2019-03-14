import React from 'react'
import {Footer} from './style'
import logo from '../../images/logo_poli_login.png'
import fondo from '../../images/fondo.jpg'
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
                        <div style={{
                            padding: '13px'
                        }}>
                            input
                        </div>
                        <div style={{
                            padding: '13px'
                        }}>
                            input
                        </div>
                        <div style={{
                            padding: '13px'
                        }}>
                            input
                        </div>
                        <div style={{
                            padding: '13px'
                        }}>
                            <Button style={{backgroundColor:"#0F385A", color: 'white'}}>
                                Ingresar
                            </Button>
                        </div>
                        <div style={{
                        }}>
                                Olvido contraseña
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