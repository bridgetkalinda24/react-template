const InputLog = () => {
    const handleChange = (event) => {
        console.log(event.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Type something..."
            onChange={handleChange}
        />
    );
};

export default InputLog;