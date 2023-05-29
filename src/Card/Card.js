import React from 'react'
import './Card.css'
import Product from '../Product';


function Card() {
  return (
    <div>
      <div className='Shoping' id='1'>
        <div className='Shoping__item'>
          <div className='Shoping__item__image'>
            <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
          </div>
          <hr />
          <div className='Shoping__item__text'>
            <h2>Fancy Product</h2>
            <h5>$40.00 - $80.00</h5>
          </div>
        </div>
        <div className="Card_Footer">
        <Product />
        </div>
      </div>

      <div className='Shoping' id='2'>
        <div className='sales-icon'>Sale</div>
        <div className='Shoping__item'>
          <div className='Shoping__item__image'>
            <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
          </div>
          <hr />
          <div className='Shoping__item__text'>
            <h2>Special Item</h2>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <h5><span>$20.00</span>
            $18.00</h5>
          </div>
        </div>
        <div className="Card_Footer">
          <a href="#" >Add to cart</a>
        </div>
      </div>

      <div className='Shoping' id='3'>
        <div className='Shoping__item'>
          <div className='Shoping__item__image'>
            <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
          </div>
          <hr />
          <div className='Shoping__item__text'>
            <h2>Sale Item</h2>
            <h5><span>$50.00</span>
            $25.00</h5>
          </div>
        </div>
        <div className="Card_Footer">
          <a href="#" >Add to cart</a>
        </div>
      </div>

      <div className='Shoping' id='4'>
        <div className='Shoping__item'>
          <div className='Shoping__item__image'>
            <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
          </div>
          <hr />
          <div className='Shoping__item__text'>
            <h2>Popular Item</h2>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <h5>$40.00</h5>
          </div>
        </div>
        <div className="Card_Footer">
          <a href="#" >Add to cart</a>
        </div>
      </div>


      <div className='Shoping' id='5'>
        <div className='sales-icon'>Sale</div>
        <div className='Shoping__item'>
          <div className='Shoping__item__image'>
            <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
          </div>
          <hr />
          <div className='Shoping__item__text'>
            <h2>Sale Item</h2>
            <h5><span>$50.00</span>
            $25.00</h5>
          </div>
        </div>
        <div className="Card_Footer">
          <a href="#" >Add to cart</a>
        </div>
      </div>

      <div className='Shoping' id='6'>
        <div className='Shoping__item'>
          <div className='Shoping__item__image'>
            <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
          </div>
          <hr />
          <div className='Shoping__item__text'>
            <h2>Fancy Product</h2>
            <h5>$120.00 - $280.00</h5>
          </div>
        </div>
        <div className="Card_Footer">
          <a href="#" >View Options</a>
        </div>
      </div>

      <div className='Shoping' id='7'>
        <div className='sales-icon'>Sale</div>
        <div className='Shoping__item'>
          <div className='Shoping__item__image'>
            <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
          </div>
          <hr />
          <div className='Shoping__item__text'>
            <h2>Special Item</h2>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <h5><span>$20.00</span>
            $18.00</h5>
          </div>
        </div>
        <div className="Card_Footer">
          <a href="#" >Add to cart</a>
        </div>
      </div>

      <div className='Shoping' id='8'>
        <div className='Shoping__item'>
          <div className='Shoping__item__image'>
            <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
          </div>
          <hr />
          <div className='Shoping__item__text'>
            <h2>Popular Item</h2>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <h5>$40.00</h5>
          </div>
        </div>
        <div className="Card_Footer">
          <a href="#" >Add to cart</a>
        </div>
      </div>

    </div>
  )
}

export default Card;
