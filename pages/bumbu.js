import Link from 'next/link'
import Sidebar from '../Components/Sidebar'

export default class Bumbu extends React.Component {
  render () {
    return (
      <div>
        <header>
          <Sidebar />
        </header>
        <main>
          <nav className="top-nav">
            <div className="container">
              <div className="nav-wrapper">
                <a className="page-title1">Bostan Ion</a><br />
                <img className="" src="/static/images/bostan2.png" alt="bostan" />

                <div className="card green lighten-5">

                  <div className="card-content black-text">

                    <span className="card-title">Java Developer</span>

                    <p>
                      <Link href="/horos">HHH</Link>

                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
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
        </main>
        <footer >
          <div className="footer-copyright">
            <div className="container center">
                  Made by <Link className="purple" href="/team"><span>HUBB Team</span></Link>
            </div>
          </div>
        </footer>
        <style jsx>{`
          footer {
            position: 'fixed';
            right: 0;
            bottom: 0;
            left: 0;
            'padding-top': '1rem';
            'padding-bottom': '1rem';
            'background-color': '#efefef';
            'text-align': 'center';
          }
  `}</style>
      </div>

    )
  }
}
