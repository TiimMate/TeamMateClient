import styled from 'styled-components';
import SelectButton from '../SelectButton';

function AgeSelector({ selected, setSelected }) {
  const toggleSpot = (index) => {
    const newSpots = new Array(selected.length).fill(false);
    newSpots[index] = !selected[index];
    setSelected(newSpots);
  };

  return (
    <>
      <Label>연령대*</Label>
      <Grid3X2>
        <SelectButton $selected={selected[0]} onClick={() => toggleSpot(0)}>
          10대
        </SelectButton>
        <SelectButton $selected={selected[1]} onClick={() => toggleSpot(1)}>
          20대
        </SelectButton>
        <SelectButton $selected={selected[2]} onClick={() => toggleSpot(2)}>
          30대
        </SelectButton>
        <SelectButton $selected={selected[3]} onClick={() => toggleSpot(3)}>
          40대
        </SelectButton>
        <SelectButton $selected={selected[4]} onClick={() => toggleSpot(4)}>
          50대 이상
        </SelectButton>
      </Grid3X2>
    </>
  );
}

export const Grid3X2 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 세 개의 열, 각 열은 같은 크기 */
  grid-template-rows: repeat(2, 2.875rem);

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
export default AgeSelector;
