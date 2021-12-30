import {connect} from 'react-redux';
import ActionButtons from '../components/ActionButtons';
import {numberDelete,numberClear,numberAdd,numberMinus,numberDivide,numberMultiply,numberEquals} from '../actions/rootActions';

const mapStateToProps = (state) => {
  return {
    operationEnabled: state.lastNumber === ''
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onNumberDelete : (number) => { dispatch(numberDelete()) },
    onNumberClear : () => { dispatch(numberClear()) },
    onNumberAdd : () => { dispatch(numberAdd()) },
    onNumberMinus : () => { dispatch(numberMinus()) },
    onNumberMultiply : () => { dispatch(numberMultiply()) },
    onNumberDivide : () => { dispatch(numberDivide()) },
    onNumberEquals : () => { dispatch(numberEquals()) }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (ActionButtons)