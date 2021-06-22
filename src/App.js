import './App.css';
import ProductsList from './components/ProductsList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
function App() {
  const products = [
    {
      imgSrc:
        "https://s.alicdn.com/@sc01/kf/Hc72f3726c52c459a8c9d68be9cea111eF.jpg_300x300.jpg",
      name: "AirPods",
      price: `6,99 $`,
    },
    {
      imgSrc: `https://s.alicdn.com/@sc01/kf/Hdfd49d641a21425b980735a170a9de89K.jpg_300x300.jpg`,
      name: "Smart watch",
      price: `8,64 $`,
    },
    {
      imgSrc:
        "https://s.alicdn.com/@sc01/kf/H06b8a5528adc413b8f4eeef65d889acfK.jpg_300x300.jpg",
      name: "Iphone 11 ",
      price: `150 $`,
    },
  ];
  const handleAlert=(name)=>{
    alert(`Product is ${name}`)
  }
  return (
    <div className="App">
      <h1>Groupe F1</h1>
<ProductsList produits={products} handleAlert={handleAlert}/>
<Footer total="5000£">
<h4>Good Bye</h4>
<img src="https://mk0kaleelao979sb1ktf.kinstacdn.com/wp-content/uploads/2019/10/goodbuy-in-arabic.jpg" alt="" />
</Footer>
    </div>
  );
}

export default App;
