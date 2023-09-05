import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Please Check Out our Expertise !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/img-1.jpg'
              text='We Create Approaching and Interactive Websites as per the Customer Need'
              label='Web Development'
              path='/services'
            />
            <CardItem
              src='/images/des1.jpg'
              text='We Build Marketing Strategies for our Customers with Social Media '
              label='Social Media Marketing'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/img-1.jpg'
              text='Involves crafting compelling and concise ad copy that drives clicks, engagement, and conversions.'
              label='PayPerClick'
              path='/services'
            />
            <CardItem
             src='/images/img-1.jpg'
              text='SEO for website content involves a holistic approach that combines keyword research, valuable content creation, technical optimization, promotion, and link building.'
              label='Search Engine Optimisation'
              path='/products'
            />
            <CardItem
              src='/images/img-1.jpg'
              text='We software applications designed to run on mobile devices such as smartphones and tablets.'
              label='Mobile App Development'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;