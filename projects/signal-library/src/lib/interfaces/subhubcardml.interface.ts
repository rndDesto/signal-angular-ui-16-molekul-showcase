  export interface SubHubCardMLType {
    id?:               string;
    name?:             string;
    imageBanner?:      string;
    price?:            string;
    paketList?:        string;
    isMaintenance?:    number;
    isPromo?:          number;
    isDiscount?:       boolean;
    priceDiscount?:    string;
    discount?:         number;
    tipeBerlangganan?: TipeBerlangganan[];
}

export interface TipeBerlangganan {
    name?:  string;
    jenis?: string;
}
