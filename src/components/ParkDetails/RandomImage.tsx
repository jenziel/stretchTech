type Image = {
  url: string;
  altText: string;
};

type RandomImageProps = {
  randomImage?: Image; // The '?' makes it optional
};

function RandomImage({ randomImage }: RandomImageProps) {
  return (
    <div className='park-image-container'>
      {randomImage && (
        <img
          src={randomImage.url}
          alt={randomImage.altText}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/bearError.png";
          }}
        />
      )}
    </div>
  );
}

export default RandomImage;
