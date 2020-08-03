import React, { Component } from "react";
import Media from "react-media";


import NavLink from "./Navlink";
import NavLinkCollapsed from "./NavLinkCollapsed";
import logo from "../img/akuaku.jpg";

class Header extends Component {
  state = {
    btnObject: [
      {
        id: 1,
        title: "Web Dev Projects",
        isCurrentPage: false,
        url: "#webdev"
      },
      {
        id: 2,
        title: "Game Dev Projects",
        isCurrentPage: false,
        url: "#gamedev"
      },
      // {
      //   id: 3,
      //   title: "Certificates",
      //   isCurrentPage: false,
      //   url: "#certificateslink"
      // },
      {
        id: 4,
        title: "Experience",
        isCurrentPage: false,
        url: "#about"
      },
      {
        id: 5,
        title: "Contact",
        isCurrentPage: false,
        url: "#contactform"
      }
    ]
  };
  render() {
    const { btnObject } = this.state;
    return (
      <>
        <header>
          <div className="navLeft">
            <img className="brand-logo" src={logo} alt="brand" />
            <h3>Front end Developer</h3>
          </div>
          <div className="navRight">
            <Media
              queries={{
                small: "(max-width:750px)",
                notSmall: "(min-width:751px)"
              }}
            >
              {matches => (
                <>
                  {matches.small && <NavLinkCollapsed btnArr={btnObject} />}
                  {matches.notSmall && <NavLink btnArr={btnObject} />}
                </>
              )}
            </Media>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
