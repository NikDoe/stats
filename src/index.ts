import { MatchResults } from './MatchResults';
import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';

const csvFileReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let arsenalWins = 0;

for (const match of matchReader.matches) {
	if (match[1] === 'Arsenal' && match[5] === MatchResults.HomeWin) {
		arsenalWins++;
	} else if (match[2] === 'Arsenal' && match[5] === MatchResults.AwayWin) {
		arsenalWins++;
	}
}

console.log(`Arsenal won ${arsenalWins} games`);
