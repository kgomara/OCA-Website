const AGILE 					= "agile";
const CODE 						= "code";
const ANDROID 					= "android";
const APACHE 					= "apache";
const HTTP 						= "http";
const SERVER		 			= "server";
const JAVA 						= "java";
const CAMEL 					= "camel";
const EAI 						= "eai";
const CASSANDRA 				= "cassandra";
const NOSQL 					= "nosql";
const CONTINUOUS_INTEGRATION 	= "ci";
const HUDSON 					= "hudson";
const CLOUD 					= "cloud";
const AWS 						= "aws";
const GAE 						= "gae";
const AZURE 					= "azure";
const COUCHBASE 				= "couchbase";
const CPP 						= "c++";
const CSS 						= "css";
const DEPLOYMENT 				= "deployment";
const DART 						= "dart";
const DATA_MINING 				= "data mining";
const PYTHON 					= "python";
const DATA_WAREHOUSE			= "data warehouse";
const MYSQL						= "mysql";
const JAVASCRIPT				= "javascript";
const DEBUGGING					= "debugging";
const PATTERNS					= "patterns";
const DNS						= "dns";
const NETWORK					= "network";
const DOCKER					= "docker";
const DRUPAL					= "drupal";
const CONTENT_MAMAGEMENT		= "content management";
const ECLIPSE					= "eclipse";
const IDE						= "ide";
const JPA						= "jpa";
const ORM						= "orm";
const FITNESSE					= "fitnesse";
const TESTING					= "testing";
const QA						= "qa";
const FLASH						= "flash";
const IOS						= "ios";
const GIT						= "git";
const SCM						= "scm";
const VCS						= "vcs";
const GLASSFISH					= "glassfish";
const APPLICATION_SERVER		= "application server";
const HADOOP					= "hadoop";
const HBASE						= "hbase";
const HTML 						= "html";
const CANVAS					= "canvas";
const MOBILE					= "mobile";


