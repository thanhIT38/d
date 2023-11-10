// Lấy danh sách tất cả các hình ảnh trong phần tử có class "slide"
const images = document.querySelectorAll('.wrapper_img img');

// Khởi tạo biến để lưu trữ giá trị hiện tại của margin-top
let currentMarginTop = 0;
let currentMarginBottom =740;
let currentIndex=0;
// Lặp qua từng hình ảnh và thay đổi giá trị margin-top
images.forEach((image, index) => {
  // Lấy giá trị hiện tại của margin-top (nếu có)
  const currentMarginTopValue = parseFloat(window.getComputedStyle(image).marginTop) || 0;

  // Kiểm tra xem hình ảnh thuộc vào 3 ảnh đầu hay 3 ảnh sau
  if (index <= 3) {

    // Tăng giá trị margin-top lên 5 cho 3 ảnh đầu
    image.style.marginTop = `${currentMarginTopValue + currentMarginTop}px`;
  }
  
  else{

    // Giảm giá trị margin-top xuống 5 cho 3 ảnh sau
    image.style.marginTop = `${currentMarginTopValue + currentMarginBottom}px`;
  }

  currentMarginBottom -=120;
  // Tăng giá trị hiện tại thêm 5 để chu kỳ tiếp theo tăng/giảm tiếp
  currentMarginTop += 120;
});
var imageList = [
  './asset/img/bún bò.jpg',
  './asset/img/nem3.jpg',
  './asset/img/súp lươn 1.jpg',
  './asset/img/bánh căn.jpg',
  './asset/img/cao lầu.jpg',
  './asset/img/bột lọc 2.jpg',
  './asset/img/mì quangr.webp'
];
var totalImg= images.length;
function effectImg() {
  images[currentIndex].classList.remove('active');
  currentIndex=(currentIndex+1)%totalImg;
  images[currentIndex].classList.add('active');
}



setInterval(effectImg,600);