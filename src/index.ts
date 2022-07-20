import { CsvFileReader } from './CsvFileReader';
import { MatchResults } from './MatchResults';

const reader = new CsvFileReader('football.csv');
reader.read();

console.log(reader.data);

let arsenalWins = 0;

for (const match of reader.data) {
	if (match[1] === 'Arsenal' && match[5] === MatchResults.HomeWin) {
		arsenalWins++;
	} else if (match[2] === 'Arsenal' && match[5] === MatchResults.AwayWin) {
		arsenalWins++;
	}
}

console.log(`Arsenal won ${arsenalWins} games`);
