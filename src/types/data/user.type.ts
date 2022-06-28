export interface UserDetails{
    createdAt: string,
    email: string,
    id: string,
    _id: string,
    username: string,
    updatedAt: string,
    wishlist: [],
    cart: [],
    orders: [],
    address: [],
}

export interface User{
    encodedToken: string,
    foundUser: UserDetails
}