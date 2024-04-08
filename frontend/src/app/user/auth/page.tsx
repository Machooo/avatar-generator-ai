// import type {InferGetStaticPropsType, GetStaticProps} from 'next'
//
// type Repo = {
//     name: string
//     stargazers_count: number
// }
//
// export const getStaticProps = (async (context) => {
//     const res = await fetch('https://api.github.com/repos/vercel/next.js')
//     const repo = await res.json()
//     return {props: {repo}}
// }) satisfies GetStaticProps<{
//     repo: Repo
// }>
//
// export default function Page({repo}: InferGetStaticPropsType<typeof getStaticProps>) {
//     return repo.stargazers_count
// }

// import { useState, useEffect } from 'react';
//
// export default function UserAuthPage() {
//   const [user, setUser] = useState(null);
//
//   useEffect( () => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`${process.env.API_URL}user/`);
//         if (!response.ok) {l
//           throw new Error(`Error fetching user data: ${response.status}`);
//         }
//         const userData = await response.json();
//         setUser(userData);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//
//     fetchData();
//   }, []);
//
//   return (
//       <>
//         {process.env.API_URL}
//         <h1>User page</h1>
//         {user && <p>User data: {user.message}</p>}
//       </>
//
//   );
// };
