// import Link from 'next/link'

import { Modal, Button } from 'react-materialize'

export default class Person extends React.Component {
  selPerson (personId) {
    alert(personId)
    this.setState({ video: personId }, function () {
      alert(this.state.video)
    })
  }
  render () {
    const left = this.props.personId * 50 + 25
    const top = this.props.personId * 50 + 25
    return (
      <div>
        <div className="person" style={{top, left}} ref="person" onClick={this.selPerson.bind(this, this.props.personId)}>
          {this.props.personId}
        </div>

      </div>
    )
  }

}
