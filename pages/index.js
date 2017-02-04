// import Link from 'next/link'
import { Dropdown, NavItem, Navbar } from 'react-materialize'

import {selPerson} from '../functions/frontend'
import Person from '../person/Person'

export default class Default extends React.Component {
  render () {
    return (
      <div>
        <Navbar brand=" &nbsp;Online Map " right>
          <Dropdown trigger={
            <a className="dropdown-button" href="#!" data-activates="dropdown1">Lucratori<i className="material-icons right">arrow_drop_down</i></a>
          }>
            <NavItem onClick={() => { selPerson(1) }}>Colea</NavItem>
            <NavItem onClick={() => { selPerson(2) }}>Fedea</NavItem>
            <NavItem onClick={() => { selPerson(3) }}>Vanea</NavItem>
          </Dropdown>
        </Navbar>
        <main >
          <div ref="map" className="map" >
            <div className="persons" >
              <Person personId="1" />
              <Person personId="2" />
              <Person personId="3" />
              <Person personId="4" />
            </div>
          </div>

        </main>
        <style jsx>{`
          main{
            width:100%;
            overflow:auto;
            padding:0px;
            position:relative;
          }
          .map{
            position:relative;
            margin: 0 auto;
            top:0;
            left:0;
            width:1100px;
            height:600px;
            background-image: url(/static/images/map.png);
            background-size:cover;
          }
          
        `}</style>
      </div>
    )
  }

}
