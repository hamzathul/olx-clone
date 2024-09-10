import React,{useState,useEffect, useContext} from 'react';

import Heart from '../../assets/Heart';
import './Post.css';
import { FirebaseContext } from '../../store/Context';

function Posts() {
const {firestore} = useContext(FirebaseContext)
const [products, setProducts] = useState([])
useEffect(() => {
  const fetchData = async () => {
    
      // Fetch the collection
      const snapshot = await firestore.collection('products').get();

      // Map the documents to an array of post objects and log each step
      const allPost = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          ...data,
          id: doc.id
        };
      });

      // console.log("All Posts:", allPost);

      // Update state with fetched data
      setProducts(allPost);
    
  };

  fetchData();
}, [firestore]);

// useEffect(()=>{
//   firestore.collection('products').get().then((snapshot)=>{
//     const allPost = snapshot.docs.map((product)=>{
//       return{
//         ...product.data,
//         id:product.id

//       }
//     })
//     console.log(allPost)
//   })
// },[])
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">

          {products.map(product=>{
            return <div
            className="card"
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>Tue May 04 2021</span>
            </div>
          </div>

          })
            }

        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
