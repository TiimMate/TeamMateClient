import * as S from './SportSelect.style';

const SPORT_OPTIONS = [
  { id: 1, sport: '축구' },
  { id: 2, sport: '농구' },
  { id: 3, sport: '야구' },
];

function SportSelect({ sport, setSport, disabled = false }) {
  return (
    <S.Wrapper>
      <S.Title $disabled={disabled}>종목 선택</S.Title>
      <S.SelectBar
        disabled={disabled}
        value={sport}
        onChange={(e) => setSport(e.target.value)}
      >
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
