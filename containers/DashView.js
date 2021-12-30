import { connect } from 'react-redux';
import DashView from '../components/DashView';

const mapStateToProps = (state) => {
  return {
    compute: state.compute,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DashView);
