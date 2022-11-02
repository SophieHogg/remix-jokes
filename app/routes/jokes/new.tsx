export default function NewJokeRoute() {
    return (
        <div>
            <h2>Add a joke of your own!</h2>
            <form method="post">
                <div>
                    <label>
                        Joke Question:
                        <input type="text" name="question"></input>
                    </label>
                </div>
                <div>
                    <label>
                        Joke Answer: <textarea name="context"></textarea>
                    </label>
                </div>
                <div>
                    <button type="submit" className="button">
                        Submit Joke!
                    </button>
                </div>
            </form>
        </div>
    );
}
