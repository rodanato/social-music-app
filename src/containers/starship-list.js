import { connect } from 'react-redux'
import StarshipList from '../components/starship-list'

const mapStateToProps = (state) => {
  return {
    search: state.search
  }
};

const VisibleStarshipList = connect(
  mapStateToProps
)(StarshipList);

export default VisibleStarshipList