// components/Card.js
import Image from 'next/image';

const Card = ({ imageSrc, author, title }) => {
  return (
    <div className={`${author ?"border border-[#DCDCDC]  w-[300px] h-[400px]" : ' w-[370px] h-[390px]'}  card max-w-sm rounded-xl overflow-hidden shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]  `}>
      <div className={`relative  h-64 p-4 border-b   mx-4`}>
        <Image src={imageSrc} alt={title} layout="fill"  className='p-4'/>
      </div>
      
      <div className="px-6 py-4">{
        author ? 
        <button className=" bg-[#FFDA79] rounded-full  font-bold text-sm mb-2 p-2 w-auto">{author}</button>:
        ''
      }
       
        <p className="text-black font-bold text-xl">{ title}</p>
      </div>
    </div>
  );
};

export default Card;
