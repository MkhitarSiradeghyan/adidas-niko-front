import React from "react";
import s from "./Subscribe.module.sass";
import Container from "../Container/Container";

const Subscribe = () => {
  return (
    <div className={s.subscribe}>
      <Container>
        <div className={s.wrap}>
          <div className={s.text}>Stay upto date about our latest offers</div>
          <form className={s.form}>
            <input placeholder="🖂 Enter your email address" type="email" className={s.input} />
            <button type="submit" className={s.button}>Subscribe to Newspaper</button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Subscribe;
