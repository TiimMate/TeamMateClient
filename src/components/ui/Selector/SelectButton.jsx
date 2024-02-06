import styled from 'styled-components';

function SelectButton({ $selected, onClick, children }) {
  return (
    <GridContentWrapper>
      <Button onClick={onClick} $selected={$selected}>
        {children}
      </Button>
    </GridContentWrapper>
  );
}
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;

  width: 100%;
  height: 100%;
  padding: 0.25rem;
  border-radius: 0.375rem;
  border: 1px solid var(--Gray200, #d9d9d9);
  background: #fff;
  cursor: pointer;

  color: var(--Gray300, #636363);
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 1.125rem */
  letter-spacing: -0.0375rem;

  ${(props) =>
    props.$selected &&
    `
  color:  #0075ff;
  border: 1px solid #0075ff;
`}
`;

export const GridContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem 5%; /* 원하는 만큼의 패딩 설정 */
`;

export default SelectButton;
