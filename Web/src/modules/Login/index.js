import React from 'react'
import {Footer} from './style'
import logo from '../../images/logo_poli_login.png'
class Login extends React.Component{
    render(){
        return(
            <div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '21px'
                }}>
                    <div style={{
                        backgroundColor: '#0F385A',
                        borderRadius: '50%',
                        boxSizing: 'border-box',
                        borderWidth: '100px',
                        height: '170px',
                        width: '170px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center' 
                    }}>
                        <img src={logo} style={{
                            height: '75px',
                        }} alt="logo" />
                    </div>
                </div>
                <div> 
                    <div class='logo'>
                        input
                    </div>
                    <div class='logo'>
                        input
                    </div>
                    <div class='logo'>
                        input
                    </div>
                    <div class='logo'>
                        input
                    </div>
                    <div class='logo'>
                        termni
                    </div>
                    <div class='logo'>
                        poli
                    </div>
                </div>
                <footer style={Footer}>
                    <div style={{display: 'flex'}}>
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
                        left: '0px',
                        bottom: '0px',
                        height: '45px',
                        position: 'fixed'
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