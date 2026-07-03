import { useEffect, useState } from "react";
import axios from "axios";
import { ListGroup } from "react-bootstrap";

export const Home = () => {
  const [quotes, setQuotes] = useState([]);
  const [activeQuote, setActiveQuote] = useState(0);

  useEffect(() => {
    async function fetchQuotes() {
      try {
        const response = await axios.get("https://dummyjson.com/quotes");
        setQuotes(response.data.quotes);
      } catch (error) {
        console.log(error);
      }
    }

    fetchQuotes();
  }, []);

  return (
    <div className="text-center">
      <h1 className="mb-4">Trending Quotes</h1>
      <ListGroup>
        {quotes.map((quote, index) => (
          // Active when Hover
          <ListGroup.Item
            active={activeQuote === index}
            key={quote.id}
            onMouseEnter={() => {
              setActiveQuote(index);
            }}
          >
            <div className="blockquote">
              <p>{quote.quote}</p>
              <footer
                className="blockquote-footer"
                style={activeQuote === index ? { color: "white" } : {}}
              >
                {quote.author}
              </footer>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
