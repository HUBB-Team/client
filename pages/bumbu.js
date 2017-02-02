import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

export default class Bumbu extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <header>
          <Sidebar />
          <nav className="top-nav">
            <div className="container">
              <div className="nav-wrapper">
                <a className="page-title1">Bumbu Tudor</a><br />
                <img className="" src="/static/images/tudor.png" alt="bum" />

              </div>
            </div>
          </nav>
        </header>
        <main>
          <div className="container">
            <div className="cv">
              <div className="row">
                <div className="col s12">
                  <div className="card brown darken-3">

                    <div className="card-content">

                      <span className="card-title center white-text">Web Designer</span>

                      <ul className="collapsible" data-collapsible="accordion">
                        <li>
                          <div className="collapsible-header"><i className="material-icons">info</i>About</div>
                          <div className="collapsible-body"><span className="white-text">Lorem ipsum dolor sit amet.</span></div>
                        </li>
                        <li>
                          <div className="collapsible-header"><i className="material-icons">insert_chart</i>Skills</div>
                          <div className="collapsible-body"><span className="white-text">Lorem ipsum dolor sit amet.</span></div>
                        </li>
                        <li>
                          <div className="collapsible-header"><i className="material-icons">work</i>Projects</div>
                          <div className="collapsible-body"><span className="white-text">Lorem ipsum dolor sit amet.</span></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
  componentDidMount () {
    $(document).ready(function () {
      $('.collapsible').collapsible()
    })
  }
}
