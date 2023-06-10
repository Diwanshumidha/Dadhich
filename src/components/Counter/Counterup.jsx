import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Counterup({ count }) {
  return (
    <>
      <CountUp end={count} redraw={true}>
        {({ countUpRef, start }) => (
          <VisibilitySensor onChange={start} delayedCall>
            <span ref={countUpRef} className="count_span">
              count
            </span>
          </VisibilitySensor>
        )}
      </CountUp>
    </>
  );
}

export default Counterup;
