import Category from '../models/category.model.js';
import { errorHandler, successHandle } from '../utils/index.js';

/**
 * @route GET api/category/all
 * @desc Get category all
 * @access private
 */
export const getAllCategory = async (req, res) => {
  try {
    const categoryAll = await Category.find({ is_deleted: false })
      .populate('created_by', ['_id', 'username'])
      .sort({
        createdAt: 'desc',
      });
    if (!categoryAll)
      throw { status: 400, message: 'Get all category not success' };

    const data = {
      status: 200,
      message: 'Get all category success',
      data: categoryAll,
    };
    return successHandle(data, res);
  } catch (error) {
    errorHandler(error, res);
  }
};
/**
 * @route POST api/category
 * @desc Create a category
 * @access private
 */
export const createCategory = async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    let category = await newCategory.save();
    category = await category.populate('created_by', ['_id', 'username']);
    if (!category) throw { status: 400, message: 'Add a category not success' };

    const data = {
      status: 200,
      message: 'Add category success',
      data: category,
    };
    return successHandle(data, res);
  } catch (error) {
    errorHandler(error, res);
  }
};
