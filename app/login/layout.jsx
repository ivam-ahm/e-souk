"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const loginLayout = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    async function auth() {
      const { user, error } = await getUser();
      if (!error) {
        return router.push("/home");
      }
    }
    auth();
  }, [router]);
  return <div>{children}</div>;
};

export default loginLayout;
const getUser = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/auth", {
      method: "GET",
    });
    const data = await response.json();
    if (response.status === 200) {
      return { data: data, error: null };
    } else {
      return { data: null, error: err };
    }
  } catch (err) {
    return { data: null, error: err };
  }
};
