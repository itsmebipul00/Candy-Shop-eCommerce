export interface Address{
    address: string,
    createdAt: string,
    mobile: number,
    pincode: number,
    updatedAt: string,
    _id: string,
}

export type Addresses = {
    address: Address[]
}

export interface InititalData{
	_id?: string,
	mobile?: number,
	pincode?: number,
	address?: string,
}
