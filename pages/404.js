import React from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Halaman Error</h1>
      <button onClick={() => router.push("/")}>Kembali ke Home</button>
    </div>
  );
};

export default NotFound;
