export interface IRulerPriceBonusProps {
	rulerPrice: string;
	rulerBonus: string;
}

export interface IOptionType {
	value: string;
	label: string;
}

export interface ICreditCardProps {
	name: string;
	cardNumber: string;
	expireDate: string;
	cvc: string;
	cardCountry: string;
	zipCode: string;
	cardNumberValid: boolean;
	zipCodeValid: boolean;
}
