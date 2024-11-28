import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Đảm bảo rằng bạn đã tạo file CSS để sử dụng styles

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <h1>Thế Giới Đồ Gia Dụng</h1>
      </div>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-item">
              Trang Chủ
            </Link>
          </li>
          <li>
            <Link to="/products" className="nav-item">
              Sản Phẩm
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-item">
              Giới Thiệu
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-item">
              Liên Hệ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
