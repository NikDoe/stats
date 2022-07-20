import { dateStringToDate } from './utils';
import { MatchResults } from './MatchResults';

interface DataReader {
	read(): void;
	data: string[][];
}

type MatchData = [Date, string, string, number, number, MatchResults, string];

export class MatchReader {
	constructor(public reader: DataReader) {}
}
