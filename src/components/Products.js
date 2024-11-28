import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

// Mảng sản phẩm mẫu
const products = [
  {
    id: 1,
    name: "Nồi cơm điện tử Hawonkoo RCH-180",
    price: 2590000,
    description: "Nồi cơm điện chất lượng, tiết kiệm điện năng.",
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
    image:
      "https://yenphat.vn/storage/photos/user_nhuan_content/20231002_cay-nuoc-nong-lanh-kumisai-kms151-WH-1.jpg",
    category: "Cây nước nóng lạnh",
    material: "Cây nước nóng lạnh",
  },
];

// Danh mục sản phẩm
const categories = [
  "Tất cả",
  "Nồi cơm điện",
  "Máy xay sinh tố",
  "Máy hút bụi",
  "Quạt điều hoà",
  "Cây nước nóng lạnh",
];

const bankSuggestions = [
  "Vietcombank",
  "Techcombank",
  "BIDV",
  "VietinBank",
  "ACB",
  "Sacombank",
  "MB Bank",
  "VPBank",
  "Eximbank",
];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [cart, setCart] = useState([]);
  const [userInfo, setUserInfo] = useState({
    name: "",
    address: "",
    paymentMethod: "cash",
    cardNumber: "",
    cardHolderName: "",
    bank: "",
    otherBank: "", // for manually entered bank name
  });

  const checkoutRef = useRef(null);
  const cartRef = useRef(null);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    if (cartRef.current) {
      cartRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleQuantityChange = (productId, quantity) => {
    if (quantity < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === "Tất cả" || product.category === selectedCategory)
    );
  });

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    if (!userInfo.name || !userInfo.address) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    alert(`Đơn hàng của bạn đã được thanh toán thành công!  
      Tổng giá trị: ${getTotalPrice().toLocaleString()} VND
      Phương thức thanh toán: ${
        userInfo.paymentMethod === "cash"
          ? "Thanh toán khi nhận hàng"
          : "Thanh toán bằng thẻ"
      }`);

    setCart([]); // Clear the cart after checkout
    setUserInfo({
      name: "",
      address: "",
      paymentMethod: "cash",
      otherBank: "",
    });
  };

  const scrollToCheckout = (product) => {
    addToCart(product); // Add product to cart before scrolling
    if (checkoutRef.current) {
      checkoutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="products-container">
      <h2 className="section-title">Các Sản Phẩm Nổi Bật</h2>

      {/* Tìm kiếm và phân loại sản phẩm */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      <div className="category-container">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="category-select"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="product-list">
        {filteredProducts.length === 0 ? (
          <p>Không tìm thấy sản phẩm nào.</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-item">
              <div className="product-image">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-img"
                />
              </div>
              <div className="product-details">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>
                  <strong>Giá: {product.price.toLocaleString()} VND</strong>
                </p>
                <button
                  className="buy-button"
                  onClick={() => addToCart(product)}
                >
                  Thêm vào giỏ
                </button>
                <button
                  className="buy-now-button"
                  onClick={() => scrollToCheckout(product)} // Add to cart and go to checkout
                >
                  Đặt hàng ngay
                </button>
                <p>
                  <Link to={`/product/${product.id}`} className="detail-link">
                    Xem chi tiết
                  </Link>
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="cart-summary" ref={cartRef}>
        <h3>Giỏ hàng</h3>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} -{" "}
              <input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  handleQuantityChange(item.id, parseInt(e.target.value))
                }
                min="1"
                className="quantity-input"
              />{" "}
              x {item.price.toLocaleString()} VND
              <button
                className="remove-button"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                Xóa
              </button>
            </li>
          ))}
        </ul>
        <p>
          <strong>Tổng giá trị: {getTotalPrice().toLocaleString()} VND</strong>
        </p>

        <div className="checkout-section" ref={checkoutRef}>
          <h3>Thông tin thanh toán</h3>
          <input
            type="text"
            placeholder="Họ và tên"
            value={userInfo.name}
            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Địa chỉ giao hàng"
            value={userInfo.address}
            onChange={(e) =>
              setUserInfo({ ...userInfo, address: e.target.value })
            }
          />
          <select
            value={userInfo.paymentMethod}
            onChange={(e) =>
              setUserInfo({ ...userInfo, paymentMethod: e.target.value })
            }
          >
            <option value="cash">Thanh toán khi nhận hàng</option>
            <option value="card">Thanh toán bằng thẻ</option>
          </select>

          {/* Hiển thị thông tin thẻ khi chọn thanh toán bằng thẻ */}
          {userInfo.paymentMethod === "card" && (
            <div>
              <input
                type="text"
                placeholder="Số thẻ"
                value={userInfo.cardNumber}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, cardNumber: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Tên chủ thẻ"
                value={userInfo.cardHolderName}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, cardHolderName: e.target.value })
                }
              />
              <select
                value={userInfo.bank}
                onChange={(e) => {
                  setUserInfo({
                    ...userInfo,
                    bank: e.target.value,
                    otherBank: "", // Clear the custom bank if they select a bank
                  });
                }}
              >
                <option value="">Chọn ngân hàng</option>
                {bankSuggestions.map((bank) => (
                  <option key={bank} value={bank}>
                    {bank}
                  </option>
                ))}
                <option value="other">Khác...</option>
              </select>

              {/* Text input for "Other" bank */}
              {userInfo.bank === "other" && (
                <input
                  type="text"
                  placeholder="Nhập tên ngân hàng của bạn"
                  value={userInfo.otherBank}
                  onChange={(e) =>
                    setUserInfo({
                      ...userInfo,
                      otherBank: e.target.value,
                    })
                  }
                />
              )}
            </div>
          )}

          <button onClick={handleCheckout}>Thanh toán</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
