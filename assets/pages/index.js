// import Link from 'next/link'
import { Dropdown, NavItem, Navbar } from 'react-materialize'

import Person from '../person/Person'
import Video from '../components/Video'

export default class Default extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      video: 1
    }
  }

  render () {
    console.log(this.state.video)
    return (
      <div>
        <Navbar brand=" Online Map " right>
          <Dropdown trigger={
            <a className="dropdown-button" href="#!" data-activates="dropdown1">Lucratori<i className="material-icons right">arrow_drop_down</i></a>
          }>
            <NavItem onClick={() => { console.log(1) }}>Colea</NavItem>
            <NavItem onClick={() => { console.log(2) }}>Fedea</NavItem>
            <NavItem onClick={() => { console.log(3) }}>Vanea</NavItem>
          </Dropdown>
        </Navbar>
        <main >
          <div ref="map" className="map" >
            <div className="persons" >
              <Person personId="1" onClick={console.log} />
              <Person personId="2" onClick={console.log} />
              <Person personId="3" onClick={console.log} />
              <Person personId="4" onClick={console.log} />
            </div>
          </div>
          { this.state.video
             ? (
               <Video />
             ) : null }

        </main>

      </div>
    )
  }

}
