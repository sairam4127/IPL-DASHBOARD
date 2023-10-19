// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachobj} = props
  const {matchStatus, competingTeam, competingTeamLogo, result} = eachobj

  const statusClass = matchStatus === 'Won' ? 'won' : 'lost'

  return (
    <li className="match-card-bg-cont">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-recent-match-logo"
      />
      <p className="match-card-c-t-head">{competingTeam}</p>
      <p className="match-card-c-t-head">{result}</p>
      <p className={`match-card-match-${statusClass}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
