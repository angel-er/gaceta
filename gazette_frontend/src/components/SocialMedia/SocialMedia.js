const SocialMediaIframe = ({ url, id, style }) => {
  return (
    <iframe
      id={id}
      src={url}
      width="100%"
      height="500"
      style={style}
      scrolling="no"
      frameBorder="0"
      allowFullscreen="true"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    ></iframe>
  );
};

export default SocialMediaIframe;
