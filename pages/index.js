import Link from 'next/link'
import Header from '../Components/Header'

export default class Main extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <header>
          <nav className="top-nav">
            <div className="container">
              <div className="nav-wrapper">
                <a className="page-title">About HUBB Team</a>
                <img className="huinea" src="/static/images/bum.png" alt="bum" />

                <div className="card green lighten-5">

                  <div className="card-content black-text">

                    <span className="card-title">Who we are and what is our goal</span>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                             consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                             proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                             </p>

                  </div>
                </div>

              </div>
            </div>
          </nav>
          <div className="container">
            <a href="#" data-activates="nav-mobile" className="button-collapse top-nav full hide-on-large-only"><i className="material-icons">menu</i></a>
          </div>
          <ul id="nav-mobile" className="side-nav fixed ">
            <li className="logo">
              <a id="logo-container" href="index.html"><img src="/static/logo/hubbteam.png" alt="My Logo" /></a></li>
            <li>
              <nav className="purple">
                <div className="nav-wrapper">
                  <form>
                    <div className="input-field">
                      <input id="search" type="search" required />
                      <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                      <i className="material-icons">close</i>
                    </div>
                  </form>
                </div>
              </nav>
            </li>
            <li><a href="#">About</a></li>
            <li className="no-padding">
              <ul className="collapsible collapsible-accordion">
                <li><a className="collapsible-header waves-effect waves-purple" href="#">Team</a>
                  <div className="collapsible-body">
                    <ul>
                      <li><a href="index.html">Horos Gregory</a></li>
                      <li><a href="#">Ungur Stephen</a></li>
                      <li><a href="#">Bumbu Tudor</a></li>
                      <li><a href="#">Bostan John</a></li>
                      <li><a href="#">Tkacenko Alexander</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
            <li><a href="#">Credo</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </header>
      </div>
    )
  }
}
