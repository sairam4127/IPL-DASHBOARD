// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const updatedData = data.teams.map(eachobj => ({
      id: eachobj.id,
      name: eachobj.name,
      teamImageUrl: eachobj.team_image_url,
    }))
    console.log(updatedData)

    this.setState({teamsList: updatedData, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state

    return (
      <div className="home-bg-cont">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <div className="ipl-db-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-logo"
              />
              <h1 className="home-ipl-head">IPL Dashboard</h1>
            </div>
            <ul className="tc-list-cont">
              {teamsList.map(eachobj => (
                <TeamCard eachobj={eachobj} key={eachobj.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home
