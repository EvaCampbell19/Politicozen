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
          height: '1210px',
          width: '100%',
        }}
      >
        <div className="container mx-auto h-full w-full flex justify-start items-center">
          <div>
            <div className="bg-[#FFDA79] p-4 rounded-[50px]">
              <div className="font-bold">OVER 100 ARTIST ALREADY EARNING!</div>
            </div>
            <div className="my-6">
              <div>
                <p className="text-[60px] leading-[60px] font-black">
                  Cartooning Just <br></br> Got a lot Cooler <br></br> (And
                  Lucrative)!
                </p>
              </div>
            </div>
            <div>
              <p className="text-[30px] text-[#636363]">
                Transform your art into earings
              </p>
            </div>
            <div className="mt-[25px]">
              <form>
                <input
                  className="p-5 w-full rounded-2xl"
                  type="text"
                  name="search"
                  placeholder="Search all artist of products"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <section className="most-recent pt-[160px] mt-[-250px] bg-transparent">
        <div className="flex justify-center items-center mb-[25px] relative z-[1]">
          <p className="font-bold text-[60px]">Most Recent </p>
          <h2 className="text-[#FFDA79] font-bold text-[60px] pl-2">Uploads</h2>
        </div>
      </section>
      <section className="bg-white relative">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
          <div className="text-[60px] font-black flex justify-center">
            <span>They sell</span>
            <span className="text-[#FFDA79]">on politicozen</span>
          </div>
          <div className="flex justify-center items-center">
            <div className="text-[160px] font-black text-[#1A2445] opacity-[0.05] leading-[150px]">
              Testimonials
            </div>
          </div>
          <div className="flex gap-10 justify-center relative -top-[50px]">
            {testimonialsData?.map((item, index) => {
              return (
                <div className="relative justify-center flex">
                  <div className="testimonial-carousel w-[565px] p-8 bg-[#ffffff] rounded-2xl shadow-[10px_0_70px_0_rgba(0,0,0,0.15)]">
                    <div className="mb-[25px]">
                      <img src="./testimonial_2.png" alt="quote" />
                    </div>
                    <div className="text-left text-[#636363] mb-[25px]">
                      {item.discriptation}
                    </div>
                    <div className="flex items-center">
                      <div className="mr-4">
                        <img src={item.image} alt="alt" />
                      </div>
                      <div>
                        <div className="font-bold text-[25px]">
                          {item.firstName} {item.lastName}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
