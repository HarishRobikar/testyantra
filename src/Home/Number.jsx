import CountUp from 'react-countup';

<CountUp start={0} end={100} delay={0}>
  {({ countUpRef }) => (
    <div>
      <span ref={countUpRef} />
    </div>
  )}
</CountUp>