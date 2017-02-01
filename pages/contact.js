import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

export default class Contact extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <header>
          <Sidebar />
          <nav className="top-nav">
            <div className="container">
              <div className="nav-wrapper">
                <a className="page-title1">Contact Us </a>
              </div>
            </div>
          </nav>
        </header>
        <main>
          <div className="container">
            <div className="row">
              <div className="col m10 offset-m1 s12">
                <div className="row">
                  <form className="col s12">
                    <div className="row">
                      <div className="input-field col m6 s12">
                        <input id="first_name" type="text" className="validate" />
                        <label htmlFor="first_name">First Name</label>
                      </div>
                      <div className="input-field col m6 s12">
                        <input id="last_name" type="text" className="validate" />
                        <label htmlFor="last_name">Last Name</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col m6 s12">
                        <input id="email" type="email" className="validate" required />
                        <label htmlFor="email">Email</label>
                      </div>
                      <div className="input-field col m6 s12">
                        <input id="company" type="text" className="validate" />
                        <label htmlFor="company">Company</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <textarea id="message" className="materialize-textarea" />
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <label htmlFor="budget">Budget for your project</label>
                        <br />
                      </div>
                      <div className="input-field col s12">
                        <select className="browser-default" id="budget">
                          <option value="" selected disabled>Choose an option</option>
                          <option value="1">&lt; $2000</option>
                          <option value="2">$2000 - $5000</option>
                          <option value="3">&gt; $5000</option>
                        </select>
                      </div>
                    </div>
                    <div className="divider" />
                    <div className="row">
                      <div className="input-field col s12">
                        <label htmlFor="preferences">Communication Preferences</label>
                        <br />
                      </div>
                      <div className="input-field col m4 s12 center-align">
                        <input name="group2" className="checkbox-indigo" type="checkbox" id="emailComm" />
                        <label htmlFor="emailComm">Email</label>
                      </div>
                      <div className="input-field col m4 s12 center-align">
                        <input name="group2" className="checkbox-indigo" type="checkbox" id="callComm" />
                        <label htmlFor="callComm">Call Me</label>
                      </div>
                      <div className="input-field col m4 s12 center-align">
                        <input name="group2" className="checkbox-indigo" type="checkbox" id="newsletter" />
                        <label htmlFor="newsletter">Newsletter</label>
                      </div>
                    </div>
                    <div className="divider" />
                    <div className="row">
                      <div className="col m12">
                        <p className="right-align"><button className="btn btn-large waves-effect waves-light purple" type="button" name="action">Send Message</button></p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </main>
      </div>
    )
  }
}
