import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

export default class Team extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <header>
          <Sidebar />
          <nav className="top-nav">
            <div className="container">
              <div className="nav-wrapper">
                <a className="page-title">Our Team</a>
                <img className="" src="/static/images/bum.png" alt="bum" />
                <div className="container">
                  <div className="row">
                    <div className="col s3">
                      <h1>Horos Grigorii</h1>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </nav>
        </header>
      </div>
    )
  }
}
