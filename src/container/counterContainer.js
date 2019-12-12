import { connect } from 'react-redux'
import Counter from '../component/Counter'
import { increment, decrement,multiple,devide, reset } from '../actions';

const mapStateToProps = (state) => {
   return {
      counter: state 
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      increment: () => dispatch(increment()),
      decrement: () => dispatch(decrement()),
      multiple: () => dispatch(multiple()),
      devide: () => dispatch(devide()),
      reset: () => dispatch(reset())
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);