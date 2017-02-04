// import Link from 'next/link'
import { Dropdown, NavItem, Navbar } from 'react-materialize'

import {selPerson} from '../functions/frontend'

export default class Default extends React.Component {
  render () {
    return (
      <div>
        <Navbar brand="Online Map" right>
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
            map
          </div>
        </main>
        <style jsx>{`
          main{
            width:100%;
            overflow:auto;
            position: relative;
          }
          
          .map{
            background-color: #e43;
            position:fixed;
            maggin: 0 auto;
            width: 1000px;
            height:500px;
            background-image: url(/static/images/map.png);
            background-size:cover;
          }
        `}</style>
      </div>
    )
  }

}
