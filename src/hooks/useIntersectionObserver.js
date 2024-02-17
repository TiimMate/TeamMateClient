// import React, { useEffect, useState, useRef } from 'react';

// export default function useIntersectionObserver({ setPage, page }) {
//   const [bottom, setBottom] = useState(null);
//   const bottomObserver = useRef(null);

//   useEffect(() => {
//     if (!bottom) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           console.log('발견!!');
//           setPage(page + 1);
//         }
//       },
//       { threshold: 0.25 },
//     );
//     //, rootMargin: '200px'
//     bottomObserver.current = observer;

//     observer.observe(bottom);
//     return () => {
//       observer.unobserve(bottom);
//     };
//   }, []);

//   return { bottomObserver };
// }
