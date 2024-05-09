import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
         // wait 1s before replacing "Mice" with "Hamsters"
        'FROM  KARACHI, PAKISTAN',
        1600,
        'PASSIONATE DEVELOPER',
        1600,
        'ALWAYS LEARNING',
        1600,
        'DEDICATED TO WORK',
        1600,
        'INTERESTED IN software engineering',
        1700,
      ]}
      speed={50}
      className='text-[1rem] md:text-[3rem] mt-10 text-[#73C2FB] font-bold uppercase'
      repeat={Infinity}
    />
  );
};

export default TextEffect;