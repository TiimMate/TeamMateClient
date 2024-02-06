import styled from 'styled-components';
import SelectButton from '../SelectButton';

function GenderSelector({ selected, setSelected }) {
  const toggleSpot = (index) => {
    const newSpots = new Array(selected.length).fill(false);
    newSpots[index] = !selected[index];
    setSelected(newSpots);
  };

  return (
    <>
      <Label>성별*</Label>
      <Grid2X1>
        <SelectButton $selected={selected[0]} onClick={() => toggleSpot(0)}>
          여성
        </SelectButton>
        <SelectButton $selected={selected[1]} onClick={() => toggleSpot(1)}>
          남성
        </SelectButton>
      </Grid2X1>
    </>
  );
}

const Grid2X1 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 3.25rem;

  width: 100%;
  margin-bottom: 1.25rem;
`;
const Label = styled.label`
  cursor: pointer;
  color: var(--Gray300, #636363);
  font-family: Pretendard Variable;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 166.667% */
  letter-spacing: -0.0375rem;
  background-color: transparent;
  border: none;
  margin-bottom: 0.31rem;
`;

export default GenderSelector;
