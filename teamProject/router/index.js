const router = require("express").Router();
const passportConfig = require("../passport");
passportConfig();

const userController = require("../controllers/userContorller");
const productController = require("../controllers/productController");
const cartController = require("../controllers/cartController");

//userController
router.get("/User", userController.loadUser);
router.get("/DeleteUser", userController.loadDeleteUser);
router.get("/logout", userController.logout);
router.get("/profile/:id", userController.loadProfileImage);
router.get("/userEdit/:id", userController.loadUserForEdit);
router.get("/userProfile/:id", userController.loadUserForEdit);
router.get("/userInfo/:id", userController.loadProfileImageForInfo);

router.post("/join", userController.userCreate);
router.post("/login", userController.userLogin);

router.post("/passwordCheck/:id", userController.passwordCheck);
router.post("/findId", userController.findId);
router.post("/findPassword", userController.findPassword);

router.put("/userEdit/:id", userController.userInfoUpdate);
router.put("/passwordEdit/:id", userController.updatedPassword);
router.put("/userinfo/put/:id", userController.deletedUser);

//productController
router.get("/product", productController.loadProductByNavButton);
router.get("/product/:id", productController.loadProductOne);
router.get("/productOption", productController.selectProductOptionAll);
router.get("/productOption/:id", productController.loadProductOption);
router.get("/productDetail", productController.selectProductDetailAll);

router.post("/addProduct", productController.addProduct);

router.put("/productEdit/:id", productController.updateProduct);

router.delete("/productDelete/:id", productController.deleteProduct);

//cartController
router.get("/cart/:user_id", cartController.showCartByUserId);
router.get("/cart", cartController.showCartAll);
router.get("/buyList/:user_id", cartController.showBuyListByUserId);
router.get("/carry", cartController.selectCarryAll);

router.post("/cart", cartController.addProductToCart);
router.post("/buyList", cartController.addBuyList);

router.delete("/cart", cartController.deleteProductFromCartByUserId);
router.delete("/cart/:id", cartController.deleteCart);
router.delete("/buyList/delete/:id", cartController.deleteBuylist);

module.exports = router;
