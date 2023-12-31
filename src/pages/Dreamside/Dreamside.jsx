import { Link } from 'react-router-dom'

import "../../styles/css/dreamside.css"
import Beat from "../../components/Beat"
import SoundKit from '../../components/soundkit'
import Header from '../../components/Header'

function Dreamside(){
    return(
        <div className="container">
            <Header text="@dreamside"/>
            <div className="beats">
                <h2>Beats:</h2>
                <div className="beats__content">
                    <Link to='/dreamside/violence'><Beat imagesrc={"img/pic.jpg"} name={'ГЕНАДИЙ ГОРИН TYPE BEAT'} price={'1000'} author={'testisexxx'} className="beat"/></Link>
                    <Link to='/dreamside/violence'><Beat imagesrc={"img/pic.jpg"} name={'ГЕНАДИЙ ГОРИН TYPE BEAT'} price={'1000'} author={'testisexxx'} className="beat"/></Link>
                    <Link to='/dreamside/violence'><Beat imagesrc={"img/pic.jpg"} name={'ГЕНАДИЙ ГОРИН TYPE BEAT'} price={'1000'} author={'testisexxx'} className="beat"/></Link>
                    <Link to='/dreamside/violence'><Beat imagesrc={"img/pic.jpg"} name={'ГЕНАДИЙ ГОРИН TYPE BEAT'} price={'1000'} author={'testisexxx'} className="beat"/></Link>
                    <Link className='link' to='/dreamside/beats'>More beats</Link>
                </div>    
            </div>
            <div className="soundkits">
                <h2>Sound Kits:</h2>
                <div className="soundkits__content">
                    <Link to='/'><SoundKit imagesrc={"img/pic.jpg"} name={'ГЕНАДИЙ ГОРИН SOUND KIT'} price={'1000'} author={'testisexxx'} className="soundkit" previewsrc={'sound/testisexxx.mp3'} /></Link>
                    <Link to='/'><SoundKit imagesrc={"img/pic.jpg"} name={'ГЕНАДИЙ ГОРИН SOUND KIT'} price={'1000'} author={'testisexxx'} className="soundkit" previewsrc={'sound/testisexxx.mp3'} /></Link>
                    <Link to='/'><SoundKit imagesrc={"img/pic.jpg"} name={'ГЕНАДИЙ ГОРИН SOUND KIT'} price={'1000'} author={'testisexxx'} className="soundkit" previewsrc={'sound/testisexxx.mp3'} /></Link>
                    <Link to='/'><SoundKit imagesrc={"img/pic.jpg"} name={'ГЕНАДИЙ ГОРИН SOUND KIT'} price={'1000'} author={'testisexxx'} className="soundkit" previewsrc={'sound/testisexxx.mp3'} /></Link>
                    <Link className='link' to='/dreamside/soundkits'>More sound kits</Link>
                </div>    
            </div>
            <footer>
                <div className='logo'><p>Provided by </p><Link to={'/'}><img src="img/vinyl-logo.png" alt="" /></Link></div>
            </footer>
        </div>
        
    )
}

export default Dreamside