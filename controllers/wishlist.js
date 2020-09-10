const { Wishlist } = require('../models/wishlist');
// const passport = require('passport')
// const LocalStrategy = require('passport-local').Strategy;
// const jwt = require('jwt-simple')
const config = require('../config/config.json')
// const bcrypt = require('bcrypt')


const createWishlist = async (req, res) => {
    try {
        const wishlist = await Wishlist.create(req.body);
        return res.status(201).json({
            wishlist,
        });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllWishlists = async (req, res) => {
    try {
        const wishlists = await Wishlist.findAll();
        return res.status(200).json({ wishlists });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getWishlistById = async (req, res) => {
    try {
        const { id } = req.params;
        const wishlist = await Wishlist.findOne({
            where: { id: id },
        });
        if (Wishlist) {
            return res.status(200).json({ Wishlist });
        }
        return res.status(404).send('Wishlist with the specified ID does not exist');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateWishlist = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Wishlist.update(req.body, { // check if [] is needed
            where: { id: id }
        });
        if (updated) {
            const updatedWishlist = await Wishlist.findOne({ where: { id: id } });
            return res.status(200).json({ wishlist: updatedWishlist });
        }
        throw new Error('Wishlist not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteWishlist = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Wishlist.destroy({
            where: { id: id }
        });
        if (deleted) {
            return res.status(204).send("Wishlist deleted");
        }
        throw new Error("Wishlist not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    createWishlist,
    getAllWishlists,
    getWishlistById,
    updateWishlist,
    deleteWishlist,
}