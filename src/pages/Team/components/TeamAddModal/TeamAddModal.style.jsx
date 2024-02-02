import styled from 'styled-components';

import TextInput from '../../../../components/layouts/TextInput';
import Button300 from '../../../../components/atoms/Button300';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 7rem;
`;

export const ConfirmBtn = styled(Button300)`
  width: 100%;
  height: 2.275rem;

  margin-top: 1rem;
`;

export const PlainButton = styled(ConfirmBtn)`
  border: 1px solid var(--gray-200, #d9d9d9);

  background: var(--gray-100, #f0f0f0);

  color: var(--gray-300, #636363);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.7px;
  white-space: nowrap;
`;

export const ModalInput = styled(TextInput)`
  font-size: 14px;
`;
