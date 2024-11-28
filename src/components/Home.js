import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Ensure you have the correct import for the CSS

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero">
        <h2>Chào Mừng Đến Với Cửa Hàng Đồ Gia Dụng!</h2>
        <p>
          Chúng tôi cung cấp các sản phẩm gia dụng chất lượng cao cho gia đình
          bạn.
        </p>
        <Link to="/products" className="btn-discover">
          Khám Phá Sản Phẩm
        </Link>
      </div>
      <div className="about-section">
        <h3>Vì sao chọn chúng tôi?</h3>
        <ul>
          <li>Chất lượng đảm bảo</li>
          <li>Giá cả hợp lý</li>
          <li>Giao hàng nhanh chóng</li>
          <li>Hỗ trợ khách hàng 24/7</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
