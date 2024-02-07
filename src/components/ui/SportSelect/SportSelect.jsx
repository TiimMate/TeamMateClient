import * as S from './SportSelect.style';

const SPORT_OPTIONS = [
  { id: 'soccer', sport: '축구' },
  { id: 'basketball', sport: '농구' },
  { id: 'baseball', sport: '야구' },
];

/** deprecated: ui/Selector/Sport로 옮겨짐 */
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
