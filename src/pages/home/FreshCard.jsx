import Button from "../../components/Button";

const FreshCard = () => {
  return (
    <div className="bg-[url('https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/product11-free-img.jpg')] 
    bg-cover bg-bottom rounded-md shadow p-12 flex flex-col gap-4 relative pb-52">
      <h2 className="text-2xl font-bold">Farm Fresh Fruits</h2>
      <p>Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.</p>
      <div>
        <Button icon="arrow-right">SHOP NOW</Button>
      </div>
    </div>
  );
};

export default FreshCard;
