import { useState } from 'react';
import iconStar from './images/icon-star.svg';
import iconThankYou from './images/illustration-thank-you.svg';

export default function App() {
  const [rate, setRate] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <div className="bg-very-dark-blue h-screen font-overpass">
      {isSubmitted ? <ThankYou rate={rate}/> : <Rating rate={rate} onSetRate={setRate} onSetSubmit={setIsSubmitted}/>}
    </div>
  );
}

function Rating({ onSetSubmit, rate, onSetRate }) {
  function handleSubmit() {
    rate >=1 ? onSetSubmit(true) : alert('Please select a rating');
  }

  return (
    <section className="absolute left-1/2 transform -translate-x-1/2 top-1/4 bg-custom-radial w-1/4 rounded-2xl p-8">
      <div className="bg-[#262E38] rounded-full flex justify-center items-center w-12 h-12">
        <img src={iconStar} alt="star-icon"></img>
      </div>
      <article className="flex flex-col gap-5 mt-6">
        <h1 className="font-bold text-white text-sm text-[28px]">
          How did we do?
        </h1>
        <p className="font-normal text-light-grey text-sm">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="flex justify-between">
          <RateNumbers rate={rate} onSetRate={onSetRate}>1</RateNumbers>
          <RateNumbers rate={rate} onSetRate={onSetRate}>2</RateNumbers>
          <RateNumbers rate={rate} onSetRate={onSetRate}>3</RateNumbers>
          <RateNumbers rate={rate} onSetRate={onSetRate}>4</RateNumbers>
          <RateNumbers rate={rate} onSetRate={onSetRate}>5</RateNumbers>
        </div>
        <button onClick={handleSubmit} className="font-bold bg-orange hover:bg-white hover:cursor-pointer ease-in-out duration-300 py-2 rounded-3xl w-full">
          SUBMIT
        </button>
      </article>
    </section>
  );
}

function RateNumbers({ children, rate, onSetRate }) {
  function handleClick() {
    onSetRate(children);
    console.log(rate);
  }

  return (
    <div onClick={handleClick} className={`${rate === children ? 'bg-light-grey' : 'bg-[#262E38] hover:bg-orange text-light-grey'} flex justify-center items-center rounded-full w-12 h-12 hover:cursor-pointer ease-in-out duration-300 hover:text-black font-bold`}>
      {children}
    </div>
  );
}

function ThankYou({rate}) {
  return (
    <section className="absolute left-1/2 transform -translate-x-1/2 top-1/4 bg-custom-radial w-1/4 rounded-2xl p-8">
      <div className='flex justify-center items-center'>
        <img className='w-[45%]' src={iconThankYou} alt="icon-thankyou"></img>
      </div>
      <div className='text-white flex flex-col text-center items-center'>
        <article className='bg-[#262E38] text-orange py-1 px-5 w-[85%] rounded-2xl mt-[32px]'>You selected {rate} out of 5</article>
        <h3 className='mt-[32px] mb-[7px] text-3xl font-bold'>Thank You!</h3>
        <p className='text-sm text-light-grey font-normal'>
          We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
        </p>
      </div>
    </section>
  );
}
