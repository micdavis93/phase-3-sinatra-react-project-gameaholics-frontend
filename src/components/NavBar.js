import { NavLink } from "react-router-dom"
import { Menu } from "semantic-ui-react"


export default function NavBar() {
  return (
    <Menu pointing horizontal style={{width: "307px", margin: "auto", textAlign: "center"}}>
      <Menu.Item> 
        <NavLink exact to="/">
          Home
        </NavLink>
      </Menu.Item>  

      <Menu.Item>
        <NavLink to="/games">
          Games
        </NavLink>
      </Menu.Item>

      <Menu.Item>
        <NavLink to="/gamers">
          Gamers
        </NavLink>
      </Menu.Item>

      <Menu.Item>
        <NavLink to="/reviews">
          Reviews
        </NavLink>
      </Menu.Item>
    </Menu>
  )
}