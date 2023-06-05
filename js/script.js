// Xử lý chọn ngôn ngữ seclect
const selectLanguage = document.querySelector('select');
selectLanguage.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    // Lưu trữ ngôn ngữ được chọn ở đây và thực hiện các hành động tương ứng
});

// Xử lý libs slideshow của index.html
var arrHinh = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
]
var index = 1;
var show = document.getElementById("show");

function next() {
    index++;
    if (index >= arrHinh.length) index = 1;
    show.src = arrHinh[index];
}

function prev() {
    index--;
    if (index < 1) index = arrHinh.length - 1;
    show.src = arrHinh[index];
}
// Thêm hàm để tự động chuyển đổi hình ảnh
function autoChange() {
    setInterval(next, 3000); // thay đổi ảnh sau mỗi 3 giây
}

autoChange(); // Bắt đầu chuyển đổi tự động ngay khi trang được tải

// Xử lý datetime
//Start date picker
jQuery(function () {
    jQuery('#date_timepicker_start').datetimepicker({
        format: 'd/m/Y',
        onShow: function (ct) {
            this.setOptions({
                maxDate: jQuery('#date_timepicker_end').val() ? jQuery('#date_timepicker_end').val() : false
            })
        },
        timepicker: false
    });
    jQuery('#date_timepicker_end').datetimepicker({
        format: 'd/m/Y',
        onShow: function (ct) {
            this.setOptions({
                minDate: jQuery('#date_timepicker_start').val() ? jQuery('#date_timepicker_start').val() : false
            })
        },
        timepicker: false
    });
});

// khi thay đổi kích thước màn hình thì thanh nav-header sẽ vẫn giữ nguyên kích thước và vị trí do thuộc tính poision:fixed - cách khắc phục là sử dụng javaScript để resize (nhờ ChatGPT hỗ trợ)
const navHeaderLayer = document.querySelector('.nav-header');

function setNavHeaderLayerWidth() {
    const bodyWidth = document.body.clientWidth;
    navHeaderLayer.style.width = `${bodyWidth}px`;
}

window.addEventListener('resize', setNavHeaderLayerWidth);

// xử lý hiện - ẩn cho thanh điều hướng navigation
var openNav = document.querySelector(".open-nav");
var closeNav = document.querySelector(".close-nav");
var navBar = document.querySelector("#navBar");

openNav.addEventListener("click", function () {
    navBar.style.opacity = "1";
    navBar.style.visibility = "visible";
    openNav.style.display = "none";
    closeNav.style.display = "block";
});
closeNav.addEventListener("click", function () {
    navBar.style.opacity = "0";
    navBar.style.visibility = "hidden";
    openNav.style.display = "block";
    closeNav.style.display = "none";
});



// Xử lý slideshow của file rooms.html //*** */
var imgFeature = document.querySelector('.img-feature');
var listImg = document.querySelectorAll('.list-image img'); // trường hợp này phải sử dụng querySelactorAll vì chúng ta đang chịn một list
var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');

var currentIndex = 0;
function updateImageByIndex(index) {
    // remove active class
    document.querySelectorAll('.list-image div').forEach(function (item) {
        item.classList.remove('active-room');
    });

    currentIndex = index;
    imgFeature.src = listImg[index].getAttribute('src');
    listImg[index].parentElement.classList.add('active-room');
}

//.forEach() trong jQuery được sử dụng để duyệt qua tất cả các phần tử được chọn và thực hiện một hàm được chỉ định cho từng phần tử đó.
listImg.forEach(function (imgElement, index) {
    imgElement.addEventListener("click", function (e) { // sửa tên biến event thành "e"
        updateImageByIndex(index);
    })
});

prevBtn.addEventListener("click", function (e) {
    if (currentIndex == 0) {
        currentIndex = listImg.length - 1;
    } else {
        currentIndex--;
    }
    updateImageByIndex(currentIndex);
});

nextBtn.addEventListener("click", function (e) {
    if (currentIndex == listImg.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateImageByIndex(currentIndex);
});

updateImageByIndex(0);