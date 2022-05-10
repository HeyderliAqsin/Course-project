// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';
// import { BASE_URL } from '../api/API';

// const About = () => {
//   const { id} = useParams();
//   const [courseCategory, setcourseCategory] = useState();
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     fetch(`${BASE_URL}api/Category/${id}`)
//       .then((c) => c.json())
//       .then((c) => setSingleCourse(c));
//     setLoading(false);
//     return () => {};
//   }, [id]);
//   return (
//     <section id='Aboout'>
//       <div className="container">
//         <div className="row">
//         {loading && <p>Loading...</p>}
//         {courseCategory != null ? (
//           <div className="col-lg-6">

//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default About