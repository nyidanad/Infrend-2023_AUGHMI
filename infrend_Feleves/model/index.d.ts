export interface CustomerDTO {
    id: number;
    fname: string;
    lname: string;
    address: string;
    idCardNum: string;
    phone: string;
}

export interface VehicleDTO {
    id: number;
    brand: string;
    type: string;
    regNum: string;
    purchaseDate: Date;
    rentalFee: number;
    mileage: number;
    status: string;
    imgUrl: string;
}

export interface RentalDTO {
    id: number;
    rentalDate: Date;
    customers: CustomerDTO;
    vehicles: VehicleDTO;
}

export interface RetrieveDTO {
    id: number;
    retrieveDate: Date;
    retrieveMileage: number;
    damaged: boolean;
    sum: number;
    rentals: RentalDTO;
    customers: CustomerDTO,
    vehicles: VehicleDTO;
}