import iconStar from './images/icon-star.svg';

export default function App() {
  return (
    <div className="bg-very-dark-blue h-screen font-overpass">
      <Rating />
    </div>
  );
}

function Rating() {
  return (
    <section className="absolute left-1/2 transform -translate-x-1/2 top-1/3 bg-dark-blue w-1/4 rounded-2xl p-8">
      <div className='bg-small-dark-blue rounded-full flex justify-center items-center w-12 h-12'>
        <img src={iconStar} alt='star-icon'></img>
      </div>
      <h1 className='font-bold text-white text-sm 900:text-2xl'>How did we do?</h1>
      <p className='font-normal text-light-grey text-sm'>
      Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
      </p>
      <div className='flex justify-between mt-6'>
        <RateNumbers>1</RateNumbers>
        <RateNumbers>2</RateNumbers>
        <RateNumbers>3</RateNumbers>
        <RateNumbers>4</RateNumbers>
        <RateNumbers>5</RateNumbers>
      </div>
      <button className='font-bold bg-orange py-2 rounded-3xl w-full mt-6'>SUBMIT</button>
    </section>
  )
}

function RateNumbers({children}) {
  return (
    <div className='bg-small-dark-blue flex justify-center items-center text-light-grey rounded-full w-12 h-12'>
      {children}
    </div>
  )
}

