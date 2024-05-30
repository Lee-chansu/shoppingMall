const router = require("express").Router();
const passportConfig = require("../passport");
passportConfig();

const userController = require("../controllers/userContorller");
const productController = require("../controllers/productController");
const cartController = require("../controllers/cartController");

//userController
router.get("/user", userController.loadUser);
router.get("/deleteUser", userController.loadDeleteUser);
router.get("/logout", userController.logout);
router.get("/profile/:id", userController.loadProfileImage);
router.get("/userEdit/:id", userController.loadUserForEdit);
router.get("/userProfile/:id", userController.loadUserForEdit);
router.get("/userInfo/:id", userController.loadProfileImageForInfo);
router.get("/logout", userController.logout);

router.post("/join", userController.userCreate);
router.post("/login", userController.userLogin);

router.post("/passwordCheck/:id", userController.passwordCheck);
router.post("/findId", userController.findId);
router.post("/findPassword", userController.findPassword);

router.put("/userEdit/:id", userController.userInfoUpdate);
router.put("/passwordEdit/:id", userController.updatedPassword);
//회원탈퇴
router.put("/userinfo/put/:id", userController.deletedUser);

//productController
router.get("/product", productController.loadProductByNavButton);
router.get("/product/:id", productController.loadProductOne);
router.get("/productOption", productController.selectProductOptionAll);
router.get("/productOption/:id", productController.loadProductOption);
router.get("/productDetail", productController.selectProductDetailAll);

//리뷰 조회
router.get("/ReviewList", productController.selectReviewlist);

router.post("/addProduct", productController.addProduct);

router.put("/productEdit/:id", productController.updateProduct);
router.put("/productOption", productController.updateProductOption);

router.delete("/productDelete/:id", productController.deleteProduct);

//review
// router.get("/ReviewList", productController.selectReviewlist);

router.post("/review", productController.addReview);

router.get("/reviewEdit/:buyList_id", productController.loadReviewForEdit);
router.put("/reviewEdit/:buyList_id", productController.ReviewEdit);

//cartController
router.get("/cart/:user_id", cartController.selectCartByUserId);
router.get("/cart", cartController.selectCartAll);
router.get("/buyList/:user_id", cartController.selectBuyListByUserId);
router.get("/carry", cartController.selectCarryAll);

router.post("/cart", cartController.addProductToCart);
router.post("/buyList", cartController.addBuyList);
router.post("/carry", cartController.addCarry);

router.delete("/cart", cartController.deleteProductFromCartByUserId);
router.delete("/cart/:id", cartController.deleteCart);
router.delete("/buyList/delete/:id", cartController.deleteBuylist);

//payment
router.get("/paymentRequest", cartController.paymentRequest);

router.post("/paymentRequest", cartController.addPaymentRequest);
router.post("/confirm", cartController.tossPaymentRequest);

module.exports = router;
