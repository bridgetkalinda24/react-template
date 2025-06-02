const Recipe = ({ title, type, duration }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>Type: {type}</p>
            <p>Duration: {duration} mins</p>
        </div>
    );
};

export default Recipe;