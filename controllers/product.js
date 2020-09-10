const Product = require('../models/product');
const Wishlist = require('../models/wishlist')
// const passport = require('passport')
// const LocalStrategy = require('passport-local').Strategy;
// const jwt = require('jwt-simple')
const config = require('../config/config.json')
// const bcrypt = require('bcrypt')


const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        return res.status(201).json({
            product,
        });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll({
            include: [
                {
                    model: Wishlist
                }
            ]
        });
        return res.status(200).json({ products });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findOne({
            where: { id: id },
            include: [
                {
                    model: Wishlist
                }
            ]
        });
        if (Product) {
            return res.status(200).json({ Product });
        }
        return res.status(404).send('Product with the specified ID does not exist');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Product.update(req.body, { // check if [] is needed
            where: { id: id }
        });
        if (updated) {
            const updatedProduct = await Product.findOne({ where: { id: id } });
            return res.status(200).json({ product: updatedProduct });
        }
        throw new Error('Product not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Product.destroy({
            where: { id: id }
        });
        if (deleted) {
            return res.status(204).send("Product deleted");
        }
        throw new Error("Product not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
}