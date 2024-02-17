const decodePayload = (token) => {
  const payload = token.substring(
    token.indexOf('.') + 1,
    token.lastIndexOf('.'),
  );
  return JSON.parse(decodeURIComponent(escape(atob(payload))));
};

export default decodePayload;
