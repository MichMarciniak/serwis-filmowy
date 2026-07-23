
export const logout = async () => {
    await fetch("/api/logout", {
        method: "POST",
        credentials: "include"
    });
};

export const login = async (username, password) => {
    return await fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            username: username,
            password: password,
        }),
        credentials: "include",
    })
}

export const register = async (username, password) => {
    return await fetch("/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    })
}

export const checkLoginStatus = async() => {
    return await fetch("/api/me", {
        method:"GET",
        credentials: "include"
    })
}
