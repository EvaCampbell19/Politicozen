import Image from "next/image";
import Card from "../components/Card";

export default function Home() {
  const images = [
    { src: './product1.svg', author: 'Hossein Naghib', title: 'Leash' },
    { src: './product2.svg', author: 'Hossein Naghib', title: 'Mental Health' },
    { src: './product3.svg', author: 'Hossein Naghib', title: 'Earth & Soccer' },
    { src: './product4.svg', author: 'Karamvir Singh', title: 'Practice' },
    { src: './product5.svg', author: 'Karamvir Singh', title: 'Heavy Funk' },
    { src: './product6.svg', author: 'Karamvir Singh', title: 'Genie' },
    { src: './product7.svg', author: 'Hossein Kazem', title: 'Watermelon' },
    { src: './product8.svg', author: 'Hossein Kazem', title: 'The fall of the dream' },
  ];
  return (
    <>
    <div  style={{
    backgroundImage: `url('./backgorund.png')`,
     height: "950px",
    }}>

    </div>
   <div className="   bg-white p-16 ">
   <div className=" flex justify-center pb-4">
   <p className="font-bold text-[60px]">Most Recent </p><h2 className="text-[#FFDA79] font-bold text-[60px] pl-2">Uploads</h2>
   </div>
    <div className=" container ml-[150px]  mx-auto ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <Card key={index} imageSrc={image.src} author={image.author} title={image.title} />
        ))}
      </div>
    </div>
    </div>
    </>
  );
}
