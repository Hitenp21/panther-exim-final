import React, { useEffect, useState, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import counts from "../data/count.data";
import '../index.css';

const Count = ({ data }) => {
  const { label, number, duration } = data;
  const [count, setCount] = useState("0");

  useEffect(() => {
    let start = 0;
    const end = parseInt(number.substring(0, 3));
    if (start === end) return;

    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + number.substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [number, duration]);

  return (
    <Col className="vl">
      <div>
        <h1 style={{ display: "block" }}>{count} +</h1>
        <span>{label} </span>
      </div>
    </Col>
  );
}

const CountsContainer = () => {
  return (
    <div className="Counts">
      <Container>
        <Row>
          <Col className='vl'>
            <div>
              <h1 style={{ display: "block" }}>1997</h1>
              <span>ESTABLISHED</span>
            </div>
          </Col>
          {counts.map((count) => (
            <Count key={count.id} data={count} />
          ))}
          <Col className='vl'>
            <div>
              <h1 style={{ display: "block" }}>18 45 +</h1>
              <span>ANNUAL TURNOVER</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );


}

export default CountsContainer;




// import React, { useEffect, useState, useRef } from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
// import counts from "../data/count.data";
// import '../index.css';

// const Count = ({ data }) => {
//   const { label, number, duration } = data;
//   const [count, setCount] = useState("0");
//   const countRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       if (entries[0].isIntersecting || entries[0].intersectionRatio > 0) {
//         let start = 0;
//         const end = parseInt(number.substring(0, 3));
//         if (start === end) return;

//         let totalMilSecDur = parseInt(duration);
//         let incrementTime = (totalMilSecDur / end) * 1000;

//         let timer = setInterval(() => {
//           start += 1;
//           setCount(String(start) + number.substring(3));
//           if (start === end) clearInterval(timer);
//         }, incrementTime);

//         return () => clearInterval(timer);
//       }
//     });

//     if (countRef.current) {
//       observer.observe(countRef.current);
//     }

//     return () => {
//       if (countRef.current) {
//         observer.unobserve(countRef.current);
//       }
//     };
//   }, [number, duration]);

//   return (
//     <Col className="vl" ref={countRef}>
//       <div>
//         <h1 style={{ display: "block" }}>{count} +</h1>
//         <span>{label} </span>
//       </div>
//     </Col>
//   );
// }

// const CountsContainer = () => {
//   return (
//     <div className="Counts">
//       <Container>
//         <Row>
//           <Col className='vl'>
//             <div>
//               <h1 style={{ display: "block" }}>1997</h1>
//               <span>ESTABLISHED</span>
//             </div>
//           </Col>
//           {counts.map((count) => (
//             <Count key={count.id} data={count} />
//           ))}
//           <Col className='vl'>
//             <div>
//               <h1 style={{ display: "block" }}>18 45 +</h1>
//               <span>ANNUAL TURNOVER</span>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default CountsContainer;
