import React from "react";
import { Link } from "react-router-dom";
import basketEmpty from "../../assets/img/basketEmpty.png";

export const BasketEmpty = () => {
  return (
    <div className="cart cart--empty">
      <div className='cart text-block'>
        <h2>
          Корзина пустая <span>😕</span>
        </h2>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу.
          <br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
      </div>
      <img src={basketEmpty} alt="Empty cart" />
      <Link to="/" className="button button--black">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};
