import UnitInfoRow from '../components/ui/UnitInfoRow/UnitInfoRow';

/** @deprecated ==> use MemeberRows */
const renderMembers = (members) =>
  members.map((member) => (
    <UnitInfoRow
      key={member.id}
      unitInfo={member.unitInfo}
      btnText={member.btnText}
      onClickBtn={member.onClickBtn}
    />
  ));

export default renderMembers;