var libraryData = [
	// Refcards
	{
		"type":			"refcard",
		"title":		"Agile Adoption: Reducing Cost",
		"url":			"library/agile_adoption-reducecost.pdf",
		"tags": [
			AGILE
		]
	},
	{
		"type":			"refcard",
		"title":		"Agile Adoption: Decreasing Time to Market",
		"url":			"library/agile_adoption.pdf",
		"tags": [
			AGILE
		]
	},
	{
		"type":			"refcard",
		"title":		"Agile Adoption: Improving Software Quality",
		"url":			"library/agile_improve_quality.pdf",
		"tags": [
			AGILE
		]
	},
	{
		"type":			"refcard",
		"title":		"Code Gems for Android Developers",
		"url":			"library/android.pdf",
		"tags": [
			ANDROID, CODE, MOBILE
		]
	},
	{
		"type":			"refcard",
		"title":		"Essential Apache HTTP Server",
		"url":			"library/ApacheHTTPD_1.pdf",
		"tags": [
			APACHE, HTTP, SERVER
		]
	},
	{
		"type":			"refcard",
		"title":		"Camel Essential Components",
		"url":			"library/camel_0.pdf",
		"tags": [
			CAMEL, EAI
		]
	},
	{
		"type":			"refcard",
		"title":		"Apache Cassandra",
		"url":			"library/Cassandra.pdf",
		"tags": [
			CASSANDRA, APACHE, NOSQL
		]
	},
	{
		"type":			"refcard",
		"title":		"CI: Servers and Tools",
		"url":			"library/ci_servers_tools_0.pdf",
		"tags": [
			CONTINUOUS_INTEGRATION, HUDSON
		]
	},
	{
		"type":			"refcard",
		"title":		"Cloud Computing: Getting Started",
		"url":			"library/cloud-computing.pdf",
		"tags": [
			CLOUD, AWS, GAE, AZURE
		]
	},
	{
		"type":			"refcard",
		"title":		"CI: Patterns and Anti-Patterns",
		"url":			"library/continuous-integration_1_0.pdf",
		"tags": [
			CONTINUOUS_INTEGRATION, PATTERNS
		]
	},
	{
		"type":			"refcard",
		"title":		"Couchbase API",
		"url":			"library/couchbaseAPI_2.pdf",
		"tags": [
			COUCHBASE, NOSQL
		]
	},
	{
		"type":			"refcard",
		"title":		"Core C++",
		"url":			"library/cpp_5.pdf",
		"tags": [
			CODE, CPP
		]
	},
	{
		"type":			"refcard",
		"title":		"CSS3: Basics",
		"url":			"library/css3_basics.pdf",
		"tags": [
			CSS
		]
	},
	{
		"type":			"refcard",
		"title":		"Deployment Automation Patterns",
		"url":			"library/DAP_2.pdf",
		"tags": [
			DEPLOYMENT, PATTERNS
		]
	},
	{
		"type":			"refcard",
		"title":		"Core Dart: Client Web Language",
		"url":			"library/dart_1.pdf",
		"tags": [
			DART, CODE
		]
	},
	{
		"type":			"refcard",
		"title":		"Data Mining",
		"url":			"library/data-mining_0.pdf",
		"tags": [
			DATA_MINING, PYTHON
		]
	},
	{
		"type":			"refcard",
		"title":		"Data Warehousing",
		"url":			"library/DataWarehousing.pdf",
		"tags": [
			DATA_WAREHOUSE
		]
	},
	{
		"type":			"refcard",
		"title":		"Database Partioning with MySQL",
		"url":			"library/DBPartitioning_2.pdf",
		"tags": [
			MYSQL
		]
	},
	{
		"type":			"refcard",
		"title":		"Debugging Javascript",
		"url":			"library/DebuggingJavascript_2.pdf",
		"tags": [
			JAVASCRIPT, DEBUGGING, CODE
		]
	},
	{
		"type":			"refcard",
		"title":		"Design Patterns",
		"url":			"library/designpatterns.pdf",
		"tags": [
			PATTERNS
		]
	},
	{
		"type":			"refcard",
		"title":		"Practical DNS",
		"url":			"library/DNS.pdf",
		"tags": [
			DNS, NETWORK
		]
	},
	{
		"type":			"refcard",
		"title":		"Getting Started with Docker",
		"url":			"library/docker.pdf",
		"tags": [
			DEPLOYMENT, DOCKER
		]
	},
	{
		"type":			"refcard",
		"title":		"Getting Started with Drupal",
		"url":			"library/drupal_1.pdf",
		"tags": [
			DRUPAL, CONTENT_MAMAGEMENT
		]
	},
	{
		"type":			"refcard",
		"title":		"Getting Started with Eclipse",
		"url":			"library/eclipse_online.pdf",
		"tags": [
			ECLIPSE, IDE
		]
	},
	{
		"type":			"refcard",
		"title":		"EclipseLink JPA",
		"url":			"library/eclipselinkjpa-3_1.pdf",
		"tags": [
			JPA, ORM
		]
	},
	{
		"type":			"refcard",
		"title":		"Essential Admin for MySQL 5.5",
		"url":			"library/Essential-Admin-MySQL5.5_1.pdf",
		"tags": [
			MYSQL
		]
	},
	{
		"type":			"refcard",
		"title":		"Getting Started with FitNesse",
		"url":			"library/fitnesse_1.pdf",
		"tags": [
			FITNESSE, TESTING, QA
		]
	},
	{
		"type":			"refcard",
		"title":		"Adobe Flash Builder 4.5",
		"url":			"library/flashbuilder45_1.pdf",
		"tags": [
			IDE, FLASH
		]
	},
	{
		"type":			"refcard",
		"title":		"Flex Mobile Development",
		"url":			"library/FlexMobileDevelopment_0.pdf",
		"tags": [
			IDE, FLASH, ANDROID, IOS, MOBILE
		]
	},
	{
		"type":			"refcard",
		"title":		"Getting Started with Git",
		"url":			"library/git_2.pdf",
		"tags": [
			GIT, SCM, VCS
		]
	},
	{
		"type":			"refcard",
		"title":		"Git Patterns and Anti-Patterns",
		"url":			"library/git-patterns-antipatterns_1.pdf",
		"tags": [
			GIT, PATTERNS
		]
	},
	{
		"type":			"refcard",
		"title":		"Getting Started with Glassfish",
		"url":			"library/glassfish-appserver-update_1.pdf",
		"tags": [
			GLASSFISH, APPLICATION_SERVER
		]
	},
	{
		"type":			"refcard",
		"title":		"Google App Engine for Java",
		"url":			"library/google-app-engine-4.pdf",
		"tags": [
			GAE, JAVA
		]
	},
	{
		"type":			"refcard",
		"title":		"Apache HBase",
		"url":			"library/HBase_5.pdf",
		"tags": [
			APACHE, NOSQL, HADOOP, HBASE
		]
	},
	{
		"type":			"refcard",
		"title":		"HTML5 Evolution of Web Standards",
		"url":			"library/html5_1.pdf",
		"tags": [
			HTML
		]
	},
	{
		"type":			"refcard",
		"title":		"HTML5 Canvas",
		"url":			"library/html5-canvas_0.pdf",
		"tags": [
			HTML, CANVAS
		]
	},
	{
		"type":			"refcard",
		"title":		"HTML5 Mobile Development",
		"url":			"library/html5-mobile_0.pdf",
		"tags": [
			HTML, MOBILE
		]
	},
	{
		"type":			"refcard",
		"title":		"HTML5 Web Workers",
		"url":			"library/HTML5-webworkers_0.pdf",
		"tags": [
			HTML, JAVASCRIPT
		]
	}
];

