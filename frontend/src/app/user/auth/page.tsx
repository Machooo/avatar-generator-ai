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
"use client";

import { useState, useEffect } from "react";

export default function UserAuthPage() {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState({});

  const sendemailForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    setErrors({});

    if (!email) {
      setErrors({ ...errors, email: "email is required" });
    }

    if (!password) {
      setErrors({ ...errors, password: "Password is required" });
    }

    if (errors && Object.keys(errors).length !== 0) return;

    try {
    const response = await fetch(`${process.env.API_URL}user/login/`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
        throw new Error(`Error fetching user data: ${response.status}`);
    }
    const userData = await response.json();
    setUser(userData);
    } catch (error) {
    console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.API_URL}user/`);
        if (!response.ok) {
          throw new Error(`Error fetching user data: ${response.status}`);
        }
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>User page</h1>
      api url - {process.env.API_URL}
      <form onSubmit={sendemailForm}>
        <input type="text" name="email" placeholder="email" />
        <br />
        <input type="password" name="password" placeholder="password" />
        {errors && Object.entries(errors).map((key, value) => <p key={key}>{value}</p>)}
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
