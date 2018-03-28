import academic_research from './images/academic_research.jpg';
import data_analysis from './images/data_analysis.jpg';
import training from './images/training.jpg';
import consulting from './images/consulting.png';

export default [
	{
		topic: 'ACADEMIC RESEARCH',
		values: [
			{ label: 'Assignments', value: 'Assignments' },
			{ label: 'Term Papers', value: 'Term Papers' },
			{ label: 'Statistical Essays', value: 'Statistical Essays' },
			{ label: 'Theses', value: 'Theses' },
			{ label: 'Personal writing', value: 'Personal writing' },
			{ label: 'Seminar Paper', value: 'Seminar Paper' },
		],
		image: academic_research,
	},

	{
		topic: 'STATISTICAL DATA ANALYSIS',
		values: [
			{ label: 'CORRELATION AND SIMPLE REGRESSION', value: 'CORRELATION AND SIMPLE REGRESSION' },
			{
				label: 'CORRELATION AND MULTIPLE REGRESSION',
				value: 'CORRELATION AND MULTIPLE REGRESSION',
			},
			{
				label: 'LOGISTIC REGRESSION (FACTORIAL, SIMPLE AND MULTIPLE)',
				value: 'LOGISTIC REGRESSION (FACTORIAL, SIMPLE AND MULTIPLE)',
			},
			{ label: 'NON-PARAMETRIC CORRELATION', value: 'NON-PARAMETRIC CORRELATION' },
			{ label: 'CHI-SQUARE TESTS FOR INDEPENDENCE', value: 'CHI-SQUARE TESTS FOR INDEPENDENCE' },
			{
				label: 'CHI-SQUARE TESTS FOR GOODNESS OF FIT',
				value: 'CHI-SQUARE TESTS FOR GOODNESS OF FIT',
			},
			{
				label: 'WILCOXON-MANN-WHITNEY TEST, FISHER’S EXACT TEST',
				value: 'WILCOXON-MANN-WHITNEY TEST, FISHER’S EXACT TEST',
			},
			{ label: 'WILCOXON SIGNED RANK SUM TEST', value: 'WILCOXON SIGNED RANK SUM TEST' },
			{ label: 'McNEMAR TEST', value: 'McNEMAR TEST' },
			{ label: 'KRUSKALL WALLIS TEST', value: 'KRUSKALL WALLIS TEST' },
			{ label: 'OTHER T-TESTS', value: 'OTHER T-TESTS' },
			{
				label: 'ONE-WAY AND TWO-WAY ANALYSIS OF VARIANCE (ANOVA)',
				value: 'ONE-WAY AND TWO-WAY ANALYSIS OF VARIANCE (ANOVA)',
			},
			{
				label: 'REPEATED MEASURES LOGISTIC REGRESSION (ANOVA)',
				value: 'REPEATED MEASURES LOGISTIC REGRESSION (ANOVA)',
			},
			{ label: 'ANALYSIS OF COVARIANCE (ANCOVA)', value: 'ANALYSIS OF COVARIANCE (ANCOVA)' },
			{ label: 'DISCRIMINANT ANALYSIS', value: 'DISCRIMINANT ANALYSIS' },
			{
				label: 'TIME SERIES ANALYSIS AND MODELLING FOR AR, MA, ARMA AND ARIMA',
				value: 'TIME SERIES ANALYSIS AND MODELLING FOR AR, MA, ARMA AND ARIMA',
			},
			{
				label: 'UNIT ROOTS AND STATIONARITY TESTING USING ADF',
				value: 'UNIT ROOTS AND STATIONARITY TESTING USING ADF',
			},
			{
				label: 'COINTEGRATION  TEST USING ENGLE GRANGER & JOHANSEN',
				value: 'COINTEGRATION  TEST USING ENGLE GRANGER & JOHANSEN',
			},
			{ label: 'ERROR CORRECTION MODELLING(ECM)', value: 'ERROR CORRECTION MODELLING(ECM)' },
			{ label: 'GRANGER CAUSALITY', value: 'GRANGER CAUSALITY' },
			{ label: 'PANEL DATA ANALYSIS', value: 'PANEL DATA ANALYSIS' },
			{
				label: 'FIXED AND RANDOM EFFECTS MODEL FOR DESIGN OF EXPERIMENTS',
				value: 'FIXED AND RANDOM EFFECTS MODEL FOR DESIGN OF EXPERIMENTS',
			},
		],
		image: data_analysis,
	},

	{
		topic: 'STATISTICAL ANALYSIS TRAINING',
		values: [
			{ label: 'R', value: 'R' },
			{ label: 'SPSS', value: 'SPSS' },
			{ label: 'STATA', value: 'STATA' },
			{ label: 'ADVANCED EXCEL', value: 'ADVANCED EXCEL' },
		],
		image: training,
	},
	{
		topic: 'ADVISING AND CONSULTING',
		values: [{ label: 'ADVISING AND CONSULTING', value: 'ADVISING AND CONSULTING' }],
		image: consulting,
	},
];
