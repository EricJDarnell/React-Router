import { Link } from "react-router-dom"
export default function NavBar () {
    return (
        <div id="navbar">
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/celadon">Celadon</Link>
        <Link to="/russian-violet">Russian Violet</Link>
      </div>
    )
}