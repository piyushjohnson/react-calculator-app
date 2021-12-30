import { connect } from 'react-redux';
import ButtonGroup from '../components/ButtonGroup';
import { numberShow, numberDelete, numberEquals } from '../actions/rootActions';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onNumberClick: (number) => {
      dispatch(numberShow(number));
    },
    onNumberEquals: () => {
      dispatch(numberEquals());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonGroup);
