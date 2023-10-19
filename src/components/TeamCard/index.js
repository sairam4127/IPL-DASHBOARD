// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachobj} = props
  const {name, id, teamImageUrl} = eachobj

  return (
    <li className="team-card-list-item">
      <Link to={`/team-matches/${id}`} className="link">
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="ipl-team-head">{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
