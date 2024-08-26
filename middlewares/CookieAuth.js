
const OnlyLoggedIn = (req, res, next) => {
    const token = req.cookies.Token;
    if (!token) {
        console.log("Token not found");
        return res.redirect("/login");
    } else {
        console.log("Token valid");
        return next();
    }
}

const NotLoggedIn = (req, res, next) => {
    const token = req.cookies.Token;
    if (token) {
        console.log("Token found");
        return res.redirect("/home");
    } else {
        console.log("Token not valid");
        return next();
    }
}

export const AuthCookie = {
    OnlyLoggedIn,
    NotLoggedIn
}