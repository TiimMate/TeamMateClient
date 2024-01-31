import * as S from './SportSelect.style';

const SPORT_OPTIONS = [
  { id: 1, sport: '축구' },
  { id: 2, sport: '농구' },
  { id: 3, sport: '야구' },
];

function SportSelect({ sport, setSport }) {
  return (
    <S.Wrapper>
      종목 선택
      <br />
      <S.SelectBar value={sport} onChange={(e) => setSport(e.target.value)}>
        {SPORT_OPTIONS.map((option) => (
          <option value={option.id} key={option.id}>
            {option.sport}
          </option>
        ))}
      </S.SelectBar>
    </S.Wrapper>
  );
}

export default SportSelect;
