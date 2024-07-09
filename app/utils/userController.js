"use server";

import { signIn, signOut } from "./auth";
import connectDB from "./server";

const Users = require("./userModel");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env.local" });

// const usertoken = (id) => {
//   return jwt.sign({ id: id }, process.env.JWT_SECRET, {
//     expiresIn: "30d",
//   });
// };

export const createGuest = async (newGuest) => {
  try {
    await connectDB();
    const data = await Users.create(newGuest);
    console.log("createGuest");
    return {
      status: "success",
      data,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Guest could not be created");
  }
};

export const getGuest = async (email) => {
  try {
    await connectDB();
    const data = await Users.findOne({ email });
    console.log("getGuest");
    return {
      status: "success",
      data,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Guest could not be retrieved");
  }
};

export async function signInAction() {
  await signIn("google", { redirectTo: "/" });
}

export async function signOutAction() {
  await signOut("google", { redirectTo: "/" });
}

export const emailHandler = async () => {
  try {
    
  } catch (error) {
    console.log(error.message);
  }
};
