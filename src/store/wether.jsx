import {runInAction, makeAutoObservable} from 'mobx';

const api = {
    key: 'c7616da4b68205c2f3ae73df2c31d177',
    base: 'http://api.openweathermap.org/data/2.5/'
}

class Wethers {

    wether = {}

    constructor(){
        makeAutoObservable(this)
    }

    async viewWether(town){
        try{
            const response = await fetch(`${api.base}weather?q=${town}&units=metric&appid=${api.key}`)
            const json = await response.json()
            console.log(json);
            return(
                runInAction(() => {
                    this.wether = {
                        city: json.name,
                        temp: json.main.temp,
                        wind: json.wind.speed
                    }
                })
            )
        }
        catch{
            return(
                runInAction(() => {
                    this.wether = {
                        city: "Wrong city",
                        errorInfo: "Back on main page and repeat the request"
                    }
                })
            )
        }        
    }

    async showMore(town){
        const response = await fetch(`${api.base}weather?q=${town}&units=metric&appid=${api.key}`)
        const json = await response.json()
        return(
            runInAction(() => {
                this.wether.noButton = "noButton"
                this.wether.clouds = json.clouds.all
                this.wether.humidity = json.main.humidity
                this.wether.windGust = json.wind.gust
                this.wether.type = json.weather[0].main
                this.wether.pressure = json.main.pressure / 1.33322
            })
        )
    }
}

export default new Wethers()