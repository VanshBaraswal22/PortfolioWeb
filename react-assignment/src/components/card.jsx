import Button from "./Button";

function Card({ title, description }) {

    function handleClick() {
        alert(`You clicked ${title}`);
    }

    return (
        <div className="card">

            <h3>{title}</h3>

            <p>{description}</p>

            <Button
                text="Learn More"
                onClick={handleClick}
            />

        </div>
    );
}

export default Card;