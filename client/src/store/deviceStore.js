import { makeAutoObservable } from "mobx"

export default class Device {
    constructor() {
        this._types = [
            { id: 1, name: 'Smartphones' },
            { id: 2, name: 'Laptops' },
            { id: 3, name: 'Microphones' },
            { id: 4, name: 'Accessories' }
        ]
        this._brands = [
            { id: 1, name: 'Samsung' },
            { id: 2, name: 'Apple' },
            { id: 3, name: 'Xiaomi' },
            { id: 4, name: 'Asus' },
            { id: 5, name: 'Huawei' },
        ]
        this._devices = [
            { id: 1, name: 'iPhone 12 pro', price: 25000, raiting: 5, img: 'https://visanta.com/56561-pos_thickbox/iphone-12-pro-256gb-grafito.jpg' },
            { id: 2, name: 'iPhone 12 pro', price: 25000, raiting: 5, img: 'https://visanta.com/56561-pos_thickbox/iphone-12-pro-256gb-grafito.jpg' },
            { id: 3, name: 'iPhone 12 pro', price: 25000, raiting: 5, img: 'https://visanta.com/56561-pos_thickbox/iphone-12-pro-256gb-grafito.jpg' },
            { id: 4, name: 'iPhone 12 pro', price: 25000, raiting: 5, img: 'https://visanta.com/56561-pos_thickbox/iphone-12-pro-256gb-grafito.jpg' },
            { id: 5, name: 'iPhone 12 pro', price: 25000, raiting: 5, img: 'https://visanta.com/56561-pos_thickbox/iphone-12-pro-256gb-grafito.jpg' },
            { id: 6, name: 'iPhone 12 pro', price: 25000, raiting: 5, img: 'https://visanta.com/56561-pos_thickbox/iphone-12-pro-256gb-grafito.jpg' },
            { id: 7, name: 'iPhone 12 pro', price: 25000, raiting: 5, img: 'https://visanta.com/56561-pos_thickbox/iphone-12-pro-256gb-grafito.jpg' },
        ]
        this._selectedType = {}
        this._selectedBrand = {}
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
    setPage(page) {
        this._page = page
    }
    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
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
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}