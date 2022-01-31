import React, { useState, useEffect, useContext } from "react";
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import ProductLayout from "./components/productLayout";
import { useNavigate } from "react-router-dom"
import CircularProgress from '@mui/material/CircularProgress';
import { CounterContext } from './contex/productprovider'
import Slider from '@mui/material/Slider';
function Products(props) {
  const { store,count } = useContext(CounterContext);
  const [show, setShow] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const navigate = useNavigate();
  var [search, setSearch] = useState('');
  var [search2, setSearch2] = useState('');
  var [selectedValue] = useState('');
  const [sort, setsort] = useState()
  const [sortdata, setsortdata] = useState([])
  console.log(selectedValue)
  var [productsList, setProductsList] = useState([]);
  const[showdata,setshowdata]=useState(false)
  useEffect(() => {
    Axios.get("https://fakestoreapi.com/products").then(res => {
      setProductsList(res.data);
        setshowdata(true)
    });
    if (sort === "sortZtoA") {
      setsortdata([...productsList].sort((a, b) => (a.title > b.title) ? -1 : 1))
    } else if (sort === "sortAtoZ") {
      setsortdata([...productsList].sort((a, b) => (a.title < b.title) ? -1 : 1))

    } else if (sort === "sortLtoH") {
      setsortdata([...productsList].sort((a, b) => (parseFloat(a.price) - parseFloat(b.price))))

    } else if (sort === "sortHtoL") {
      setsortdata([...productsList].sort((a, b) => (parseFloat(b.price) - parseFloat(a.price))))

    } else { setsortdata(productsList) }
  }, [sort, productsList]);
  const ProductClick = (productsList) => {
  
    console.log(productsList.id)
    navigate('/productdetails', {
      state: {
        productid: productsList.id,
        productTitle: productsList.title,
        productPrice: productsList.price,
        productDescription: productsList.description,
        productCategory: productsList.category,
        productImage: productsList.image,
        productRate: productsList.rating.rate,
        productCount: productsList.rating.count
      }
    })
  }
  const handleClick = () => {
    setShow(!show);
  };
  const handleClick2 = () => {
    setShow2(!show2);
  };
  console.log(sort)
  const [selectedMens, setselectedMens] = useState('xx');
  const [selectedJewwel, setselectedJewwel] = useState('xx');
  const [selectedelevtro, setselectedelevtro] = useState('xx');
  const [selectedwomen, setselectedwomen] = useState('xx');
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(false)
  const [checked3, setChecked3] = useState(false)
  const [checked4, setChecked4] = useState(false)
  useEffect(() => {
    if (checked1 === false) {
      setselectedMens('xx')
    }
    if (checked2 === false) {
      setselectedJewwel('xx')
    }
    if (checked3 === false) {
      setselectedelevtro('xx')
    }
    if (checked4 === false) {
      setselectedwomen('xx')
    }
  })
  const handleClick1 = () => setChecked1(!checked1)
  const handleClick21 = () => setChecked2(!checked2)
  const handleClick3 = () => setChecked3(!checked3)
  const handleClick4 = () => setChecked4(!checked4)
  useEffect(() => {
    setSearch(selectedMens + selectedJewwel + selectedelevtro + selectedwomen)
  })
  console.log(search2)
  const [startValue, setstartValue] = React.useState(0);
  const [endValue, setendValue] = React.useState(1000);
  const [sortProduct, setsortProduct] = useState([])
  useEffect(() => {
    setsortProduct(sortdata.filter(val => {
      for (var j = startValue; j <= endValue; j++) {
        if (j === parseInt(val.price)) {
          return val;
        }
      }
    }))
  },[sortdata])
  return (
    <div className="margin ">
      <div className="d-flex align-items-start ">
        <div className="nav flex-column nav-pills me-3 " id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <div className="left-siedebar">
            <div className="product-tab " id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
              <div className="category-btn btn-none" >
                Category
              </div>
              <div className="sub-category ">
                <ul>
                  <li className='flex'><input className="form-check-input" onClick={handleClick1} checked={checked1} type="checkbox" value="men's clothing" onChange={(e) => setselectedMens(e.target.value)} /><div class="ms-1">men's clothing</div></li>
                  <li className='flex'><input className="form-check-input" onClick={handleClick21} checked={checked2} type="checkbox" value="jewelery" onChange={(e) => setselectedJewwel(e.target.value)} /><div class="ms-1">jewelery</div></li>
                  <li className='flex'><input className="form-check-input" onClick={handleClick3} checked={checked3} type="checkbox" value="electronics" onChange={(e) => setselectedelevtro(e.target.value)} /><div class="ms-1">electronics</div></li>
                  <li className='flex'><input className="form-check-input" onClick={handleClick4} checked={checked4} type="checkbox" value="women's clothing" onChange={(e) => setselectedwomen(e.target.value)} /><div class="ms-1">women's clothing</div></li>
                </ul>
              </div>
              <div className="category-btn btn-none" >
                Rating
              </div>
              <div className="sub-category">
                <select className="product-catg" type="text" value={search} onChange={(e) => setSearch2(e.target.value)} multiple>
                  <option type="checkbox" value="">All</option>
                  <option type="checkbox" value="4.">between 4.0 to 4.9</option>
                  <option type="checkbox" value="3.">between 3.0 to 3.9</option>
                  <option type="checkbox" value="2.">between 2.0 to 2.9</option>
                  <option type="checkbox" value="1.">between 1.0 to 1.9</option>
                </select>
              </div>
              <div className="category-btn btn-none" >
                Sorting
              </div>
              <div className="sub-category ">
                <ul>
                  <li className='flex'>
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="sortZtoA" onChange={(e) => setsort(e.target.value)} />
                    <div className="ms-1">
                      Sort by Z to A
                    </div>
                  </li>
                  <li className='flex'>
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="sortAtoZ" onChange={(e) => setsort(e.target.value)} />
                    <div className="ms-1">
                      Sort by A to Z
                    </div>
                  </li>
                </ul>
              </div>
              <div className="sub-category ">
                <ul>
                  <li className='flex'>
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="sortLtoH" onChange={(e) => setsort(e.target.value)} />
                    <div className="ms-1">
                      Sort by low to high
                    </div>
                  </li>
                  <li className='flex'>
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="sortHtoL" onChange={(e) => setsort(e.target.value)} />
                    <div className="ms-1">
                      Sort by high to low
                    </div>
                  </li>
                </ul>
              </div>
              <div className="category-btn btn-none mt-2" >
                Sort by Price
              </div>
              <div className="sub-category mt-2 flex">
              <select className="" type="text" value={startValue} onChange={(e) => setstartValue(e.target.value)} >
                  <option  value="0">0</option>
                  <option  value="100">100</option>
                  <option  value="200">200</option>
                  <option  value="300">300</option>
                  <option  value="400">400</option>
                  <option  value="500">500</option>
                </select>
                <div className="ms-21">To</div>
                <select className="" type="text" value={endValue} onChange={(e) => setendValue(e.target.value)} >
                  <option  value="600">600</option>
                  <option  value="700">700</option>
                  <option  value="800">800</option>
                  <option  value="900">900</option>
                  <option  value="1000">1100</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-content" id="v-pills-tabContent">
          <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
            <div>
              {(!showdata) ? <div className="loading"> <CircularProgress /></div>:<div className="products-body row">
                {sortProduct.filter(val => {
                  if (search === "xxxxxxxx" && search2 === "") {
                    return val;

                  } else if (search !== "xxxxxxxx" || search2 !== "") {
                    if (search !== "xxxxxxxx") {
                      return val.category.toLowerCase().includes(selectedMens.toLowerCase()) ||
                        val.category.toLowerCase().includes(selectedJewwel.toLowerCase()) ||
                        val.category.toLowerCase().includes(selectedelevtro.toLowerCase()) ||
                        val.category.toLowerCase().includes(selectedwomen.toLowerCase())
                    } else if (search2 !== "") {
                      return val.rating.rate.toString().includes(search2.toString())
                    }
                  } else if (search !== "xxxxxxxx" && search2 !== "") {
                    return val.category.toLowerCase().includes(selectedMens.toLowerCase()) ||
                      val.category.toLowerCase().includes(selectedJewwel.toLowerCase()) ||
                      val.category.toLowerCase().includes(selectedelevtro.toLowerCase()) ||
                      val.category.toLowerCase().includes(selectedwomen.toLowerCase()) && val.rating.rate.toString().includes(search2.toString())
                  }
                }).map((productsList) =>
                  <ProductLayout
                    productimg={<img src={productsList.image} alt="avatar" />}
                    producttitle={productsList.title}
                    productid={productsList.id}
                    productprice={productsList.price}
                    productrating={productsList.rating.rate}
                    onClick={() => store(productsList)}
                    productCategory={productsList.category}
                    clickfunction={() => ProductClick(productsList)}
                  />
                )}
              </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Products;
