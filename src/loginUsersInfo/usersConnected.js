import { extendObservable } from 'mobx'
class Utilisateur {
    constructor() {
        extendObservable(this, {
            //information sur l'utilisateur connecte
            loading: true,
            isLoggedIn: false,
            username: '',
            admin: '',
            id_users: '',
            prenom_users:'',
            email_users: '',
            whatsapp: '',
            password: '',
            contact: '',
            usersInformation: {}
        })
    }
}
export default new Utilisateur();