import { useDispatch, useSelector } from 'react-redux';

import { pong } from '../redux/reducers/testReducer';

function Test() {
  const ping = useSelector(state => state.test);
  const dispatch = useDispatch();

  const handleClickBtn = () => {
    dispatch(pong());
  };

  return (
    <div>
      <button type='button' onClick={handleClickBtn}>
        {ping.value}
      </button>
    </div>
  );
}

export default Test;
