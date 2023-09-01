import { petData } from "../petData";

// DRY => Don't repeat yourself
const Card = () => {
  // javascript portion

  return (
    <div className="card-container">
      {petData.map((item, index) => {
        return (
          <div key={index} className="card">
            <img className="img" src={item.image} alt={item} />
            <h4>{item.name}</h4>
            <p
              style={{
                color: "green",
                fontSize: 20,
              }}
            >
              {item.description}
            </p>
            <a href={item.link} target="_blank" rel="noreferrer">
              Go to {item.name} site
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
