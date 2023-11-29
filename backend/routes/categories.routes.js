const express=require("express");
const categoryController=require("../controllers/category.controllers");
const router=express.Router();


router.route('/').get(categoryController.getAllCategories).post(categoryController.addCategory);
router.route('/:id').get(categoryController.getCategoryById)
.delete(categoryController.deleteCategoryById).patch(categoryController.updateCategory);


module.exports=router;