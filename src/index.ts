import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCSV('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Arsenal');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
