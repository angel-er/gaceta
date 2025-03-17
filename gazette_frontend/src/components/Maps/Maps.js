const Maps = ({ url, id, style }) => {
  return (
    <iframe
      src={url}
      id={id}
      width="270"
      height="400"
      style={style}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default Maps;
