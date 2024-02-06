import UnitInfoRow from '../UnitInfoRow/UnitInfoRow';

/** fetch data -> format -> rendermembers -> show */
function MemberRows({ members }) {
  return (
    <>
      {members.map((member) => (
        <UnitInfoRow
          key={member.id}
          unitInfo={member.unitInfo}
          btnText={member.btnText}
          onClickBtn={member.onClickBtn}
        />
      ))}
    </>
  );
}

export default MemberRows;
