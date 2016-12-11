const 	AGILE 					= "agile";
const 	ANDROID 				= "android";
const 	APACHE 					= "apache";
const 	APPLICATION_SERVER		= "application server";
const 	AWS 					= "aws";
const 	AZURE 					= "azure";
const 	CAMEL 					= "camel";
const 	CANVAS					= "canvas";
const 	CASSANDRA 				= "cassandra";
const 	CLOUD 					= "cloud";
const	CMMI					= "capability maturity model integation";
const 	CODE 					= "code";
const	COLLABNET				= "collabnet";
const 	CONTENT_MAMAGEMENT		= "content management";
const 	CONTINUOUS_INTEGRATION 	= "ci";
const 	COUCHBASE 				= "couchbase";
const 	CPP 					= "c++";
const 	CSS 					= "css";
const 	DART 					= "dart";
const 	DATA_MINING 			= "data mining";
const 	DATA_WAREHOUSE			= "data warehouse";
const 	DEBUGGING				= "debugging";
const 	DEPLOYMENT 				= "deployment";
const	DEVOPS					= "devops";
const 	DNS						= "dns";
const 	DOCKER					= "docker";
const 	DRUPAL					= "drupal";
const	DZONE					= "dzone";
const 	EAI 					= "eai";
const	ENCRYPTION				= "encryption";
const 	MOCK					= "mock";
const 	ECLIPSE					= "eclipse";
const 	FITNESSE				= "fitnesse";
const 	FLASH					= "flash";
const 	GIT						= "git";
const 	GLASSFISH				= "glassfish";
const 	GOOGLE_APP_ENGINE 		= "gae";
const 	HADOOP					= "hadoop";
const 	HBASE					= "hbase";
const	HIGH_AVAILABILITY		= "ha";
const 	HTML 					= "html";
const 	HTTP 					= "http";
const 	HUDSON 					= "hudson";
const 	IDE						= "ide";
const 	IOS						= "ios";
const 	IOT						= "iot";
const 	JAVA 					= "java";
const 	JAVASCRIPT				= "javascript";
const 	JENKINS					= "jenkins";
const 	JPA						= "jpa";
const 	JQUERY					= "jquery";
const 	JUNIT					= "junit";
const 	KANBAN					= "kanban";
const 	LEAN					= "lean";
const	BOOK					= "book";
const 	MOBILE					= "mobile";
const 	MONGO					= "mongo";
const 	MYSQL					= "mysql";
const 	MVVM					= "mvvm";
const 	NETBEANS				= "netbeans";
const 	NETWORK					= "network";
const	NODE_JS					= "node";			
const 	NOSQL 					= "nosql";
const	OBJECT_ORIENTED			= "oo";
const	OBJECTIVE_C				= "objc";
const 	ORM						= "orm";
const	OTHER					= "other";
const 	PATTERNS				= "patterns";
const	PHONE_GAP				= "phonegap";
const	PHP						= "php";
const	PHP_UNIT				= "phpunit";
const 	PYTHON 					= "python";
const 	QA						= "qa";
const	RAILS					= "rails";
const	REFACTOR				= "refactor";
const	REFCARD					= "refcard";
const	REGEX					= "regex";
const	REQUIREMENTS			= "requirements";
const	REST					= "rest";
const	RUBY					= "ruby";
const	SCALA					= "scala";
const	SCALABILITY				= "scalability";
const	SENCHA					= "sencha touch";
const 	SOFTWARE_AS_A_SERVICE	= "saas";
const 	SCM						= "scm";
const 	SCRUM					= "scrum";
const 	SERVER		 			= "server";
const	SPRING					= "spring";
const	SSL						= "ssl";
const	SVN						= "svn";
const	SWIFT					= "swift";
const	TEST_DRIVEN_DEVELOPMENT	= "tdd";
const 	TESTING					= "testing";
const	UML						= "uml";
const	USE_CASE				= "use case";
const 	VERSION_CONTROL_SYSTEM	= "vcs";
const	VISUAL_STUDIO			= "visual studio";
const	WEB_SOCKET				= "web socket";
const	WINDOWS_PHONE			= "windows phone";
const	XML						= "xml";


