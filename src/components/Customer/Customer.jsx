import React from "react";
import s from "./Customer.module.sass";
import { FaStar } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

const Customer = () => {
  return (
        <div className={s.box}>
          <div className={s.stars}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className={s.review}>
              <div className={s.user}>
                <div className={s.name}>Sarah M.</div> <FaCheckCircle className={s.icon} />
              </div>
              <div className={s.text}>
                "I'm blown away by the quality and style of the clothes I received
                from Shop.co. From casual wear to elegant dresses, every piece I've
                bought has exceeded my expectations.”
              </div>
          </div>
      </div>
  );
};

export default Customer;
