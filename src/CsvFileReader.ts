import fs from 'fs';
import { MatchResults } from './MatchResults';

type MatchData = [Date, string, string, number, number, MatchResults, string];

export abstract class CsvFileReader {
	data: MatchData[] = [];

	constructor(public filename: string) {}

	read(): void {
		this.data = fs
			.readFileSync(this.filename, {
				encoding: 'utf-8',
			})
			.split('\n')
			.map((row: string): string[] => row.split(','))
			.map(this.mapRow);
	}

	abstract mapRow(row: string[]): MatchData;
}
