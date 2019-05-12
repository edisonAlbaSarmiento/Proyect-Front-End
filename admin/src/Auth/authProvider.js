/* global localStorage */
import firebase from './firebase'

const errorMessage = e => {
	switch (e.code) {
		case 'auth/user-not-found': {
			return 'Usuario no encontrado'
		}
		case 'auth/wrong-password': {
			return 'Contraseña incorrecta'
		}
		default: {
			return 'Hubo un error intenta más tarde'
		}
	}
}

export default (type, params) => {
	switch (type) {
		case 'AUTH_LOGIN': {
			const { username, password } = params
			return new Promise(async (resolve, reject) => {
				try {
					const response = await firebase
						.auth()
						.signInWithEmailAndPassword(username, password)
					localStorage.setItem('firebaseToken', response.uid)
					resolve()
				} catch (e) {
					reject(new Error(errorMessage(e)))
				}
			})
		}
		case 'AUTH_LOGOUT': {
			localStorage.removeItem('firebaseToken')
			return firebase.auth().signOut()
		}
		case 'AUTH_CHECK': {
			return localStorage.getItem('firebaseToken')
				? Promise.resolve()
				: Promise.reject()
		}
		default:
			return Promise.resolve()
	}
}
