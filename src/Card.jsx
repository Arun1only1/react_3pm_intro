const petData = [
  {
    name: "Dog",
    description:
      "A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.",
    image:
      "https://www.midwesthomes4pets.com/wp-content/uploads/shutterstock_1335588305.png",

    link: "https://www.youtube.com/watch?v=5amQMh-9ml0",
  },
  {
    name: "Cat",
    description:
      "Cats have very sweet features. It has two beautiful eyes, adorably tiny paws, sharp claws, and two perky ears which are very sensitive to sounds. It has a tiny body covered with smooth fur and it has a furry tail as well. Cats have an adorable face with a tiny nose, a big mouth and a few whiskers under its nose.",
    image: "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg",

    link: "https://www.youtube.com/watch?v=y0sF5xhGreA",
  },
  {
    name: "Horse",
    description:
      "Horses have oval-shaped hooves, long tails, short hair, long slender legs, muscular and deep torso build, long thick necks, and large elongated heads. The mane is a region of coarse hairs, which extends along the dorsal side of the neck in both domestic and wild species.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/de/Nokota_Horses_cropped.jpg",

    link: "https://www.youtube.com/watch?v=y0sF5xhGreA",
  },
];

// DRY => Don't repeat yourself
const Card = () => {
  // javascript portion

  const sum = 2 + 9;
  console.log(sum);

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
