const Moreinfo = (datas) => {
    return(
        <>
            {
                datas.datas.temp !== undefined
                ?
                <div className="full--wether">
                    <div className={`full--wether__picture ${datas.datas.type}`} />
                    <div className="full--wether__info">
                        <p><b>Type:</b> {datas.datas.type}</p>
                        <p><b>Pressure:</b> {Math.round(datas.datas.pressure)} mm Hg</p>
                        <p><b>Humidity:</b> {datas.datas.humidity} %</p>
                        <p><b>Max wind gust:</b> {datas.datas.windGust} m/s</p>
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
            }
            
        </>
    )
}

export default Moreinfo