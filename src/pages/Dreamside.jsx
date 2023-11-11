import "../styles/css/dreamside.css"

function Dreamside(){
    return(
        <div className="container">
            <header>
                <h1>@dreamside</h1>
            </header>
            <div className="beats">
                <h2>Beats:</h2>
                <div className="beats__content">
                    <div className="beat name1">
                        <img src="/img/dekoracni-polstare-minion.jpg.jpg" alt="" />
                        <div className="beat__text">
                            <p className="price">899</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Dreamside