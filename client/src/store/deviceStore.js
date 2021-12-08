import { makeAutoObservable } from "mobx"

export default class Device {
    constructor() {
        this._types = [
            {id: 1, name: 'Smartphones'},
            {id: 2, name: 'Notebooks'}
        ]
            this._brands=
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser(user) {
        this._user = user
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }
}