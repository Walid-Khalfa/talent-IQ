import { connectDB } from "./lib/db.js";
import User from "./models/User.js";
import { upsertStreamUser } from "./lib/stream.js";

const createUser = async () => {
  await connectDB();

  const clerkId = "VOTRE_CLERK_ID"; // Remplacez par votre Clerk ID
  const email = "votre@email.com"; // Remplacez par votre email
  const name = "Votre Nom"; // Remplacez par votre nom

  const existingUser = await User.findOne({ clerkId });
  
  if (existingUser) {
    console.log("✅ Utilisateur existe déjà:", existingUser);
    process.exit(0);
  }

  const newUser = await User.create({
    clerkId,
    email,
    name,
    profileImage: "",
  });

  await upsertStreamUser({
    id: newUser.clerkId.toString(),
    name: newUser.name,
    image: newUser.profileImage,
  });

  console.log("✅ Utilisateur créé:", newUser);
  process.exit(0);
};

createUser();
