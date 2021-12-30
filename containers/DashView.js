import {connect} from 'react-redux';
import DashView from '../components/DashView';



const mapStateToProps = (state) => {
  return {
    number: state.number,
    operation: state.operation,
    lastNumber: state.lastNumber,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps,mapDispatchToProps) (DashView)