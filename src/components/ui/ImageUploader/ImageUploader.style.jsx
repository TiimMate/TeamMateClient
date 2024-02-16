import styled from 'styled-components';

export const ImageSection = styled.section`
  width: 100%;
`;

export const Label = styled.label`
  display: flex;
  color: var(--Gray300, #636363);
  margin-bottom: 0.3125rem;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 166.667% */
  letter-spacing: -0.0375rem;
`;

export const Image = styled.button`
  display: flex;
  width: 4.0625rem;
  height: 4.0625rem;
  margin: 0.875rem 0 1.875rem 0;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  flex-shrink: 0;
  border-radius: 0.375rem;
  border: 0.0625rem solid var(--gray-200, #d9d9d9);
`;

export const NewImageList = styled.div`
  display: flex;
  margin-bottom: 1.875rem;
  justify-content: flex-start;
  align-items: center;
  width: calc(100% - 5rem);
  flex-wrap: wrap; // 복수의 행
`;
export const NewImageBox = styled.div`
  position: relative;
`;
export const DeleteImageButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
`;
export const NewImage = styled.img`
  display: block;

  width: 4.0625rem;
  height: 4.0625rem;
  margin: 0 4px 4px 0;
  justify-content: center;
  align-items: center;
  border-radius: 0.375rem;
  border: 0.0625rem solid var(--gray-200, #d9d9d9);
`;
