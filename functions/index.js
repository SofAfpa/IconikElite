const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

// Fonction d'inscription
exports.signup = functions.https.onCall(async (data, context) => {
    const { email, password } = data;

    try {
        const userRecord = await admin.auth().createUser({
            email: email,
            password: password,
        });
        return { message: "User created successfully", uid: userRecord.uid };
    } catch (error) {
        return { error: error.message };
    }
});

// Fonction de connexion
exports.login = functions.https.onCall(async (data, context) => {
    const { email, password } = data;

    try {
        const userRecord = await admin.auth().getUserByEmail(email);
        // Vous pouvez ici utiliser un autre système pour gérer les connexions
        return { message: "User authenticated", uid: userRecord.uid };
    } catch (error) {
        return { error: error.message };
    }
});
