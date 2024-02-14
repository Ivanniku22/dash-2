import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Tera Impulse</span>
      </div>
      <div className="icons">
          <img src="/search.svg" alt="" className="icon" />
          <img src="/app.svg" alt="" className="icon" />
          <img src="/expand.svg" alt="" className="icon" />
          <div className="notification">
            <img src="/notifications.svg" alt="" />
            <span>1</span>
          </div>
          <div className="user">
            <img 
              src="https://static.vecteezy.com/system/resources/thumbnails/000/290/610/small/10__2850_29.jpg" 
              alt="" 
            />
            <span>Admin</span>
          </div>
          <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  )
}

export default Navbar