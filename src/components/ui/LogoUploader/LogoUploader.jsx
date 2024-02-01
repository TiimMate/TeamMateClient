import * as S from './LogoUploader.style';

function LogoUploader({ url, setUrl }) {
  return (
    <S.TeamLogoSection>
      <S.TeamLogo $logoUrl={url}></S.TeamLogo>
      <Uploader setLogoUrl={setUrl} />
    </S.TeamLogoSection>
  );
}

function Uploader({ setLogoUrl }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && file.type.match('image.*')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogoUrl(e.target.result);
      };
      reader.readAsDataURL(file); // Image Upload
    }
  };
  return (
    <S.LogoUploadLabel>
      이미지 변경
      <input
        type='file'
        accept='.jpg,.png,.svg' /* jpg, png, svg 파일만 허용 */
        onChange={handleFileChange}
      />
    </S.LogoUploadLabel>
  );
}
export default LogoUploader;
