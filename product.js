// CÂU 1: Constructor Product
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// CÂU 2: Khởi tạo mảng products
const products = [
    new Product(1, "Laptop Dell XPS", 45000000, 5, "Electronics", true),
    new Product(2, "iPhone 15 Pro", 38000000, 3, "Electronics", true),
    new Product(3, "Wireless Mouse", 1200000, 0, "Accessories", true),
    new Product(4, "Mechanical Keyboard", 3500000, 7, "Accessories", true),
    new Product(5, "Gaming Monitor", 12000000, 2, "Electronics", false),
    new Product(6, "USB-C Hub", 900000, 10, "Accessories", true)
];

// CÂU 3:
// map() dùng để tạo mảng mới
const nameAndPrice = products.map(p => ({
    name: p.name,
    price: p.price
}));
console.log("Câu 3 - Name & Price:", nameAndPrice);

// CÂU 4: 
// filter() dùng để lọc các phần tử thỏa điều kiện
const inStockProducts = products.filter(p => p.quantity > 0);
console.log("Câu 4 - Còn hàng:", inStockProducts);

// CÂU 5: 
// some() kiểm tra có ít nhất 1 phần tử thỏa điều kiện hay không
const hasExpensiveProduct = products.some(p => p.price > 30000000);
console.log("Câu 5 - Có SP > 30tr?", hasExpensiveProduct);

// CÂU 6: 
// every() kiểm tra tất cả phần tử có thỏa điều kiện hay không
const allAccessoriesAvailable = products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable === true);
console.log("Câu 6 - Accessories đều đang bán?", allAccessoriesAvailable);

// CÂU 7: 
// reduce() dùng để tính toán / tổng hợp dữ liệu
const totalInventoryValue = products.reduce(
    (total, p) => total + p.price * p.quantity,
    0
);
console.log("Câu 7 - Tổng giá trị kho:", totalInventoryValue);

// CÂU 8:
// for...of dùng để duyệt giá trị từng phần tử trong mảng
console.log("Câu 8:");
for (const p of products) {
    console.log(
        "Tên: " + p.name +
        " | Danh mục: " + p.category +
        " | Trạng thái: " + (p.isAvailable ? "Đang bán" : "Ngừng bán")
    );
}


// CÂU 9:
// for...in dùng để duyệt tên thuộc tính của một object
console.log("Câu 9:");
for (const key in products[0]) {
    console.log("Thuộc tính: " + key + " | Giá trị: " + products[0][key]);
}


// CÂU 10:
// Lấy danh sách tên sản phẩm đang bán và còn hàng
const availableAndInStockNames = products
    .filter(function (p) {
        return p.isAvailable && p.quantity > 0;
    })
    .map(function (p) {
        return p.name;
    });

console.log("Câu 10 - SP đang bán và còn hàng:", availableAndInStockNames);
