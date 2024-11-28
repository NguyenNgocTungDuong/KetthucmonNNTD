import React from "react";
import "./About.css"; // Nhớ tạo file About.css để thêm kiểu dáng

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h2>Giới Thiệu Về Cửa Hàng</h2>
        <p className="about-subtitle">
          Cửa hàng Đồ Gia Dụng chuyên cung cấp các sản phẩm gia dụng chất lượng
          cao
        </p>
      </div>
      <div className="about-content">
        <p>
          Chúng tôi cung cấp một loạt các sản phẩm, từ các thiết bị nhà bếp hiện
          đại cho đến các sản phẩm tiện ích cho gia đình. Mục tiêu của chúng tôi
          là mang đến cho bạn những sản phẩm tiện dụng, chất lượng và đáng tin
          cậy.
        </p>
        <p>
          Chúng tôi cam kết mang đến sự hài lòng tuyệt đối cho khách hàng thông
          qua dịch vụ chăm sóc khách hàng tận tâm và các sản phẩm đáng tin cậy.
          Chọn chúng tôi là sự lựa chọn thông minh cho gia đình bạn.
        </p>
      </div>
    </div>
  );
};

export default About;
