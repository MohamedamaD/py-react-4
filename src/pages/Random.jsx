import axios from "axios";
import { useState } from "react";
import { Button, ListGroup } from "react-bootstrap";

export function Random() {
  const [random, setRandom] = useState(null);

  async function fetchRandom() {
    try {
      const response = await axios.get("https://dummyjson.com/quotes/random");
      setRandom(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {random && (
        <ListGroup className="mb-4">
          <ListGroup.Item> Author: {random.author}</ListGroup.Item>
          <ListGroup.Item> Quote: {random.quote}</ListGroup.Item>
        </ListGroup>
      )}
      <Button
        className="w-100"
        variant="success"
        size="lg"
        onClick={fetchRandom}
      >
        Generate a Random Quote
      </Button>
    </div>
  );
}
