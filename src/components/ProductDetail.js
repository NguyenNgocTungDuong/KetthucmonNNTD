import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetail.css";

const products = [
  {
    id: 1,
    name: "Nồi cơm điện tử Hawonkoo RCH-180",
    price: 2590000,
    description: "Nồi cơm điện chất lượng, tiết kiệm điện năng.",
    detailedDescription:
      "Nồi cơm điện tử Hawonkoo RCH-180 với công nghệ cảm ứng tiên tiến, giúp nấu cơm nhanh chóng và tiết kiệm điện năng. Dung tích 1.8L, phù hợp cho gia đình từ 3-5 người. Bên ngoài nồi được làm bằng chất liệu chống dính, dễ vệ sinh.",
    image:
      "https://hawonkoo.vn/medias/thumbs/74/images-2023-10-1-58-1600x0.png.webp",
    category: "Nồi cơm điện",
    material: "Nồi cơm điện",
  },
  {
    id: 2,
    name: "Nồi cơm điện tử Hitachi 1.8 lít RZ-S18VN",
    price: 2250000,
    description: "Thiết kế nhỏ gọn hiện đại, màu đen sang trọng",
    detailedDescription:
      "Nồi cơm điện tử Hitachi RZ-S18VN với công nghệ nấu thông minh, giúp cơm chín đều và mềm. Nồi có dung tích 1.8L, với thiết kế sang trọng màu đen, dễ dàng sử dụng và vệ sinh. Có nhiều chế độ nấu cơm tiện dụng cho từng nhu cầu.",
    image:
      "https://dienmaybanre.com/images/products/2024/06/07/large/noi-com-dien-tu-18-lit-hitachi-rz-s18vn_1717732034.webp",
    category: "Nồi cơm điện",
    material: "Nồi cơm điện",
  },
  {
    id: 3,
    name: "Nồi cơm điện Toshiba RC-5XT",
    price: 4800000,
    description: "Thiết kế nhỏ gọn hiện đại, màu đen sang trọng",
    detailedDescription:
      "Nồi cơm điện Toshiba RC-5XT với công nghệ nấu cơm 3D, giúp cơm chín đều và giữ được độ nóng lâu. Dung tích 1.8L, phù hợp cho gia đình 4-6 người. Thiết kế sang trọng với chất liệu chống dính, dễ vệ sinh và sử dụng.",
    image:
      "https://product.hstatic.net/200000163537/product/noi-com-dien-toshiba-rc-5xt-w-1_6ed07a73e0364696b3e8c4242a42e10e_grande.jpeg",
    category: "Nồi cơm điện",
    material: "Nồi cơm điện",
  },
  {
    id: 4,
    name: "Máy xay sinh tố đa năng Wmf Kult Pro",
    price: 2950000,
    description: "Máy xay sinh tố với công suất mạnh mẽ, dễ sử dụng.",
    detailedDescription:
      "Máy xay sinh tố Wmf Kult Pro với công suất mạnh mẽ 1200W, giúp xay nhuyễn các loại thực phẩm cứng một cách dễ dàng. Thiết kế sang trọng, với cối xay bằng thủy tinh bền chắc, dễ dàng vệ sinh sau khi sử dụng. Máy có nhiều chế độ xay cho bạn lựa chọn.",
    image:
      "https://www.beplephan.com/wp-content/uploads/May-Xay-Sinh-To-Da-Nang-WMF-Kult-Pro-500x500.jpg.webp",
    category: "Máy xay sinh tố",
    material: "Máy xay sinh tố",
  },
  {
    id: 5,
    name: "Máy xay sinh tố Ninja SS151 TWISTi Blender DUO",
    price: 5900000,
    description: "Thiết kế mạnh mẽ vững chắc, kết cấu cứng cáp.",
    detailedDescription:
      "Máy xay sinh tố Ninja SS151 TWISTi Blender DUO được trang bị động cơ mạnh mẽ 1000W, giúp xay mịn các loại thực phẩm từ trái cây, rau củ cho đến đá. Máy có thiết kế hiện đại và chắc chắn, đi kèm với 2 cối xay lớn và nhỏ, tiện lợi cho nhiều mục đích sử dụng.",
    image:
      "https://product.hstatic.net/200000522611/product/71n5rxh8h7l._ac_sl1500__09f76e8bdb7744f9848c13999c985d25_1024x1024.jpg",
    category: "Máy xay sinh tố",
    material: "Máy xay sinh tố",
  },
  {
    id: 6,
    name: "Máy xay sinh tố Braun MX2050",
    price: 2990000,
    description: "Thiết kế mạnh mẽ vững chắc, kết cấu cứng cáp.",
    detailedDescription:
      "Máy xay sinh tố Braun MX2050 với công suất 600W và cối xay bằng nhựa bền chắc. Máy có nhiều chức năng, dễ dàng sử dụng cho nhiều loại thực phẩm như trái cây, rau củ và thậm chí là xay đá. Thiết kế nhỏ gọn, dễ dàng vệ sinh.",
    image:
      "https://alobuy.vn/uploads/products/500/may-xay-sinh-to-braun-mx2050-1.jpg",
    category: "Máy xay sinh tố",
    material: "Máy xay sinh tố",
  },
  {
    id: 7,
    name: "Máy hút bụi có dây BGS21WX100",
    price: 4060000,
    description: "Máy hút bụi mạnh mẽ, dễ dàng sử dụng trong mọi không gian.",
    detailedDescription:
      "Máy hút bụi có dây BGS21WX100 với công suất 700W, giúp hút bụi hiệu quả trong mọi không gian. Máy được trang bị bộ lọc HEPA, giúp làm sạch không khí và ngăn ngừa vi khuẩn, đảm bảo không gian sống luôn sạch sẽ.",
    image:
      "https://ctluxhome.vn/resize/745/san-pham/may-hut-bui/bgs21wx100/thumnail_bgs21wx100_2000x2000x745x4.jpg",
    category: "Máy hút bụi",
    material: "Máy hút bụi",
  },
  {
    id: 8,
    name: "Máy hút bụi BOSCH BGS21WPOW",
    price: 4990000,
    description: "Máy hút bụi mạnh mẽ, dễ dàng sử dụng trong mọi không gian.",
    detailedDescription:
      "Máy hút bụi BOSCH BGS21WPOW được thiết kế với công suất cao 850W, giúp hút sạch bụi bẩn trong không gian sống. Đặc biệt, máy còn có bộ lọc HEPA, giúp làm sạch không khí và loại bỏ các hạt bụi nhỏ nhất.",
    image:
      "https://bepeu.vn/wp-content/uploads/2024/03/anh-may-hut-bui-Bosch-BGS21WPOW.jpg",
    category: "Máy hút bụi",
    material: "Máy hút bụi",
  },
  {
    id: 9,
    name: "Máy hút bụi không dây HOSOME CORDLESS VACUUM CLEANER ",
    price: 4800000,
    description: "Máy hút bụi mạnh mẽ, dễ dàng sử dụng trong mọi không gian.",
    detailedDescription:
      "Máy hút bụi không dây HOSOME CORDLESS VACUUM CLEANER giúp bạn dễ dàng di chuyển và hút bụi trong các khu vực khó tiếp cận. Công suất mạnh mẽ cùng thiết kế nhỏ gọn, tiện lợi cho việc sử dụng trong mọi không gian sống.",
    image:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/239/697/products/61iqpqtwvll-ac-sl1500.jpg?v=1579683646207",
    category: "Máy hút bụi",
    material: "Máy hút bụi",
  },
  {
    id: 10,
    name: "Máy hút bụi đa năng CVC-AME1410UG ",
    price: 8990000,
    description: "Máy hút bụi mạnh mẽ, dễ dàng sử dụng trong mọi không gian.",
    detailedDescription:
      "Máy hút bụi đa năng CVC-AME1410UG được thiết kế với công suất lớn 2000W, có thể hút sạch mọi bụi bẩn trong không gian sống, bao gồm cả những bụi mịn và vi khuẩn. Máy đi kèm với nhiều phụ kiện tiện dụng giúp bạn vệ sinh các khu vực khó tiếp cận.",
    image:
      "https://cuckoovina.com/wp-content/uploads/2023/09/CW_CVC-AME1410UG-600x600.jpg",
    category: "Máy hút bụi",
    material: "Máy hút bụi",
  },
  {
    id: 11,
    name: "Quạt Điều Hoà Hơi Nước Canaval Model CA-160",
    price: 5680000,
    description: "Quạt điều hoà mát lạnh, tiết kiệm điện, 3 chế độ gió.",
    detailedDescription:
      "Quạt điều hoà Canaval CA-160 với công nghệ làm mát nhanh chóng, tiết kiệm điện và thân thiện với môi trường. Quạt có ba chế độ gió giúp bạn lựa chọn theo nhu cầu sử dụng, phù hợp cho mùa hè oi ả.",
    image:
      "https://canaval.com.vn/wp-content/uploads/2022/03/quat-1-600x800.jpg",
    category: "Quạt điều hoà",
    material: "Quạt điều hoà",
  },
  {
    id: 12,
    name: "Quạt điều hòa – máy làm mát không khí Sunhouse SHD7727",
    price: 3100000,
    description: "Quạt điều hoà mát lạnh, tiết kiệm điện, 3 chế độ gió.",
    detailedDescription:
      "Quạt điều hòa Sunhouse SHD7727 với thiết kế nhỏ gọn, dễ dàng di chuyển và tiết kiệm điện năng. Máy có ba chế độ gió mát giúp làm mát nhanh chóng, phù hợp với không gian phòng từ 20-30m2.",
    image:
      "https://sunhouseviet.com/wp-content/uploads/2021/07/quat-dieu-hoa-may-lam-mat-khong-khi-sunhouse-shd7727.jpg",
    category: "Quạt điều hoà",
    material: "Quạt điều hoà",
  },
  {
    id: 13,
    name: "Quạt điều hòa Boss S106",
    price: 6290000,
    description: "Quạt điều hoà mát lạnh, tiết kiệm điện, 3 chế độ gió.",
    detailedDescription:
      "Quạt điều hòa Boss S106 với khả năng làm mát nhanh chóng và tiết kiệm điện. Quạt có ba chế độ gió khác nhau và chế độ làm mát tự động, giúp bạn dễ dàng tận hưởng không khí mát lạnh trong mùa hè nóng bức.",
    image:
      "https://quatviet.net/wp-content/uploads/2023/04/quat-dieu-hoa-boss-s106-thai-lan-ava.jpg",
    category: "Quạt điều hoà",
    material: "Quạt điều hoà",
  },
  {
    id: 14,
    name: "Cây Nước Nóng Lạnh CNC CNC816HC",
    price: 7290000,
    description:
      "Cây nước nóng lạnh siêu tiết kiệm điện, an toàn cho gia đình.",
    detailedDescription:
      "Cây nước nóng lạnh CNC CNC816HC thiết kế sang trọng với chức năng làm nóng và làm lạnh nhanh chóng. Máy tiết kiệm điện và dễ dàng sử dụng, phù hợp cho gia đình, văn phòng và các không gian cần nước nóng hoặc lạnh.",
    image:
      "https://bizweb.dktcdn.net/100/442/590/products/cay-nuoc-nong-lanh-cnc816hc-harlem-production-1.png",
    category: "Cây nước nóng lạnh",
    material: "Cây nước nóng lạnh",
  },
  {
    id: 15,
    name: "Cây nước nóng lạnh Coex CW-7116A",
    price: 3990000,
    description:
      "Cây nước nóng lạnh siêu tiết kiệm điện, an toàn cho gia đình.",
    detailedDescription:
      "Cây nước nóng lạnh Coex CW-7116A với thiết kế nhỏ gọn, dễ dàng sử dụng trong mọi không gian. Máy có khả năng làm nóng và làm lạnh nhanh chóng, giúp bạn có nước nóng cho trà, cà phê hay nước lạnh cho mùa hè.",
    image:
      "https://bizweb.dktcdn.net/100/435/502/products/caynucnonglnhcoexcw7116ab94e02.jpg?v=1656553588087",
    category: "Cây nước nóng lạnh",
    material: "Cây nước nóng lạnh",
  },
  {
    id: 16,
    name: "Cây nước nóng lạnh Kumisai KMS151-WH",
    price: 6590000,
    description:
      "Cây nước nóng lạnh siêu tiết kiệm điện, an toàn cho gia đình.",
    detailedDescription:
      "Cây nước nóng lạnh Kumisai KMS151-WH thiết kế hiện đại, làm nóng và làm lạnh nhanh chóng, tiết kiệm điện. Máy có tính năng tự động ngắt khi đạt nhiệt độ cài đặt, an toàn cho người sử dụng.",
    image:
      "https://yenphat.vn/storage/photos/user_nhuan_content/20231002_cay-nuoc-nong-lanh-kumisai-kms151-WH-1.jpg",
    category: "Cây nước nóng lạnh",
    material: "Cây nước nóng lạnh",
  },
];

const ProductDetail = () => {
  const { id } = useParams(); // Get the product id from the URL
  const navigate = useNavigate(); // Hook to navigate to another route

  const product = products.find((p) => p.id === parseInt(id));

  // Handle the back button action
  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  if (!product) {
    return <div className="error-message">Không tìm thấy sản phẩm</div>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail-content">
        <div className="product-image">
          <img
            src={product.image}
            alt={product.name}
            className="product-detail-img"
          />
        </div>
        <div className="product-info">
          <h2 className="product-title">{product.name}</h2>
          <p className="product-price">
            <strong>Giá: {product.price.toLocaleString()} VND</strong>
          </p>
          <p className="product-description">{product.description}</p>
          <p className="product-detailed-description">
            <strong>Mô tả chi tiết: </strong>
            {product.detailedDescription}
          </p>
        </div>
      </div>

      {/* Back button in the top corner */}
      <button className="back-button" onClick={handleBack}>
        Quay lại
      </button>
    </div>
  );
};

export default ProductDetail;
