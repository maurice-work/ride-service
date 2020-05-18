import { IAreasListItemProps } from './components/AreasListItem/AreasListItem.types';
import { IDamagedVehicleType } from '../MyRides/pages/DamagedVehicle/DamagedVehicle.types';
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
