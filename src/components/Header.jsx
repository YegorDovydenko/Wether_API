import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <nav>
            <Link to='/Vilnius'><button>Vilnius</button></Link>
            <Link to='/Moscow'><button>Moscow</button></Link>   
            <Link to='/Berlin'><button>Berlin</button></Link>   
        </nav>
    )
}

export default Header