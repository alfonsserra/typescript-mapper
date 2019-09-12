import { ICustomConverter } from '../../my-json-typescript-mapper';

const date12UTCCustomConverter: ICustomConverter = {

	fromJson(data: any): any {
		if (data === null || data === undefined) {
			return null;
		}
		if (typeof (data) === 'string') {
			return new Date(data);
		} else {
			throw new Error('Not a valid type for number conversion' + data);
		}
	},

	toJson(data: any): any {
		if (data === null || data === undefined) {
			return undefined;
		}
		if (data instanceof Date) {
			const dateAux: Date = new Date(data.getTime());
			dateAux.setDate(dateAux.getDate() + 1);
			return new Date(dateAux.setUTCHours(12)).toISOString();
		} else {
			throw new Error('Not a valid type for number conversion' + data);
		}
	}
};

export default date12UTCCustomConverter;

