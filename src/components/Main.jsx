import wethers from "../store/wether";
import { observer } from "mobx-react-lite";
import { Link, useHistory } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Moreinfo from "./Moreinfo"

const Main = observer(() => {

    const history = useHistory() 
    const [url, setUrl] = useState(history.location.pathname.substr(1))

    useEffect(() => {
        const changeUrl = async () => {
            await wethers.viewWether(url)
            await setUrl(history.location.pathname.substr(1))
        }
        changeUrl()
    }, [history.location.pathname, url])

    return(

        wethers.wether.city !== undefined
        ?
            <div>
                {
                    wethers.wether.errorInfo === undefined
                    ?
                    <>
                        <div className="short--wether">
                            <p>
                                <b>City: </b>
                                {wethers.wether.city}
                            </p>
                            <p>
                                <b>Temperature: </b>
                                {Math.round(wethers.wether.temp)}°C
                            </p>
                            <p>
                                <b>Wind speed: </b>
                                {wethers.wether.wind} m/s
                            </p>
                        </div>
                        <button className={`showMore ${wethers.wether.noButton}`} onClick={() => wethers.showMore(url)}>Show more</button>
                
                        {
                            wethers.wether.clouds !== undefined
                            ?
                            <Moreinfo datas={wethers.wether} />
                            :
                            null
                        }
                    </>
                    :
                    <div className="short--wether">
                        <h2>{wethers.wether.city}</h2>
                        <p>{wethers.wether.errorInfo}</p>
                    </div>
                
                }
                
                <div className="mainBack--div">
                    <Link to="/" ><button className="mainBack--button">Main page</button></Link>
                </div>
            </div>
        :
        <div className="lds-roller">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>        
    )
})

export default Main