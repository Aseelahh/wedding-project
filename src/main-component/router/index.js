import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Homepage from '../HomePage'
import Homepage2 from '../HomePage2'
import HomePage3 from '../HomePage3';
import HomePage4 from '../HomePage4';
import HomePage5 from '../HomePage5';
import HomePage6 from '../HomePage6';
import TeamSinglePage from '../TeamSinglePage'
import AboutPage from '../AboutPage'
import StoryPage from '../StoryPage'
import AccomodationPage from '../AccomodationPage'
import RSVPPage from '../RSVPPage'
import GalleryPage from '../GalleryPage'
import PlannerPage from '../PlannerPage'
import BrideGroomPage from '../BrideGroomPage'
import PortfolioGridPage from '../PortfolioGridPage'
import PortfolioMasonaryPage from '../PortfolioMasonaryPage'
import ShopPage from '../ShopPage'
import CheckoutPage from '../CheckoutPage'
import CartPage from '../CartPage'
import OrderRecived from '../OrderRecived'
import ProjectSinglePage from '../ProjectSinglePage'
import BlogPage from '../BlogPage'
import BlogPageLeft from '../BlogPageLeft'
import BlogPageFullwidth from '../BlogPageFullwidth'
import BlogDetails from '../BlogDetails'
import BlogDetailsFull from '../BlogDetailsFull'
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide'
import ErrorPage from '../ErrorPage'
import ContactPage from '../ContactPage'
import ProductSinglePage from '../ProductSinglePage'
import ServicePage from '../ServicePage'
import SeviceSinglePage from '../SeviceSinglePage'
import PricingPage from '../PricingPage'
import ComingSoonPage from '../ComingSoonPage'
import LoginPage from '../LoginPage'
import SignUpPage from '../SignUpPage'
import ForgotPassword from '../ForgotPassword'

const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='home' element={<Homepage/>} />
          <Route path='home2' element={<Homepage2/>} />
          <Route path='home3' element={<HomePage3/>} />
          <Route path='home4' element={<HomePage4/>} />
          <Route path='home5' element={<HomePage5/>} />
          <Route path='home6' element={<HomePage6/>} />
          <Route path='cart' element={<CartPage/>} />
          <Route path='about' element={<AboutPage/>} />
          <Route path='story' element={<StoryPage/>} />
          <Route path='accomodation' element={<AccomodationPage/>} />
          <Route path='rsvp' element={<RSVPPage/>} />
          <Route path='gallery' element={<GalleryPage/>} />
          <Route path='planner' element={<PlannerPage/>} />
          <Route path='groom-bride' element={<BrideGroomPage/>} />
          <Route path='pricing' element={<PricingPage/>} />
          <Route path='coming' element={<ComingSoonPage/>} />
          <Route path='portfolio-grid' element={<PortfolioGridPage/>} />
          <Route path='portfolio-masonary' element={<PortfolioMasonaryPage/>} />
          <Route path='shop' element={<ShopPage/>} />
          <Route path='service' element={<ServicePage/>} />
          <Route path='checkout' element={<CheckoutPage/>} />
          <Route path='order_received' element={<OrderRecived/>} />
          <Route path='product-single/:id' element={<ProductSinglePage/>} />
          <Route path='team-single/:id' element={<TeamSinglePage/>} />
          <Route path='project-single/:id' element={<ProjectSinglePage/>} />
          <Route path='service-single/:id' element={<SeviceSinglePage/>} />
          <Route path='404' element={<ErrorPage/>} />
          <Route path='contact' element={<ContactPage/>} />
          <Route path='blog-single/:id' element={<BlogDetails/>} />
          <Route path='blog-single-left-sidebar/:id' element={<BlogDetailsLeftSiide/>} />
          <Route path='blog-single-fullwidth/:id' element={<BlogDetailsFull/>} />
          <Route path='blog' element={<BlogPage/>} />
          <Route path='blog-left-sidebar' element={<BlogPageLeft/>} />
          <Route path='blog-fullwidth' element={<BlogPageFullwidth/>} />
          <Route path='login' element={<LoginPage/>} />
          <Route path='register' element={<SignUpPage/>} />
          <Route path='forgot-password' element={<ForgotPassword/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
