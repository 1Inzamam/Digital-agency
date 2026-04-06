import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
const CounterItem = ({ label, target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000; // animation time (ms)
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(parseFloat(start.toFixed(1)));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [inView, target]);

  return (
    <div ref={ref} className="text-center">
      <h2 className="text-4xl font-bold text-primary">
        {count}
        {suffix}
      </h2>
      <p className="text-gray-600 mt-2">{label}</p>
    </div>
  );
};

const Counter = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-linear-to-r from-[#FFA726] to-[#FFFBF2] shadow-lg rounded-2xl">
      <CounterItem label="Years of Experience" target={5} suffix="+" />
      <CounterItem label="Total Clients" target={350} suffix="+" />
      <CounterItem label="Completed Projects" target={1320} suffix="+" />
      <CounterItem label="Average Review" target={4.8} />
    </div>
  );
};

export default Counter;
