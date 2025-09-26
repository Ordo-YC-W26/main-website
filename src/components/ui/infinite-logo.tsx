import React from 'react';

const CompanyLogoData = [
  { src: "https://ourhousega.org/wp-content/uploads/2023/10/Yardi-Systems-Logo.png", alt: 'Yardi Logo' },
  { src: "https://www.outsourcinghubindia.com/wp-content/uploads/2021/03/entrata-logo.png", alt: 'Entrata Logo' },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/AppFolio%2C_Inc._Wordmark%2C_2021.svg/2560px-AppFolio%2C_Inc._Wordmark%2C_2021.svg.png", alt: 'AppFolio Logo' },
  { src: "https://images.saasworthy.com/realpageonesite_11063_logo_1653561567_b8xmv.svg", alt: 'RealPage Logo' },
];

const InfiniteScrollingLogosAnimation = () => {
  return (
    <div className="w-full py-6 flex justify-center items-center">
      <div className="container w-full">
        <h2 className="text-center text-xl text-black/70 my-5 font-sans font-light tracking-widest">
          Seamless Integration with best in class software
        </h2>
        <div className="flex relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-32 before:bg-gradient-to-r before:from-white before:via-white before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-32 after:bg-gradient-to-l after:from-white after:via-white after:to-transparent after:content-[''] w-full">
          <div className="flex flex-none gap-16 pr-16 animate-scroll">
            {[...new Array(2)].fill(0).map((_, index) => (
              <React.Fragment key={index}>
                {CompanyLogoData.map(({ src, alt }) => (
                  <img
                    key={alt}
                    src={src}
                    alt={alt}
                    className="h-10 w-auto flex-none filter opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default InfiniteScrollingLogosAnimation;