import Link from 'next/link'

const Nav = () => {
    return (
        
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">

    <Link href="/index">
        <a className="navbar-brand" >Navbar</a>
    </Link>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
          <Link  href="/index">
            <a className="nav-link">Home
            <span className="sr-only">(current)</span>
            </a>
          </Link>
      </li>
    
      <li className="nav-item">
          <Link href="/about">
            <a className="nav-link" >About</a>
          </Link>
      </li>
    {/*   <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Separated link</a>
        </div>
      </li> */}
    </ul>
  
  </div>
</nav>

    )
}

export default Nav
