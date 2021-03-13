import React, { useEffect } from 'react'
import {motion} from "framer-motion";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'
import front from '../assets/front.svg';
import book from '../assets/book.svg';
import online from '../assets/online-course.svg'

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <motion.div initial= {{opacity:0, scale: 0.6 }} animate={{opacity:1, scale: 1}} transition= {{duration: 0.6}}>
     
      <Meta />
      
      <motion.div initial={{opacity:0,y:90}} animate={{opacity:1,y:0}} transition={{delay:0.6, duration:0.6,type: "spring", damping: 16, stiffness: 200,}} className="container-fluid m-0 p-4">
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <>
          <div className="row">
          <div className="col">
            <h1 style= {{fontFamily: 'Akaya Telivigala ,cursive',display: 'flex', alignItems:'center',margin: 'auto',height: '500px',width: '500px'}}>
              Learn with more intractivity, and have in person experience <br/>
                and bring the inovation at your finger tip!
                <br/>
                <img src={online} style={{width: "50px",height:"50px"}}></img>
            </h1>
          </div>
            <div className="col">
           <img src={front} style={{display: "flex",alignItems: 'right', margin: 'auto', height: '550px', width: "550px"}}/>
           </div>
           </div>
           <h1>Courses
           <img src={book} style={{width: "50px",height:"50px"}}></img>
           </h1>
            <Row>
              {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={3} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
            <Paginate
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ''}
            />
           
          </>
        )}
      </motion.div>
    </motion.div>
  )
}

export default HomeScreen
