import useModal from '../../../../hooks/useModal';

import LocationModal from './LocationModal/LocationModal';
import * as S from './LocationSelector.style';
import chevronDown4 from '../../../../assets/chevron-down-4 1.svg';

function LocationSelector({ location, setLocation }) {
  const { isOpen, openModal, closeModal } = useModal();

  const locationTitle = location || '지역을 선택해주세요';

  return (
    <>
      <S.Label>지역*</S.Label>
      <S.ButtonWithChevron onClick={openModal}>
        {locationTitle} {!location && <img src={chevronDown4} alt='chevron' />}
      </S.ButtonWithChevron>
      <LocationModal
        onClose={closeModal}
        isOpen={isOpen}
        location={location}
        setLocation={setLocation}
      />
    </>
  );
}

export default LocationSelector;
