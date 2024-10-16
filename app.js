import express from "express";
import userModel from "./usermodel.js";
const app = express();

app.get("/", (req, res) => {
  res.send("HEllo world");
});

//create user in mongo
app.get("/create", async (req, res) => {
  const createdUser = await userModel.create({
    name: "Hashir",
    username: "syedhashir",
    email: "hashir@mail.com",
  });
  res.send(createdUser);
});

//read user in mongo
app.get("/read", async (req, res) => {
  const allUser = await userModel.find();
  res.send(allUser);
});

//update user
app.get("/update", async (req, res) => {
  const user = await userModel.findOneAndUpdate(
    { username: "syedebad" },
    { email: "ebad3088@gmail.com" },
    { new: true }
  );
  res.send(user);
});

//delete user

app.get("/delete", async (req, res) => { 
  const deletedUser = await userModel.findOneAndDelete(
    { name: "Hashir" }
  );
  res.send(deletedUser);
})
app.listen(3000);
