// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
  state = {recentMatchesList: [], isLoading: true}

  componentDidMount() {
    this.getRecentMatchesList()
  }

  getRecentMatchesList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(eachobj => ({
        umpires: eachobj.umpire,
        result: eachobj.result,
        manOfTheMatch: eachobj.man_of_the_match,
        id: eachobj.id,
        date: eachobj.date,
        venue: eachobj.venue,
        competingTeam: eachobj.competing_team,
        competingTeamLogo: eachobj.competing_team_logo,
        firstInnings: eachobj.first_innings,
        secondInnings: eachobj.second_innings,
        matchStatus: eachobj.match_status,
      })),
    }
    console.log(updatedData)
    this.setState({recentMatchesList: updatedData, isLoading: false})
  }

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {recentMatchesList, isLoading} = this.state
    console.log(recentMatchesList)
    return (
      <div className={`team-matches-bg-cont ${id}`}>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="team-matches-cont">
            <img
              src={recentMatchesList.teamBannerUrl}
              alt="team banner"
              className="team-matches-banner-img"
            />
            <h1 className="team-matches-latest-match-head">Latest Matches</h1>
            <LatestMatch details={recentMatchesList.latestMatchDetails} />
            <ul className="recent-matches-list-cont">
              {recentMatchesList.recentMatches.map(eachobj => (
                <MatchCard eachobj={eachobj} key={eachobj.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
