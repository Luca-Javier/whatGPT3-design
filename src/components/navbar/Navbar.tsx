import { RiCloseLine, RiMenu3Line } from "react-icons/ri"
import { IconBaseProps } from "react-icons/lib"
import logo from "/logo.svg"
import "./Navbar.scss"
import { useState } from "react"

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)

  const iconProbs: IconBaseProps = {
    color: "#fff",
    size: 27,
    onClick: () => {
      setToggleMenu(!toggleMenu)
    },
  }

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navbar-links_container">
          <NavLinks />
        </div>
      </div>
      <div className="navbar-sign">
        <p>Sign in</p>
        <button>Sing up</button>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine {...iconProbs} />
        ) : (
          <RiMenu3Line {...iconProbs} />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <NavLinks />
              <div className="navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button>Sing up</button>N
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar

function NavLinks() {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt3">What is GPT3?</a>
      </p>
      <p>
        <a href="#possibility">Open AI</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#bloh">Library</a>
      </p>
    </>
  )
}
