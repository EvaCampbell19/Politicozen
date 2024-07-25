// components/Card.js
import Image from 'next/image';

const Card = ({ imageSrc, author, title }) => {
  return (
    <div className="border border-[#DCDCDC] h-[400px] w-[300px] card max-w-sm rounded-xl overflow-hidden  ">
      <div className="relative h-64 p-4 border-b   mx-4">
        <Image src={imageSrc} alt={title} layout="fill"  className='p-4'/>
      </div>
      
      <div className="px-6 py-4">
        <button className=" bg-[#FFDA79] rounded-full  font-bold text-sm mb-2 p-2 w-auto">{author}</button>
        <p className="text-black font-bold text-xl">{ title}</p>
      </div>
    </div>
  );
};

export default Card;
