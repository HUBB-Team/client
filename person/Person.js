// import Link from 'next/link'

export default class Person extends React.Component {
  render () {
    const left = this.props.personId * 10
    const top = this.props.personId * 10
    return (
      <div className="person">
        {this.props.personId}
        <style jsx>{`
            .person{
              position: absolute;

              width:10px;
              height:10px;
              background-color:red;
              border-radius:10px;
            }
        `}</style>
      </div>
    )
  }

}
