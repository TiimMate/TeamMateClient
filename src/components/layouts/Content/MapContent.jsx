import React, { useRef, useEffect, useState } from 'react';
import * as S from './MapContent.style';
import arrowIcon from '../../../assets/chevron-down-4 1.svg';
import mapIcon from '../../../assets/icon_map.svg';
const { kakao } = window;

export default function MapContent({ setLoc, workFor }) {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const [searchResult, setSearchResult] = useState('체육관을 검색해보세요');

  useEffect(() => {
    window.kakao.maps.load(() => {
      const container = mapRef.current;
      const options = {
        center: new window.kakao.maps.LatLng(37.566387, 126.977917),
        level: 3,
      };

      setMap(new window.kakao.maps.Map(container, options));
      setMarker(new window.kakao.maps.Marker());
    });
  }, []);

  const onClickAddr = () => {
    new window.daum.Postcode({
      oncomplete: function (addrData) {
        var geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(addrData.address, function (result, status) {
          if (status === window.kakao.maps.services.Status.OK) {
            var currentPos = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x,
            );
            setSearchResult(addrData.address);
            setLoc && setLoc(addrData.address);
            map.panTo(currentPos);
            marker.setMap(null);
            marker.setPosition(currentPos);
            marker.setMap(map);
          }
        });
      },
    }).open();
  };

  const renderSearchLocation = () => {
    if (workFor === 'detail') {
      return (
        <>
          <S.GymName>체육관명</S.GymName>
          <S.SearchMessage>
            <img src={mapIcon} alt='mapIcon' />
            {'잠실종합운동장'}
          </S.SearchMessage>
        </>
      );
    }
    if (workFor === 'write') {
      return (
        <>
          <S.GymName>체육관명*</S.GymName>
          <S.SearchGym onClick={onClickAddr}>
            <S.SearchMessage>
              {searchResult === '체육관을 검색해보세요' ? (
                <>
                  {searchResult}
                  <img src={arrowIcon} alt='arrowIcon' />
                </>
              ) : (
                <>
                  <img src={mapIcon} alt='mapIcon' />
                  {searchResult}
                </>
              )}
            </S.SearchMessage>
          </S.SearchGym>
        </>
      );
    }
  };

  return (
    <S.GymContentBody>
      {renderSearchLocation()}
      <S.Map ref={mapRef}></S.Map>
    </S.GymContentBody>
  );
}
