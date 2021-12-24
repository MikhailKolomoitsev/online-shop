import { makeAutoObservable } from "mobx"

export default class Device {
    constructor() {
        this._types = [
            { id: 1, name: 'Smartphones' },
            { id: 2, name: 'Notebooks' }
        ]
        this._brands = [
            { id: 1, name: 'Samsung' },
            { id: 2, name: 'Apple' }
        ]
        this._devices = [
            { id: 1, name: 'iPhone 12 pro', price: 25000, raiting: 5, img: 'https://visanta.com/56561-pos_thickbox/iphone-12-pro-256gb-grafito.jpg' },
            { id: 2, name: 'iPhone 12 pro', price: 25000, raiting: 5, img: 'https://visanta.com/56561-pos_thickbox/iphone-12-pro-256gb-grafito.jpg' },
            { id: 3, name: 'iPhone 12 pro', price: 25000, raiting: 5, img: 'https://visanta.com/56561-pos_thickbox/iphone-12-pro-256gb-grafito.jpg' },
            { id: 4, name: 'iPhone 12 pro', price: 25000, raiting: 5, img: 'https://visanta.com/56561-pos_thickbox/iphone-12-pro-256gb-grafito.jpg' },
        ]
        this._brands =
            makeAutoObservable(this)
    }

    setTypes(bool) {
        this._isAuth = bool
    }

    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._brands
    }

    get brands() {
        return this._brands
    }
}