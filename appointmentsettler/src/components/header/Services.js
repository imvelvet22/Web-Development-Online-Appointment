import ServicesItem from "./ServicesItem";
import { ServicesList } from "./ServicesList";
function Services() {
  return (
    <div className="Services">
      <h1 className="menuTitle">Our Services</h1>
      <div className="ServicesList">
        {ServicesList.map((servicesItem, key) => {
          return (
            <ServicesItem
              key={key}
              image={ServicesItem.image}
              name={ServicesItem.name}
              price={ServicesItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Services;