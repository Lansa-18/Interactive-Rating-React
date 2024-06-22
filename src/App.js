import iconStar from './images/icon-star.svg';
import iconThankYou from './images/illustration-thank-you.svg';

export default function App() {
  return (
    <div className="bg-very-dark-blue h-screen font-overpass">
      {/* <Rating /> */}
      <ThankYou />
    </div>
  );
}

function Rating() {
  return (
    <section className="absolute left-1/2 transform -translate-x-1/2 top-1/4 bg-custom-radial w-1/4 rounded-2xl p-8">
      <div className="bg-[#262E38] rounded-full flex justify-center items-center w-12 h-12">
        <img src={iconStar} alt="star-icon"></img>
      </div>
      <article className="flex flex-col gap-5 mt-6">
        <h1 className="font-bold text-white text-sm 900:text-custom-1.5rem">
          How did we do?
        </h1>
        <p className="font-normal text-light-grey text-sm">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="flex justify-between">
          <RateNumbers>1</RateNumbers>
          <RateNumbers>2</RateNumbers>
          <RateNumbers>3</RateNumbers>
          <RateNumbers>4</RateNumbers>
          <RateNumbers>5</RateNumbers>
        </div>
        <button className="font-bold bg-orange hover:bg-white hover:cursor-pointer ease-in-out duration-300 py-2 rounded-3xl w-full">
          SUBMIT
        </button>
      </article>
    </section>
  );
}

function RateNumbers({ children }) {
  return (
    <div className="bg-[#262E38] flex justify-center items-center text-light-grey rounded-full w-12 h-12 hover:bg-orange hover:cursor-pointer ease-in-out duration-300 hover:text-black font-bold">
      {children}
    </div>
  );
}

function ThankYou() {
  return (
    <section className="absolute left-1/2 transform -translate-x-1/2 top-1/4 bg-custom-radial w-1/4 rounded-2xl p-8">
      <div className='flex justify-center items-center'>
        <img className='w-[45%]' src={iconThankYou} alt="icon-thankyou"></img>
      </div>
      <div className='text-white flex flex-col text-center items-center'>
        <article className='bg-[#262E38] text-orange py-1 px-5 w-[70%] rounded-2xl mt-[32px]'>You selected X out of Y</article>
        <h3 className='mt-[32px] mb-[7px] text-3xl font-bold'>Thank You!</h3>
        <p className='text-sm text-light-grey font-normal'>
          We appreciate you taking the time to give a rating. If you eve need more support, don't hesitate to get in touch!
        </p>
      </div>
    </section>
  );
}
