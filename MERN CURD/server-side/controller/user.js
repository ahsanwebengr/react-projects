import { UserModel } from "../models/Users.js";

export const index = async (req, res) => {
    try {
        const users = await UserModel.find({});
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json(err);
    }
};


export const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findById(id);

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (err) {
        res.status(400).json(err);
    }
};

export const updateById = async (req, res) => {
    try {
        const id = req.params.id;
        const updateFields = {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        };

        const updatedUser = await UserModel.findByIdAndUpdate(id, updateFields, { new: true });

        if (updatedUser) {
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (err) {
        res.status(400).json(err);
    }
};

export const createUser = async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userDelete = await UserModel.findByIdAndDelete(id);

        if (userDelete) {
            res.status(200).json(userDelete);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (err) {
        res.status(200).json(err);
    }
};



