import React from "react";
import s from "./ProductCard.module.sass";
import img from "../../assets/img/card_img_ex.png";
import { FaStarHalf } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const ProductCard = () => {
  return (
    <div className={s.product_card}>
      <div className={s.img}>
        <img src={img} alt="" />
      </div>
      <div className={s.under}>
        <p className={s.text}>T-shirt with Tape Details</p>

        <div className={s.rating}>
          <div className={s.stars}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf />
          </div>
          <div className={s.score}>4.5/5</div>
        </div>

        <div className={s.sale}>
          <div className={s.price}>$80</div>
          <div className={s.old_price}>$100</div>
          <div className={s.discount}>-20%</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
