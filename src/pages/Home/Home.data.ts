import { IAreasListItemProps } from './components/AreasListItem/AreasListItem.types';
import { IDamagedVehicleType } from '../MyRides/pages/DamagedVehicle/DamagedVehicle.types';
import { pxToRem } from 'styles';
export const areasListItems: Array<IAreasListItemProps> = [
	{
		iconName: 'out-of-business',
		primaryText: 'home.areas_sheet.out_of_business',
		secondaryText: 'home.areas_sheet.out_of_business.sub_title'
	},
	{
		iconName: 'reduced-speed',
		primaryText: 'home.areas_sheet.speed_reduction',
		secondaryText: 'home.areas_sheet.speed_reduction.sub_title'
	},
	{
		iconName: 'parking-discount',
		primaryText: 'home.areas_sheet.discount_parking',
		secondaryText: 'home.areas_sheet.discount_parking.sub_title'
	},
	{
		iconName: 'no-parking',
		primaryText: 'home.areas_sheet.no_parking',
		secondaryText: 'home.areas_sheet.no_parking.sub_title'
	}
];

export const damagedVehicleTypes: Array<IDamagedVehicleType> = [
	{
		iconName: 'vehicle',
		label: 'home.text.all'
	},
	{
		iconName: 'car',
		label: 'my_rides.damaged_vehicle.text.car'
	},
	{
		iconName: 'bike',
		label: 'my_rides.damaged_vehicle.text.bike'
	},

	{
		iconName: 'scooter',
		label: 'my_rides.damaged_vehicle.text.scooter'
	}
];

export const markerList = [
	{
		lat: 17.441013,
		long: 78.383896,
		iconName: 'scooter',
		markerNumber: 0,
		decoratorName: './images/bird.png'
	},
	{
		lat: 17.452512,
		long: 78.396873,
		iconName: 'car',
		markerNumber: 0,
		decoratorName: './images/lime.png'
	},
	{
		lat: 17.447562,
		long: 78.384357,
		iconName: '',
		markerNumber: 7,
		decoratorName: ''
	},
	{
		lat: 17.440298,
		long: 78.392345,
		iconName: '',
		markerNumber: 25,
		decoratorName: ''
	}
];

export const vehicleInfo = [
	{
		iconName: './images/lime.png',
		property: 'Lime',
		description: 'electric car'
	},
	{
		iconName: 'charge',
		property: '79%',
		description: 'battery level'
	},
	{
		iconName: 'wallet',
		property: '0.15 /min',
		description: '$ 1 to unlock'
	}
];

export const vehicleSummary = [
	{
		iconName: './images/lime.png',
		property: 'Lime',
		description: 'electric car'
	},
	{
		iconName: 'charge',
		property: '79%',
		description: 'battery level'
	},
	{
		iconName: 'distance',
		property: '1 km',
		description: 'distance'
	},
	{
		iconName: 'wallet',
		property: '0.15 /min',
		description: '$ 1 to unlock'
	}
];

export const vehicleButtons = [
	{
		label: 'home.text.all',
		iconName: 'vehicle',
		style: {
			padding: `${pxToRem(8)} ${pxToRem(10)} 0 ${pxToRem(10)}`
		}
	},
	{
		label: 'home.text.car',
		iconName: 'car',
		style: {
			padding: `${pxToRem(7)} ${pxToRem(10)} 0 ${pxToRem(10)}`
		}
	},
	{
		label: 'home.text.bike',
		iconName: 'bike',
		style: {
			padding: `${pxToRem(7)} ${pxToRem(10)} 0 ${pxToRem(10)}`
		}
	},
	{
		label: 'home.text.scooter',
		iconName: 'scooter',
		style: {
			padding: `${pxToRem(7)} ${pxToRem(10)} 0 ${pxToRem(10)}`
		}
	}
];

export const vehicleTypes = [
	{
		vehicleSummary: [
			{
				iconName: './images/lime.png',
				property: 'Lime',
				description: 'electric car'
			},
			{
				iconName: 'charge',
				property: '79%',
				description: 'battery level'
			},
			{
				iconName: 'distance',
				property: '1 km',
				description: 'distance'
			},
			{
				iconName: 'wallet',
				property: '0.15 /min',
				description: '$ 1 to unlock'
			}
		],
		imageUrl: './images/car.png',
		vehicleDetail: [
			{
				iconName: 'seats',
				property: '4 seats'
			},
			{
				iconName: 'engine',
				property: 'electric'
			},
			{
				iconName: 'transmission	',
				property: 'automatic'
			},
			{
				iconName: 'color',
				property: 'white'
			},
			{
				iconName: 'point',
				property: 'Na Hřebenkách 2, 150 00 Praha 5'
			}
		]
	},
	{
		vehicleSummary: [
			{
				iconName: './images/lime.png',
				property: 'Lime',
				description: 'electric car'
			},
			{
				iconName: 'charge',
				property: '79%',
				description: 'battery level'
			},
			{
				iconName: 'distance',
				property: '1 km',
				description: 'distance'
			},
			{
				iconName: 'wallet',
				property: '0.15 /min',
				description: '$ 1 to unlock'
			}
		],
		imageUrl: './images/bike.png',
		vehicleDetail: [
			{
				iconName: 'seats',
				property: '43 km / h'
			},
			{
				iconName: 'color',
				property: 'white'
			},
			{
				iconName: 'point',
				property: 'Na Hřebenkách 2, 150 00 Praha 5'
			}
		]
	}
];