var libraryData = [
	// Refcards
	{
		"type":			REFCARD,
		"title":		"Agile Adoption: Reducing Cost",
		"url":			"library/agile_adoption-reducecost.pdf",
		"tags": [
			AGILE, SCRUM
		]
	},
	{
		"type":			REFCARD,
		"title":		"Agile Adoption: Decreasing Time to Market",
		"url":			"library/agile_adoption.pdf",
		"tags": [
			AGILE, SCRUM
		]
	},
	{
		"type":			REFCARD,
		"title":		"Agile Adoption: Improving Software Quality",
		"url":			"library/agile_improve_quality.pdf",
		"tags": [
			AGILE, SCRUM
		]
	},
	{
		"type":			REFCARD,
		"title":		"Code Gems for Android Developers",
		"url":			"library/android.pdf",
		"tags": [
			ANDROID, CODE, MOBILE
		]
	},
	{
		"type":			REFCARD,
		"title":		"Essential Apache HTTP Server",
		"url":			"library/ApacheHTTPD_1.pdf",
		"tags": [
			APACHE, HTTP, SERVER
		]
	},
	{
		"type":			REFCARD,
		"title":		"Camel Essential Components",
		"url":			"library/camel_0.pdf",
		"tags": [
			CAMEL, EAI
		]
	},
	{
		"type":			REFCARD,
		"title":		"Apache Cassandra",
		"url":			"library/Cassandra.pdf",
		"tags": [
			CASSANDRA, APACHE, NOSQL
		]
	},
	{
		"type":			REFCARD,
		"title":		"CI: Servers and Tools",
		"url":			"library/ci_servers_tools_0.pdf",
		"tags": [
			CONTINUOUS_INTEGRATION, HUDSON
		]
	},
	{
		"type":			REFCARD,
		"title":		"Getting Started with Cloud Computing",
		"url":			"library/cloud-computing.pdf",
		"tags": [
			CLOUD, AWS, GOOGLE_APP_ENGINE, AZURE
		]
	},
	{
		"type":			REFCARD,
		"title":		"CI: Patterns and Anti-Patterns",
		"url":			"library/continuous-integration_1_0.pdf",
		"tags": [
			CONTINUOUS_INTEGRATION, PATTERNS
		]
	},
	{
		"type":			REFCARD,
		"title":		"Couchbase API",
		"url":			"library/couchbaseAPI_2.pdf",
		"tags": [
			COUCHBASE, NOSQL
		]
	},
	{
		"type":			REFCARD,
		"title":		"Core C++",
		"url":			"library/cpp_5.pdf",
		"tags": [
			CODE, CPP, OBJECT_ORIENTED
		]
	},
	{
		"type":			REFCARD,
		"title":		"CSS3: Basics",
		"url":			"library/css3_basics.pdf",
		"tags": [
			CSS
		]
	},
	{
		"type":			REFCARD,
		"title":		"Deployment Automation Patterns",
		"url":			"library/DAP_2.pdf",
		"tags": [
			DEPLOYMENT, PATTERNS
		]
	},
	{
		"type":			REFCARD,
		"title":		"Core Dart: Client Web Language",
		"url":			"library/dart_1.pdf",
		"tags": [
			DART, CODE
		]
	},
	{
		"type":			REFCARD,
		"title":		"Data Mining",
		"url":			"library/data-mining_0.pdf",
		"tags": [
			DATA_MINING, PYTHON
		]
	},
	{
		"type":			REFCARD,
		"title":		"Data Warehousing",
		"url":			"library/DataWarehousing.pdf",
		"tags": [
			DATA_WAREHOUSE
		]
	},
	{
		"type":			REFCARD,
		"title":		"Database Partioning with MySQL",
		"url":			"library/DBPartitioning_2.pdf",
		"tags": [
			MYSQL
		]
	},
	{
		"type":			REFCARD,
		"title":		"Debugging Javascript",
		"url":			"library/DebuggingJavascript_2.pdf",
		"tags": [
			JAVASCRIPT, DEBUGGING, CODE
		]
	},
	{
		"type":			REFCARD,
		"title":		"Design Patterns",
		"url":			"library/designpatterns.pdf",
		"tags": [
			PATTERNS, OBJECT_ORIENTED
		]
	},
	{
		"type":			REFCARD,
		"title":		"Practical DNS",
		"url":			"library/DNS.pdf",
		"tags": [
			DNS, NETWORK
		]
	},
	{
		"type":			REFCARD,
		"title":		"Getting Started with Docker",
		"url":			"library/docker.pdf",
		"tags": [
			DEPLOYMENT, DOCKER
		]
	},
	{
		"type":			REFCARD,
		"title":		"Getting Started with Drupal",
		"url":			"library/drupal_1.pdf",
		"tags": [
			DRUPAL, CONTENT_MAMAGEMENT
		]
	},
	{
		"type":			REFCARD,
		"title":		"Getting Started with Eclipse",
		"url":			"library/eclipse_online.pdf",
		"tags": [
			ECLIPSE, IDE
		]
	},
	{
		"type":			REFCARD,
		"title":		"EclipseLink JPA",
		"url":			"library/eclipselinkjpa-3_1.pdf",
		"tags": [
			JPA, ORM
		]
	},
	{
		"type":			REFCARD,
		"title":		"Essential Admin for MySQL 5.5",
		"url":			"library/MySQL_UPDATE_110512.pdf",
		"tags": [
			MYSQL
		]
	},
	{
		"type":			REFCARD,
		"title":		"Getting Started with FitNesse",
		"url":			"library/fitnesse_1.pdf",
		"tags": [
			FITNESSE, TESTING, QA
		]
	},
	{
		"type":			REFCARD,
		"title":		"Adobe Flash Builder 4.5",
		"url":			"library/flashbuilder45_1.pdf",
		"tags": [
			IDE, FLASH
		]
	},
	{
		"type":			REFCARD,
		"title":		"Flex Mobile Development",
		"url":			"library/FlexMobileDevelopment_0.pdf",
		"tags": [
			IDE, FLASH, ANDROID, IOS, MOBILE
		]
	},
	{
		"type":			REFCARD,
		"title":		"Getting Started with Git",
		"url":			"library/git_2.pdf",
		"tags": [
			GIT, SCM, VERSION_CONTROL_SYSTEM
		]
	},
	{
		"type":			REFCARD,
		"title":		"Git Patterns and Anti-Patterns",
		"url":			"library/git-patterns-antipatterns_1.pdf",
		"tags": [
			GIT, PATTERNS
		]
	},
	{
		"type":			REFCARD,
		"title":		"Getting Started with Glassfish",
		"url":			"library/glassfish-appserver-update_1.pdf",
		"tags": [
			GLASSFISH, APPLICATION_SERVER
		]
	},
	{
		"type":			REFCARD,
		"title":		"Google App Engine for Java",
		"url":			"library/google-app-engine-4.pdf",
		"tags": [
			GOOGLE_APP_ENGINE, JAVA
		]
	},
	{
		"type":			REFCARD,
		"title":		"Apache HBase",
		"url":			"library/HBase_5.pdf",
		"tags": [
			APACHE, NOSQL, HADOOP, HBASE
		]
	},
	{
		"type":			REFCARD,
		"title":		"HTML5 Evolution of Web Standards",
		"url":			"library/html5_1.pdf",
		"tags": [
			HTML
		]
	},
	{
		"type":			REFCARD,
		"title":		"HTML5 Canvas",
		"url":			"library/html5-canvas_0.pdf",
		"tags": [
			HTML, CANVAS
		]
	},
	{
		"type":			REFCARD,
		"title":		"HTML5 Mobile Development",
		"url":			"library/html5-mobile_0.pdf",
		"tags": [
			HTML, MOBILE
		]
	},
	{
		"type":			REFCARD,
		"title":		"HTML5 Web Workers",
		"url":			"library/HTML5-webworkers_0.pdf",
		"tags": [
			HTML, JAVASCRIPT
		]
	},
	{
		"type":			REFCARD,
		"title":		"HTTP: The Hypertext Transfer Protocol",
		"url":			"library/HTTP_0.pdf",
		"tags": [
			HTTP, NETWORK
		]
	},
	{
		"type":			DZONE,
		"title":		"IoT: DZone Executive Guide",
		"url":			"library/iot-2.pdf",
		"tags": [
			IOT
		]
	},
	{
		"type":			REFCARD,
		"title":		"Java Enterprise Edition 7",
		"url":			"library/JavaEE7.pdf",
		"tags": [
			JAVA, APPLICATION_SERVER
		]
	},
	{
		"type":			REFCARD,
		"title":		"Java Enterprise Edition 6",
		"url":			"library/JEE6-1_1.pdf",
		"tags": [
			JAVA, APPLICATION_SERVER
		]
	},
	{
		"type":			REFCARD,
		"title":		"Jenkins on PaaS",
		"url":			"library/JenkinsonPaaS.pdf",
		"tags": [
			JENKINS, SOFTWARE_AS_A_SERVICE, CONTINUOUS_INTEGRATION
		]
	},
	{
		"type":			REFCARD,
		"title":		"JQuery Selectors",
		"url":			"library/jquery_online.pdf",
		"tags": [
			JQUERY, JAVASCRIPT, HTML, CSS
		]
	},
	{
		"type":			REFCARD,
		"title":		"JUnit and EasyMock",
		"url":			"library/junit_0.pdf",
		"tags": [
			JAVA, JUNIT, MOCK, TEST_DRIVEN_DEVELOPMENT, TESTING, QA
		]
	},
	{
		"type":			REFCARD,
		"title":		"Getting Started with Kanban",
		"url":			"library/kanban_8.pdf",
		"tags": [
			KANBAN, AGILE
		]
	},
	{
		"type":			REFCARD,
		"title":		"Getting Started with Lean Software Development",
		"url":			"library/leansd_0.pdf",
		"tags": [
			LEAN, AGILE
		]
	},
	{
		"type":			REFCARD,
		"title":		"Mockito: A Simple, Intuitive Mocking Framework",
		"url":			"library/Mockito_4.pdf",
		"tags": [
			JUNIT, MOCK, TEST_DRIVEN_DEVELOPMENT, TESTING, QA
		]
	},
	{
		"type":			REFCARD,
		"title":		"Patterns of Modular Architecture",
		"url":			"library/ModularityPatterns_0.pdf",
		"tags": [
			PATTERNS, OBJECT_ORIENTED
		]
	},
	{
		"type":			REFCARD,
		"title":		"MongoDB: Flexible NoSQL for Humongous Data",
		"url":			"library/MongoDB.pdf",
		"tags": [
			NOSQL, MONGO
		]
	},
	{
		"type":			REFCARD,
		"title":		"MVVM Design Pattern",
		"url":			"library/mvvm_0.pdf",
		"tags": [
			MVVM, PATTERNS, OBJECT_ORIENTED
		]
	},
	{
		"type":			REFCARD,
		"title":		"NetBeans Platform 7.0",
		"url":			"library/netbeansIDE7.pdf",
		"tags": [
			NETBEANS
		]
	},
	{
		"type":			REFCARD,
		"title":		"Object-Oriented JavaScript",
		"url":			"library/Object-oriented-js_4.pdf",
		"tags": [
			OBJECT_ORIENTED, JAVASCRIPT
		]
	},
	{
		"type":			REFCARD,
		"title":		"Objective-C: for the iPhone and iPad",
		"url":			"library/objective-c_0.pdf",
		"tags": [
			OBJECTIVE_C, IOS
		]
	},
	{
		"type":			REFCARD,
		"title":		"Getting Started with PhoneGap",
		"url":			"library/phonegap.pdf",
		"tags": [
			PHONE_GAP, MOBILE, IOS, ANDROID
		]
	},
	{
		"type":			REFCARD,
		"title":		"PHP 5.4",
		"url":			"library/PHP5.4.pdf",
		"tags": [
			PHP, CODE
		]
	},
	{
		"type":			REFCARD,
		"title":		"PHPUnit: PHP Test-Driven Development",
		"url":			"library/phpunit_1.pdf",
		"tags": [
			PHP_UNIT, PHP, TEST_DRIVEN_DEVELOPMENT
		]
	},
	{
		"type":			REFCARD,
		"title":		"Core Python",
		"url":			"library/Python_2.pdf",
		"tags": [
			PYTHON, CODE
		]
	},
	{
		"type":			REFCARD,
		"title":		"Refactoring Patterns",
		"url":			"library/Refactoring.pdf",
		"tags": [
			REFACTOR, PATTERNS
		]
	},
	{
		"type":			REFCARD,
		"title":		"Regular Expressions",
		"url":			"library/regex.pdf",
		"tags": [
			REGEX
		]
	},
	{
		"type":			REFCARD,
		"title":		"Binary Repository Management",
		"url":			"library/repo-management_1.pdf",
		"tags": [
			HTML, JAVASCRIPT
		]
	},
	{
		"type":			REFCARD,
		"title":		"REST: Foundations of RESTful Architecture",
		"url":			"library/rest_1.pdf",
		"tags": [
			REST
		]
	},
	{
		"type":			REFCARD,
		"title":		"Essential Ruby",
		"url":			"library/ruby.pdf",
		"tags": [
			RUBY, CODE
		]
	},
	{
		"type":			REFCARD,
		"title":		"Scala The Scalable JVM Language",
		"url":			"library/scala.pdf",
		"tags": [
			SCALA, CODE
		]
	},
	{
		"type":			REFCARD,
		"title":		"Scalability and High Availability",
		"url":			"library/scalability_3.pdf",
		"tags": [
			SCALABILITY, HIGH_AVAILABILITY
		]
	},
	{
		"type":			REFCARD,
		"title":		"Scrum",
		"url":			"library/scrum_2.pdf",
		"tags": [
			SCRUM, AGILE
		]
	},
	{
		"type":			REFCARD,
		"title":		"Sencha Touch HTML5 Mobile Web Development",
		"url":			"library/Sencha-Touch.pdf",
		"tags": [
			SENCHA, MOBILE, HTML, IOS, ANDROID
		]
	},
	{
		"type":			REFCARD,
		"title":		"Core Spring Data",
		"url":			"library/Spring-Data.pdf",
		"tags": [
			SERVER, SPRING
		]
	},
	{
		"type":			REFCARD,
		"title":		"Spring Integration",
		"url":			"library/SpringIntegration_0.pdf",
		"tags": [
			SPRING, EAI
		]
	},
	{
		"type":			REFCARD,
		"title":		"Spring Roo: Rapid Application Development for Java",
		"url":			"library/springroo.pdf",
		"tags": [
			SPRING, JAVA
		]
	},
	{
		"type":			REFCARD,
		"title":		"Eclipse Tools for Spring: SpringSource Tool Suite",
		"url":			"library/springsts.pdf",
		"tags": [
			SPRING, ECLIPSE, JAVA
		]
	},
	{
		"type":			REFCARD,
		"title":		"Spring Web Flow",
		"url":			"library/springwebflow.pdf",
		"tags": [
			SPRING
		]
	},
	{
		"type":			DZONE,
		"title":		"Swift",
		"url":			"library/swift.pdf",
		"tags": [
			SWIFT, IOS, CODE
		]
	},
	{
		"type":			REFCARD,
		"title":		"Getting Started with UML",
		"url":			"library/uml.pdf",
		"tags": [
			UML, OBJECT_ORIENTED
		]
	},
	{
		"type":			REFCARD,
		"title":		"Getting Started with Visual Studio 2010",
		"url":			"library/visualstudio10.pdf",
		"tags": [
			VISUAL_STUDIO, CODE, IDE
		]
	},
	{
		"type":			REFCARD,
		"title":		"HTML5 WebSocket: Full-duplex, Real-time Web Communication",
		"url":			"library/Websocket_1.pdf",
		"tags": [
			HTML, WEB_SOCKET, NETWORK
		]
	},
	{
		"type":			REFCARD,
		"title":		"Windows Phone 7",
		"url":			"library/wp7.pdf",
		"tags": [
			MOBILE, WINDOWS_PHONE
		]
	},
	{
		"type":			REFCARD,
		"title":		"Using XML in Java",
		"url":			"library/xml.pdf",
		"tags": [
			XML, CODE, JAVA
		]
	},
	{
		"type":			BOOK,
		"title":		"Scrum Intro: A Fit for You?",
		"url":			"library/IntroductionToScrum.pdf",
		"tags": [
			SCRUM, AGILE
		]
	},
	{
		"type":			BOOK,
		"title":		"Introduction To User Stories",
		"url":			"library/IntroductionToUserStories.pdf",
		"tags": [
			SCRUM, AGILE
		]
	},
	{
		"type":			DZONE,
		"title":		"DevOps Without Dev is Dead on Arrival",
		"url":			"library/DevOps_wo_Dev_DOA-final.pdf",
		"tags": [
			DEPLOYMENT, DEVOPS
		]
	},
	{
		"type":			DZONE,
		"title":		"Fail-Safe Application Deployment",
		"url":			"library/failsafeappdeploy.pdf",
		"tags": [
			DEPLOYMENT, DEVOPS
		]
	},
	{
		"type":			DZONE,
		"title":		"Introduction to Cloud Computing Architecture",
		"url":			"library/CloudComputing.pdf",
		"tags": [
			CLOUD
		]
	},
	{
		"type":			DZONE,
		"title":		"Capability Maturity Model® Integration 1.1",
		"url":			"library/CMMI02tr004.pdf",
		"tags": [
			CMMI
		]
	},
	{
		"type":			DZONE,
		"title":		"Deconstructing a Branch with Git",
		"url":			"library/CollabNet_DeconstructingaBranchwithGit.pdf",
		"tags": [
			GIT, COLLABNET
		]
	},
	{
		"type":			DZONE,
		"title":		"Which SCM? The Pros and Cons of Git and Subversion",
		"url":			"library/CollabNet_GitGuide_GitandSVN.pdf",
		"tags": [
			GIT, SVN, COLLABNET
		]
	},
	{
		"type":			DZONE,
		"title":		"Git for the Enterprise: Secure, Scalable, Standards-Compliant",
		"url":			"library/GitForTheEnterprise_CollabNet.pdf",
		"tags": [
			GIT, COLLABNET
		]
	},
	{
		"type":			BOOK,
		"title":		"Interactive Data Visualization for the Web",
		"url":			"library/Interactive_Data_Visualization_for_the_Web.pdf",
		"tags": [
			HTML, JAVASCRIPT, CSS
		]
	},
	{
		"type":			BOOK,
		"title":		"iOS 7 Programming Cookbook",
		"url":			"library/iOS_7_Programming_Cookbook.pdf",
		"tags": [
			IOS, CODE, OBJECTIVE_C
		]
	},
	{
		"type":			BOOK,
		"title":		"Jump Start Rails",
		"url":			"library/Jump_Start_Rails.pdf",
		"tags": [
			RAILS, CODE
		]
	},
	{
		"type":			BOOK,
		"title":		"Learning iOS Programming",
		"url":			"library/Learning_iOS_Programming_Third_Edition.pdf",
		"tags": [
			IOS, CODE
		]
	},
	{
		"type":			BOOK,
		"title":		"Learning Node",
		"url":			"library/Learning_Node.pdf",
		"tags": [
			NODE_JS, JAVASCRIPT, CODE
		]
	},
	{
		"type":			DZONE,
		"title":		"NIST Working Definition of Cloud Computing",
		"url":			"library/NSIT-cloud-def-v15.pdf",
		"tags": [
			CLOUD
		]
	},
	{
		"type":			DZONE,
		"title":		"OPEN SOURCE & CLOUD COMPUTING: ON-DEMAND, INNOVATIVE IT ON A MASSIVE SCALE",
		"url":			"library/open_cloud.pdf",
		"tags": [
			CLOUD
		]
	},
	{
		"type":			DZONE,
		"title":		"GUIDE to USING OPEN-SOURCE SOFTWARE to DEVELOP WEB APPLICATIONS",
		"url":			"library/open_web_platform.pdf",
		"tags": [
			CODE
		]
	},
	{
		"type":			BOOK,
		"title":		"Programming iOS 7",
		"url":			"library/Programming_iOS_7_Fourth_Edition.pdf",
		"tags": [
			IOS, CODE, OBJECTIVE_C
		]
	},
	{
		"type":			BOOK,
		"title":		"Programming the Mobile Web",
		"url":			"library/Programming_the_Mobile_Web_Second_Edition.pdf",
		"tags": [
			MOBILE, ANDROID, IOS
		]
	},
	{
		"type":			BOOK,
		"title":		"Python Cookbook",
		"url":			"library/Python_Cookbook_Third_Edition.pdf",
		"tags": [
			PYTHON, CODE
		]
	},
	{
		"type":			BOOK,
		"title":		"RESTful Web APIs",
		"url":			"library/RESTful_Web_APIs.pdf",
		"tags": [
			REST
		]
	},
	{
		"type":			DZONE,
		"title":		"Smart Internet of Things Projects",
		"url":			"library/Smart_Internet_of_Things_Projects.pdf",
		"tags": [
			IOT
		]
	},
	{
		"type":			BOOK,
		"title":		"Test-Driven Development with Python",
		"url":			"library/Test_Driven_Development_with_Python.pdf",
		"tags": [
			TEST_DRIVEN_DEVELOPMENT, PYTHON, TESTING, QA
		]
	},
	{
		"type":			DZONE,
		"title":		"How to Offer the Strongest SSL Encryption",
		"url":			"library/VerisignSSLEncryption.pdf",
		"tags": [
			SSL, ENCRYPTION
		]
	},
	{
		"type":			OTHER,
		"title":		"Writing Robust Java Code: Coding Standards",
		"url":			"library/javaCodingStandards.pdf",
		"tags": [
			JAVA, CODE
		]
	},
	{
		"type":			OTHER,
		"title":		"Agile Contracts: Money for Nothing and Your Change for Free",
		"url":			"library/Agile2008MoneyforNothing.pdf",
		"tags": [
			AGILE, SCRUM
		]
	},
	{
		"type":			OTHER,
		"title":		"Agile Retrospectives: Making Good Teams Great!",
		"url":			"library/AgileRetrospectives-MakingGoodTeamsGreat.pdf",
		"tags": [
			AGILE, SCRUM
		]
	},
	{
		"type":			OTHER,
		"title":		"Intro to Scrum: Scrum Master Course Materials",
		"url":			"library/scrum_intro.pdf",
		"tags": [
			SCRUM, AGILE
		]
	},
	{
		"type":			OTHER,
		"title":		"The New New Product Development Game",
		"url":			"library/TheNewNewProductDevelopmentGame.pdf",
		"tags": [
			SCRUM, AGILE
		]
	},
	{
		"type":			OTHER,
		"title":		"Subversion Cheat Sheet",
		"url":			"library/subversion-cheat-sheet-v1.pdf",
		"tags": [
			SVN, VERSION_CONTROL_SYSTEM
		]
	},
	{
		"type":			OTHER,
		"title":		"Subversion Quick Reference Card",
		"url":			"library/SubversionQuickReferenceCard.pdf",
		"tags": [
			SVN, VERSION_CONTROL_SYSTEM
		]
	},
	{
		"type":			OTHER,
		"title":		"Functional Requirements and Use Cases",
		"url":			"library/functreq.pdf",
		"tags": [
			UML, USE_CASE, REQUIREMENTS
		]
	},
	{
		"type":			DZONE,
		"title":		"Version Control with Git",
		"url":			"library/Version_Control_with_Git_Second_Edition.pdf",
		"tags": [
			GIT, SCM, VERSION_CONTROL_SYSTEM
		]
	}
];

