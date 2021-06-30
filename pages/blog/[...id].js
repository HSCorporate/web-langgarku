import React from "react";
import { useRouter } from "next/router";

const HalamanDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(router);

  return (
    <div>
      <h1>Ini halaman details</h1>
      <p>{id}</p>
    </div>
  );
};

export default HalamanDetails;
