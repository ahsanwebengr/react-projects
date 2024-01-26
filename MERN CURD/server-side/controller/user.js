import { UserModel } from "../models/Users.js";

export const index = async (req, res) => {
    try {
        const users = await UserModel.find({});
        const userCount = await UserModel.countDocuments();

        const result = {
            count: userCount,
            data: users
        };

        res.status(200).json(result);
    } catch (err) {
        res.status(400).json(err);
    }
};



export const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findById(id);

        if (user) {
            res.status(200).json({ user, status: true });
        } else {
            res.status(404).json({ message: "User not found", status: false });
        }
    } catch (err) {
        res.status(400).json(err);
    }
};

export const updateById = async (req, res) => {
    try {
        const id = req.params.id;
        const updateFields = {
            userName: req.body.name,
            email: req.body.email,
            age: req.body.age
        };

        if (updateFields.userName === '' || updateFields.email === '' || updateFields.age === '') {
            console.log('All fields are required.');
            return res.status(400).json({ message: 'All fields are required.', status: false });
        }

        const updatedUser = await UserModel.findByIdAndUpdate(id, updateFields, { new: true });

        if (updatedUser) {
            res.status(200).json({ message: 'User Update Successfully', status: true });
        } else {
            res.status(404).json({ message: "User not found", status: false });
        }
    } catch (err) {
        res.status(500).json(err);
    }
};


// =============> Create new User <=======================
export const createUser = async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.status(200).json({ message: "User created successfully", status: true });
    } catch (err) {
        if (err.name === 'ValidationError') {
            const validationErrors = {};
            for (let field in err.errors) {
                validationErrors[field] = err.errors[field].message;
            }
            return res.status(400).json({ errors: validationErrors });
        } else if (err.code === 11000 && err.keyPattern && err.keyPattern.email) {
            return res.status(400).json({ errors: { email: 'Email already exist.', status: false } });
        } else {
            res.status(500).json({ error: 'Internal Server Error' });
        }

    }
};


// <=============== Delete Current User <================
export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userDelete = await UserModel.findByIdAndDelete(id);

        if (userDelete) {
            res.status(200).json({ message: 'User deleted successfully', status: true });
        } else {
            res.status(404).json({ message: 'User not found', status: false });
        }
    } catch (err) {
        res.status(400).json({ message: 'Failed to delete user', error: err.message });
    }
};



