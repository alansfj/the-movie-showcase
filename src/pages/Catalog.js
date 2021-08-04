import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Catalog = () => {
  const { media_type } = useParams();

  useEffect(() => {}, [media_type]);

  return (
    <div>
      <h2>Catalog</h2>
    </div>
  );
};

export default Catalog;
