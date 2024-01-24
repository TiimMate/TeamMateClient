import React from 'react';
import NewPost from '../../components/layouts/NewPost';
import MainFunctionNavbar from '../../components/layouts/MainFunctionNavbar';
import LocationListBar from '../../components/layouts/LocationListBar';
import UnitSpaceInfoRow from '../../components/ui/UnitSpaceInfoRow';

export default function LocationList() {
  return (
    <>
      <MainFunctionNavbar />
      <NewPost />
      <LocationListBar />
      <UnitSpaceInfoRow />
    </>
  );
}
