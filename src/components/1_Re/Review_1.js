import "../../styles/Menust.css";

export const Review_1 = ({ lunch }) => {
  return (
    <>
      <div className="receipt">
        <h3 className="title">영수증</h3>
        <ul className="text">
          <li>
            {lunch[0].main} <span>{lunch[0].price}원</span>
          </li>
          <li>
            {lunch[1].main} <span>{lunch[1].price}원</span>
          </li>
          <li>
            {lunch[2].main} <span>{lunch[2].price}원</span>
          </li>
          <li>
            {lunch[3].main} <span>{lunch[3].price}원</span>
          </li>
        </ul>
        <div className="total_price">
          총가격
          <span>
            {lunch[0].price + lunch[1].price + lunch[2].price + lunch[3].price}
            원
          </span>
        </div>
      </div>
    </>
  );
};
