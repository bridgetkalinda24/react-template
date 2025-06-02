import React, { useState, useEffect } from "react";

const Joke = () => {
    const [joke, setJoke] = useState(null);

    useEffect(() => {
        fetch("https://official-joke-api.appspot.com/random_joke")
        .then((res) => res.json())
        .then((data) => setJoke(data))
        .catch((error) => console.error("Error fetching joke:", error));
    }, []);

    if (!joke) {
        return <p>Loading joke...</p>;
    }

    return (
        <div className="joke">
            <h2>Joke of the Day:</h2>
            <p><strong>{joke.setup}</strong></p>
            <p>{joke.punchline}</p>
        </div>
    );
};


export default Joke;