// Importing product images
import p1_img from './product-1.jpg';
import p2_img from './product-2.jpg';
import p3_img from './product-3.jpg';
import p4_img from './product-4.jpg';
import p5_img from './product-5.jpg';
import p6_img from './product-6.jpg';
import p7_img from './product-7.jpg';
import p8_img from './product-8.jpg';
import p9_img from './product-9.jpg';
import p10_img from './product-10.jpg';
import p11_img from './product-11.jpg';
import p12_img from './product-12.jpg';

import p1_side from "./gallery-2.jpg"
import p1_front from "./gallery-1.jpg"
import p1_back from "./gallery-3.jpg"
import p1_full from "./gallery-4.jpg"

// Combining both feature and latest products into one array
let total_products = [
  {
    id: 1,
    name: "Red Printed T-Shirt",
    image: p1_img,
    new_price: 50.00,
    front:p1_front,
    side:p1_side,
    back:p1_back,
    full:p1_full
  },
  {
    id: 2,
    name: "HRX Sports Shoes",
    image: p2_img,
    new_price: 75.00,
  },
  {
    id: 3,
    name: "HRX Gray Trackpants",
    image: p3_img,
    new_price: 45.00,
  },
  {
    id: 4,
    name: "Blue Printed T-Shirt",
    image: p4_img,
    new_price: 55.00,
  },
  {
    id: 5,
    name: "Puma Gray Sports Shoes",
    image: p5_img,
    new_price: 95.00,
  },
  {
    id: 6,
    name: "Black Printed T-Shirt",
    image: p6_img,
    new_price: 55.00,
  },
  {
    id: 7,
    name: "HRX Set of 3 Socks",
    image: p7_img,
    new_price: 30.00,
  },
  {
    id: 8,
    name: "Black Fossil Watch",
    image: p8_img,
    new_price: 120.00,
  },
  {
    id: 9,
    name: "Black Sportx Watch",
    image: p9_img,
    new_price: 135.00,
  },
  {
    id: 10,
    name: "Black HRX Shoes",
    image: p10_img,
    new_price: 50.00,
  },
  {
    id: 11,
    name: "Gray Niko Shoes",
    image: p11_img,
    new_price: 55.00,
  },
  {
    id: 12,
    name: "HRX Black Trackpants",
    image: p12_img,
    new_price: 75.00,
  },
];

export default total_products;
