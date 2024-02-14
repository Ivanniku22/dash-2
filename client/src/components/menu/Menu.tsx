import { Link } from "react-router-dom"
import "./menu.scss"
import { menu } from "../../data"

const Menu = () => {
  return (

    //Menus
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItem?.map(listItem =>(
            <Link to={listItem.url} className="listItem" key={listItem.id}>
              <img src={listItem.icon} alt="" />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Menu