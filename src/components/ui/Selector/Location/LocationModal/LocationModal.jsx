import Modal from '../../../Modal/Modal';

import * as S from './LocationModal.style';

const LOCATION_NAMES = [
  '전체 지역',
  '서울',
  '경기',
  '인천',
  '강원',
  '대전',
  '충북',
  '충남',
  '부산',
  '울산',
  '대구',
  '경북',
  '경남',
  '광주',
  '전북',
  '전남',
  '제주',
];

function LocationModal({ isOpen, onClose, location, setLocation }) {
  return (
    isOpen && (
      <Modal title='지역 선택하기' onClose={onClose}>
        <S.Container>
          {LOCATION_NAMES.map((name, idx) => (
            <S.Button
              $selected={location === name}
              key={idx}
              onClick={() => {
                setLocation(name);
                onClose();
              }}
            >
              {name}
            </S.Button>
          ))}
        </S.Container>
      </Modal>
    )
  );
}

export default LocationModal;
