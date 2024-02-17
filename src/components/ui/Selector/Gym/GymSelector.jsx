import styled from 'styled-components';
import chevronDown4 from '../../../../assets/chevron-down-4 1.svg';
import mapIcon from '../../../../assets/icon_map.svg';
import { useEffect, useRef, useState } from 'react';

const { maps } = window.kakao;

function GymSelector({ gym, setGym, disabled = false }) {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    maps.load(() => setGymInfo(gym));
  }, []);

  useEffect(() => {
    if (map) map.relayout();

    if (marker) {
      marker.setMap(map);
      map.setCenter(marker.getPosition());
    }
  }, [gym]);

  const setGymInfo = (address) => {
    new maps.services.Geocoder().addressSearch(address, (result, status) => {
      if (status === maps.services.Status.OK) {
        const position = new maps.LatLng(result[0].y, result[0].x);
        setGym(address);

        const container = mapRef.current;
        const options = {
          center: position,
          level: 3,
        };

        setMap(new maps.Map(container, options));
        setMarker(
          new maps.Marker({
            position: position,
          }),
        );
      } else {
        const container = mapRef.current;
        const options = {
          center: new window.kakao.maps.LatLng(37.566387, 126.977917),
          level: 3,
        };

        setMap(new maps.Map(container, options));
        console.log('hello');
      }
    });
  };

  const onClickAddr = () => {
    new window.daum.Postcode({
      oncomplete: async ({ address }) => setGymInfo(address),
    }).open();
  };

  return (
    <>
      <Label>체육관 장소*</Label>
      <ButtonWithChevron disabled={disabled} onClick={onClickAddr}>
        {gym || '체육관을 검색해보세요'}{' '}
        <img src={gym ? mapIcon : chevronDown4} alt='chevron' />
      </ButtonWithChevron>
      <Map $display={!gym} ref={mapRef}></Map>
    </>
  );
}

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

export const ButtonWithChevron = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;

  width: 98%;
  height: 100%;
  margin-left: 1%;
  margin-bottom: 1.25rem;
  padding: 0.625rem;
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
`;

export const Map = styled.div`
  width: 100%;
  padding-bottom: 100%;

  ${(props) => props.$display && 'display: none;'}
`;

export default GymSelector;
