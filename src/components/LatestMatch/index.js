// Write your code here
import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    venue,
    result,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = details

  return (
    <div className="latest-match-details-bg-cont">
      <div className="latest-match-team-details-logo-cont">
        <div className="latest-match-team-details-cont">
          <p className="latest-match-competing-head">{competingTeam}</p>
          <p className="latest-match-competing-head">{date}</p>
          <p className="latest-match-competing-head">{venue}</p>
          <p className="latest-match-competing-head">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="latest-match-img"
        />
      </div>
      <hr className="line" />
      <div className="latest-match-innings-details-cont">
        <p className="latest-match-competing-head">First Innings</p>
        <p className="latest-match-competing-head">{firstInnings}</p>
        <p className="latest-match-competing-head">Second Innings</p>
        <p className="latest-match-competing-head">{secondInnings}</p>
        <p className="latest-match-competing-head">Man Of The Match</p>
        <p className="latest-match-competing-head">{manOfTheMatch}</p>
        <p className="latest-match-competing-head">Umpires</p>
        <p className="latest-match-competing-head">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
