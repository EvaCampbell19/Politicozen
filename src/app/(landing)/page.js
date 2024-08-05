import Image from 'next/image';
import Card from '../components/Card';

export default function Home() {
  const images = [
    { src: './product1.svg', author: 'Hossein Naghib', title: 'Leash' },
    { src: './product2.svg', author: 'Hossein Naghib', title: 'Mental Health' },
    {
      src: './product3.svg',
      author: 'Hossein Naghib',
      title: 'Earth & Soccer',
    },
    { src: './product4.svg', author: 'Karamvir Singh', title: 'Practice' },
    { src: './product5.svg', author: 'Karamvir Singh', title: 'Heavy Funk' },
    { src: './product6.svg', author: 'Karamvir Singh', title: 'Genie' },
    { src: './product7.svg', author: 'Hossein Kazem', title: 'Watermelon' },
    {
      src: './product8.svg',
      author: 'Hossein Kazem',
      title: 'The fall of the dream',
    },
  ];

  const testimonialsData = [
    {
      firstName: 'Saman',
      lastName: 'Torabi',
      image: './testimonial_1.png',
      discriptation:
        'PoliticoZen is not your ordinary e-commerce platform. It’s a sanctuary for art lovers and political enthusiasts alike. The unique blend of artistic imagery on their merchandise speaks volumes. The website is user-friendly, and the quality of the products received was top-notch. A highly recommended place for those looking to make a statement with their purchases.',
    },
    {
      firstName: 'Mohsen',
      lastName: 'Najafi',
      image: './testimonial_1.png',
      discriptation:
        'The fusion of artistry and practicality is what makes PoliticoZen stand out. The artistically designed products offer a fresh perspective on everyday items. Fast shipping and a seamless shopping experience make it a go-to place for unique finds.',
    },
  ];
  return (
    <>
     <div
style={{
  backgroundImage: `url('./backgorund.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '1210px', // Adjusted height to be dynamic
    minHeight: '1210px',
    width: 'auto',
  }}
  className="py-12" // Added padding for mobile spacing
>
  <div className="container mx-auto h-full w-full flex flex-col md:flex-row justify-center md:justify-start items-center px-4 md:px-6">
    <div className="text-center md:text-left">
      <div className="bg-[#FFDA79] p-4 rounded-full mb-4">
        <div className="font-bold text-lg md:text-xl">
          OVER 100 ARTISTS ALREADY EARNING!
        </div>
      </div>
      <div className="my-6">
        <p className="text-4xl md:text-5xl lg:text-6xl font-black font-bold  leading-tight">
          Cartooning Just <br /> Got a lot Cooler <br /> (And Lucrative)!
        </p>
      </div>
      <div>
        <p className="text-xl md:text-2xl text-[#636363]">
          Transform your art into earnings
        </p>
      </div>
      <div className="mt-6">
        <form>
          <input
            className="p-4 w-full md:w-[400px] rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFDA79] transition duration-300"
            type="text"
            name="search"
            placeholder="Search all artists or products"
          />
        </form>
      </div>
    </div>
  </div>
</div>

<section className="most-recent pt-[160px] mt-[-250px] bg-transparent">
        <div className=" flex justify-center items-center mb-[25px] relative z-[1]">
          <p className="mrtext font-bold lg:text-[60px]">Most Recent </p>
          <h2 className="uploadtext text-[#FFDA79] font-bold text-[60px] pl-2">Uploads</h2>
        </div>
      </section>

      <section className="bg-white relative">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div className={`card max-w-sm rounded-xl overflow-hidden shadow-lg border w-[270px] h-[390px]`}>
              <Card
                key={index}
                imageSrc={image.src}
                author={image.author}
                title={image.title}
              />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-[160px]">
        <div className="w-full h-full flex justify-center flex-col">
          <div className="lg:text-[60px] md:text-[40px] sm:text-[30px]  font-black flex justify-center">
            <span>They sell</span>
            <span className="text-[#FFDA79] pl-3">on politicozen</span>
          </div>
          <div className="flex justify-center items-center">
            <div className="lg:text-[160px] md:text-[120px] sm:text-[50px] font-black text-[#1A2445] opacity-[0.05] leading-[150px]">
              Testimonials
            </div>
          </div>
          <div className="flex flex-wrap gap-6 lg:gap-10 justify-center relative -top-[50px]">
  {testimonialsData?.map((item, index) => (
    <div key={index} className="flex flex-col items-center max-w-xs w-full md:max-w-sm lg:max-w-md">
      <div className="testimonial-carousel p-6 bg-white rounded-2xl shadow-lg">
        <div className="mb-6 flex justify-center">
          <img src="./testimonial_2.png" alt="quote" className="h-8 w-auto" />
        </div>
        <div className="text-left text-gray-600 mb-6 text-sm md:text-base lg:text-lg">
          {item.discriptation}
        </div>
        <div className="flex items-center">
          <div className="mr-4">
            <img src={item.image} alt="alt" className="h-12 w-12 rounded-full" />
          </div>
          <div>
            <div className="font-bold text-sm md:text-base lg:text-lg">
              {item.firstName} {item.lastName}
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
      </section>

    </>
  );
}
