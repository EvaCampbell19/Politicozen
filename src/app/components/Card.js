import Image from 'next/image';

const Card = ({ imageSrc, author, title,price }) => {
  return (
      <>
      <div className={`relative h-64 p-4 border-b mx-4`}>
        <Image src={imageSrc} alt={title} layout="fill" className="p-4 object-contain" />
      </div>
      <div className="px-6 py-4 text-center">
        {author && (
          <button className="bg-yellow-300 rounded-full font-bold text-sm mb-2 p-2 w-auto">
            {author}
          </button>
        )}
        
        <p className="text-black font-bold text-xl">{title}</p>
        {price && (
          <p className="text-black font-bold text-xl">{price}</p>
        )

        }
    </div>
    </>
  );
};

export default Card;
