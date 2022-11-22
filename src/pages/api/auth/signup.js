import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  const { email, password } = req.body;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 6
  ) {
    res.status(422).json({
      message:
        "Invalid input - password should also be at least 7 characters long.",
    });
    return;
  }

  // encrypted
  const result = await prisma.user.create({
    data: {
      name: "Default",
      email: email,
      password: password,
    },
  });

  res.status(201).json({ message: "Created user success!" });
}
