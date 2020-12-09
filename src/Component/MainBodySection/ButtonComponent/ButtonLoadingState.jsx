import React,{useState,useEffect} from 'react';
import {Button} from "react-bootstrap"
const simulateNetworkRequest=()=> {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

export const ButtonLoadingState = () => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <Button
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
      className="mt-2"
    >
      {isLoading ? "Loading…" : "Click to load"}
    </Button>
  );
};

