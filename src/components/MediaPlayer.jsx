const MediaPlayer = ({ url }) => {
  return <iframe src={url} width={800} height={500} allowFullScreen></iframe>;
};

export default MediaPlayer;
