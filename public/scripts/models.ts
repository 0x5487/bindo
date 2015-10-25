class Inventory {

    private _id:number;

    public get Id(): number {
        return this._id;
    }

    public set Id(value: number){
        this._id = value;
    }


    private _name:string;

    public get Name(): string {
        return this._name;
    }

    public set Name(value: string){
        this._name = value;
    }


    private _barcode:string;

    public get Barcode(): string {
        return this._barcode;
    }

    public set Barcode(value: string){
        this._barcode = value;
    }


    private _qty:number;

    public get Qty(): number {
        return this._qty;
    }

    public set Qty(value: number){
        this._qty = value;
    }


    private _cost:number;

    public get Cost(): number {
        return this._cost;
    }

    public set Cost(value: number){
        this._cost = value;
    }


    private _price:number;

    public get Price(): number {
        return this._price;
    }

    public set Price(value: number){
        this._price = value;
    }


    private _tax:number;

    public get Tax(): number {
        return this._tax;
    }

    public set Tax(value: number){
        this._tax = value;
    }

    private _category:string;

    public get Category(): string {
        return this._category;
    }

    public set Category(value: string){
        this._category = value;
    }


    private _brand:string;

    public get Brand(): string {
        return this._brand;
    }

    public set Brand(value: string){
        this._brand = value;
    }



    private _discount:number;

    public get Discount(): number {
        return this._discount;
    }

    public set Discount(value: number){
        this._discount = value;
    }


    private _note:string;

    public get Note(): string {
        return this._note;
    }

    public set Note(value: string){
        this._note = value;
    }

}






