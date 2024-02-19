// import React, { useEffect, useState, useRef } from 'react';

// export default function useIntersectionObserver({
//   loading,
//   hasMorePosts,
//   setPage,
// }) {
//   const [bottom, setBottom] = useState(null);
//   const bottomObserver = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting && !loading && hasMorePosts) {
//           setPage((prevpage) => prevpage + 1);
//         }
//       },
//       { threshold: 0.5 },
//     );
//     bottomObserver.current = observer;

//     if (bottom) observer.observe(bottom);

//     return () => {
//       if (bottom) observer.unobserve(bottom);
//     };
//   }, [bottom, loading, hasMorePosts, setPage]);

//   return { bottomObserver };
// }
