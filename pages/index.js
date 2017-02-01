import Styles from '../Components/Styles'
import LeftMenu from '../Components/LeftMenu'

export default class Main extends React.Component {
  render () {
    return (
      <div>
        <Styles />
        <header>
          <LeftMenu />
          <nav className="top-nav">
            <div className="container">
              <div className="nav-wrapper">
                <a className="page-title">About HUBB Team</a>
                <img className="" src="/static/images/bum.png" alt="bum" />

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
        </header>
        <main>
          <div className="container">
            <div className="row" />
          </div>
        </main>
      </div>
    )
  }
}
