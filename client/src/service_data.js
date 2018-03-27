import academic_research from './images/academic_research.jpg';
import data_analysis from './images/data_analysis.jpg';
import training from './images/training.jpg';
import consulting from './images/consulting.png';

export default [
	{
		topic: 'ACADEMIC RESEARCH',
		values: [
			'Assignments',
			'Term Papers',
			'Statistical Essays',
			'Thesis',
			'Personal writing',
			'Seminar Paper',
		],
		image: academic_research,
	},

	{
		topic: 'STATISTICAL DATA ANALYSIS',
		values: [
			'CORRELATION AND SIMPLE REGRESSION',
			'CORRELATION AND MULTIPLE REGRESSION',
			'LOGISTIC REGRESSION (FACTORIAL, SIMPLE AND MULTIPLE)',
			'NON-PARAMETRIC CORRELATION',
			'CHI-SQUARE TESTS FOR INDEPENDENCE',
			'CHI-SQUARE TESTS FOR GOODNESS OF FIT',
			'WILCOXON-MANN-WHITNEY TEST, FISHER’S EXACT TEST',
			'WILCOXON SIGNED RANK SUM TEST',
			'McNEMAR TEST',
			'KRUSKALL WALLIS TEST',
			'OTHER T-TESTS',
			'ONE-WAY AND TWO-WAY ANALYSIS OF VARIANCE (ANOVA)',
			'REPEATED MEASURES LOGISTIC REGRESSION (ANOVA)',
			'ANALYSIS OF COVARIANCE (ANCOVA)',
			'DISCRIMINANT ANALYSIS',
			'TIME SERIES ANALYSIS AND MODELLING FOR AR, MA, ARMA AND ARIMA',
			'UNIT ROOTS AND STATIONARITY TESTING USING ADF',
			'COINTEGRATION  TEST USING ENGLE GRANGER & JOHANSEN',
			'ERROR CORRECTION MODELLING(ECM)',
			'GRANGER CAUSALITY',
			'PANEL DATA ANALYSIS',
			'FIXED AND RANDOM EFFECTS MODEL FOR DESIGN OF EXPERIMENTS',
		],
		image: data_analysis,
	},

	{
		topic: 'STATISTICAL ANALYSIS TRAINING',
		values: ['R', 'SPSS', 'STATA', 'ADVANCED EXCEL'],
		image: training,
	},
	{
		topic: 'ADVISING AND CONSULTING',
		values: [],
		image: consulting,
	},
];
