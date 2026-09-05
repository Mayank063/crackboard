// Real dataset — sourced from LeetCode company tags (liquidslr/leetcode-company-wise-problems)
// Frequency = relative interview frequency, difficulty split by problem tag.

const COMPANIES = [
  {
    "id": "google",
    "name": "Google",
    "easy": 616,
    "medium": 1223,
    "hard": 505
  },
  {
    "id": "amazon",
    "name": "Amazon",
    "easy": 536,
    "medium": 1087,
    "hard": 388
  },
  {
    "id": "meta",
    "name": "Meta",
    "easy": 427,
    "medium": 763,
    "hard": 209
  },
  {
    "id": "microsoft",
    "name": "Microsoft",
    "easy": 393,
    "medium": 757,
    "hard": 234
  },
  {
    "id": "apple",
    "name": "Apple",
    "easy": 74,
    "medium": 177,
    "hard": 47
  },
  {
    "id": "bloomberg",
    "name": "Bloomberg",
    "easy": 399,
    "medium": 650,
    "hard": 174
  },
  {
    "id": "uber",
    "name": "Uber",
    "easy": 45,
    "medium": 209,
    "hard": 105
  },
  {
    "id": "tiktok",
    "name": "TikTok",
    "easy": 34,
    "medium": 243,
    "hard": 71
  },
  {
    "id": "netflix",
    "name": "Netflix",
    "easy": 5,
    "medium": 19,
    "hard": 5
  },
  {
    "id": "linkedin",
    "name": "LinkedIn",
    "easy": 26,
    "medium": 113,
    "hard": 36
  },
  {
    "id": "adobe",
    "name": "Adobe",
    "easy": 29,
    "medium": 96,
    "hard": 23
  },
  {
    "id": "salesforce",
    "name": "Salesforce",
    "easy": 25,
    "medium": 117,
    "hard": 51
  },
  {
    "id": "oracle",
    "name": "Oracle",
    "easy": 58,
    "medium": 188,
    "hard": 53
  },
  {
    "id": "paypal",
    "name": "PayPal",
    "easy": 16,
    "medium": 70,
    "hard": 17
  },
  {
    "id": "stripe",
    "name": "Stripe",
    "easy": 1,
    "medium": 11,
    "hard": 1
  },
  {
    "id": "airbnb",
    "name": "Airbnb",
    "easy": 11,
    "medium": 30,
    "hard": 22
  },
  {
    "id": "atlassian",
    "name": "Atlassian",
    "easy": 5,
    "medium": 39,
    "hard": 14
  },
  {
    "id": "nvidia",
    "name": "Nvidia",
    "easy": 32,
    "medium": 89,
    "hard": 15
  },
  {
    "id": "visa",
    "name": "Visa",
    "easy": 32,
    "medium": 91,
    "hard": 22
  },
  {
    "id": "pinterest",
    "name": "Pinterest",
    "easy": 1,
    "medium": 28,
    "hard": 16
  },
  {
    "id": "doordash",
    "name": "DoorDash",
    "easy": 7,
    "medium": 42,
    "hard": 25
  },
  {
    "id": "lyft",
    "name": "Lyft",
    "easy": 0,
    "medium": 19,
    "hard": 6
  },
  {
    "id": "snap",
    "name": "Snap",
    "easy": 5,
    "medium": 46,
    "hard": 29
  },
  {
    "id": "cisco",
    "name": "Cisco",
    "easy": 22,
    "medium": 50,
    "hard": 16
  },
  {
    "id": "intel",
    "name": "Intel",
    "easy": 6,
    "medium": 13,
    "hard": 1
  },
  {
    "id": "ibm",
    "name": "IBM",
    "easy": 53,
    "medium": 104,
    "hard": 16
  },
  {
    "id": "flipkart",
    "name": "Flipkart",
    "easy": 8,
    "medium": 71,
    "hard": 29
  },
  {
    "id": "swiggy",
    "name": "Swiggy",
    "easy": 6,
    "medium": 25,
    "hard": 5
  },
  {
    "id": "zomato",
    "name": "Zomato",
    "easy": 2,
    "medium": 19,
    "hard": 9
  },
  {
    "id": "paytm",
    "name": "Paytm",
    "easy": 6,
    "medium": 20,
    "hard": 3
  },
  {
    "id": "infosys",
    "name": "Infosys",
    "easy": 53,
    "medium": 117,
    "hard": 51
  },
  {
    "id": "wipro",
    "name": "Wipro",
    "easy": 14,
    "medium": 6,
    "hard": 0
  },
  {
    "id": "accenture",
    "name": "Accenture",
    "easy": 58,
    "medium": 60,
    "hard": 11
  },
  {
    "id": "tcs",
    "name": "TCS",
    "easy": 113,
    "medium": 116,
    "hard": 24
  },
  {
    "id": "twitch",
    "name": "Twitch",
    "easy": 2,
    "medium": 4,
    "hard": 1
  },
  {
    "id": "x",
    "name": "X",
    "easy": 8,
    "medium": 31,
    "hard": 12
  },
  {
    "id": "reddit",
    "name": "Reddit",
    "easy": 1,
    "medium": 3,
    "hard": 1
  },
  {
    "id": "spotify",
    "name": "Spotify",
    "easy": 7,
    "medium": 3,
    "hard": 4
  },
  {
    "id": "dropbox",
    "name": "Dropbox",
    "easy": 2,
    "medium": 10,
    "hard": 10
  },
  {
    "id": "zoom",
    "name": "Zoom",
    "easy": 2,
    "medium": 1,
    "hard": 1
  },
  {
    "id": "shopify",
    "name": "Shopify",
    "easy": 0,
    "medium": 4,
    "hard": 1
  },
  {
    "id": "twilio",
    "name": "Twilio",
    "easy": 2,
    "medium": 9,
    "hard": 0
  },
  {
    "id": "yelp",
    "name": "Yelp",
    "easy": 8,
    "medium": 15,
    "hard": 5
  },
  {
    "id": "coinbase",
    "name": "Coinbase",
    "easy": 2,
    "medium": 8,
    "hard": 1
  },
  {
    "id": "robinhood",
    "name": "Robinhood",
    "easy": 3,
    "medium": 11,
    "hard": 1
  },
  {
    "id": "roblox",
    "name": "Roblox",
    "easy": 8,
    "medium": 35,
    "hard": 13
  },
  {
    "id": "servicenow",
    "name": "ServiceNow",
    "easy": 5,
    "medium": 48,
    "hard": 14
  },
  {
    "id": "workday",
    "name": "Workday",
    "easy": 0,
    "medium": 6,
    "hard": 0
  },
  {
    "id": "snowflake",
    "name": "Snowflake",
    "easy": 13,
    "medium": 68,
    "hard": 20
  },
  {
    "id": "mongodb",
    "name": "MongoDB",
    "easy": 4,
    "medium": 15,
    "hard": 6
  },
  {
    "id": "databricks",
    "name": "Databricks",
    "easy": 2,
    "medium": 22,
    "hard": 7
  },
  {
    "id": "datadog",
    "name": "Datadog",
    "easy": 3,
    "medium": 7,
    "hard": 3
  },
  {
    "id": "okta",
    "name": "Okta",
    "easy": 0,
    "medium": 13,
    "hard": 5
  },
  {
    "id": "splunk",
    "name": "Splunk",
    "easy": 2,
    "medium": 8,
    "hard": 1
  },
  {
    "id": "asana",
    "name": "Asana",
    "easy": 1,
    "medium": 4,
    "hard": 0
  },
  {
    "id": "grammarly",
    "name": "Grammarly",
    "easy": 7,
    "medium": 19,
    "hard": 4
  },
  {
    "id": "duolingo",
    "name": "Duolingo",
    "easy": 0,
    "medium": 3,
    "hard": 2
  },
  {
    "id": "instacart",
    "name": "Instacart",
    "easy": 2,
    "medium": 6,
    "hard": 1
  },
  {
    "id": "expedia",
    "name": "Expedia",
    "easy": 13,
    "medium": 47,
    "hard": 9
  },
  {
    "id": "tripadvisor",
    "name": "Tripadvisor",
    "easy": 3,
    "medium": 2,
    "hard": 0
  },
  {
    "id": "booking",
    "name": "Booking.com",
    "easy": 2,
    "medium": 9,
    "hard": 4
  },
  {
    "id": "wayfair",
    "name": "Wayfair",
    "easy": 5,
    "medium": 12,
    "hard": 3
  },
  {
    "id": "chewy",
    "name": "Chewy",
    "easy": 2,
    "medium": 3,
    "hard": 0
  },
  {
    "id": "ebay",
    "name": "eBay",
    "easy": 10,
    "medium": 41,
    "hard": 13
  },
  {
    "id": "zillow",
    "name": "Zillow",
    "easy": 0,
    "medium": 1,
    "hard": 0
  },
  {
    "id": "nextdoor",
    "name": "Nextdoor",
    "easy": 0,
    "medium": 2,
    "hard": 1
  },
  {
    "id": "quora",
    "name": "Quora",
    "easy": 7,
    "medium": 9,
    "hard": 3
  },
  {
    "id": "tinder",
    "name": "Tinder",
    "easy": 1,
    "medium": 0,
    "hard": 2
  },
  {
    "id": "peloton",
    "name": "Peloton",
    "easy": 0,
    "medium": 1,
    "hard": 1
  },
  {
    "id": "grubhub",
    "name": "Grubhub",
    "easy": 0,
    "medium": 2,
    "hard": 0
  },
  {
    "id": "postmates",
    "name": "Postmates",
    "easy": 1,
    "medium": 2,
    "hard": 0
  },
  {
    "id": "yahoo",
    "name": "Yahoo",
    "easy": 10,
    "medium": 19,
    "hard": 3
  },
  {
    "id": "disney",
    "name": "Disney",
    "easy": 1,
    "medium": 9,
    "hard": 1
  },
  {
    "id": "warnermedia",
    "name": "Warnermedia",
    "easy": 2,
    "medium": 4,
    "hard": 1
  },
  {
    "id": "comcast",
    "name": "Comcast",
    "easy": 4,
    "medium": 2,
    "hard": 0
  },
  {
    "id": "hulu",
    "name": "Hulu",
    "easy": 0,
    "medium": 2,
    "hard": 3
  },
  {
    "id": "activision",
    "name": "Activision",
    "easy": 1,
    "medium": 2,
    "hard": 0
  },
  {
    "id": "riot",
    "name": "Riot Games",
    "easy": 1,
    "medium": 3,
    "hard": 1
  },
  {
    "id": "unity",
    "name": "Unity",
    "easy": 0,
    "medium": 2,
    "hard": 0
  },
  {
    "id": "nike",
    "name": "Nike",
    "easy": 3,
    "medium": 9,
    "hard": 2
  },
  {
    "id": "target",
    "name": "Target",
    "easy": 1,
    "medium": 4,
    "hard": 1
  },
  {
    "id": "walmart",
    "name": "Walmart Labs",
    "easy": 23,
    "medium": 102,
    "hard": 27
  },
  {
    "id": "lowes",
    "name": "Lowe's",
    "easy": 3,
    "medium": 1,
    "hard": 2
  },
  {
    "id": "nordstrom",
    "name": "Nordstrom",
    "easy": 0,
    "medium": 4,
    "hard": 0
  },
  {
    "id": "capitalone",
    "name": "Capital One",
    "easy": 13,
    "medium": 40,
    "hard": 10
  },
  {
    "id": "amex",
    "name": "American Express",
    "easy": 8,
    "medium": 13,
    "hard": 6
  },
  {
    "id": "mastercard",
    "name": "Mastercard",
    "easy": 5,
    "medium": 5,
    "hard": 2
  },
  {
    "id": "goldmansachs",
    "name": "Goldman Sachs",
    "easy": 46,
    "medium": 169,
    "hard": 49
  },
  {
    "id": "morganstanley",
    "name": "Morgan Stanley",
    "easy": 15,
    "medium": 38,
    "hard": 9
  },
  {
    "id": "citigroup",
    "name": "Citigroup",
    "easy": 2,
    "medium": 4,
    "hard": 1
  },
  {
    "id": "bofa",
    "name": "Bank of America",
    "easy": 2,
    "medium": 0,
    "hard": 0
  },
  {
    "id": "wellsfargo",
    "name": "Wells Fargo",
    "easy": 9,
    "medium": 9,
    "hard": 2
  },
  {
    "id": "blackrock",
    "name": "BlackRock",
    "easy": 6,
    "medium": 10,
    "hard": 1
  },
  {
    "id": "citadel",
    "name": "Citadel",
    "easy": 6,
    "medium": 51,
    "hard": 30
  },
  {
    "id": "janestreet",
    "name": "Jane Street",
    "easy": 7,
    "medium": 4,
    "hard": 3
  },
  {
    "id": "twosigma",
    "name": "Two Sigma",
    "easy": 3,
    "medium": 11,
    "hard": 5
  },
  {
    "id": "deshaw",
    "name": "DE Shaw",
    "easy": 14,
    "medium": 71,
    "hard": 31
  },
  {
    "id": "point72",
    "name": "Point72",
    "easy": 3,
    "medium": 3,
    "hard": 0
  },
  {
    "id": "optiver",
    "name": "Optiver",
    "easy": 2,
    "medium": 4,
    "hard": 1
  },
  {
    "id": "drw",
    "name": "DRW",
    "easy": 1,
    "medium": 2,
    "hard": 0
  },
  {
    "id": "samsung",
    "name": "Samsung",
    "easy": 11,
    "medium": 33,
    "hard": 18
  },
  {
    "id": "sony",
    "name": "Sony",
    "easy": 3,
    "medium": 1,
    "hard": 1
  },
  {
    "id": "huawei",
    "name": "Huawei",
    "easy": 5,
    "medium": 9,
    "hard": 3
  },
  {
    "id": "qualcomm",
    "name": "Qualcomm",
    "easy": 26,
    "medium": 20,
    "hard": 7
  },
  {
    "id": "amd",
    "name": "AMD",
    "easy": 8,
    "medium": 9,
    "hard": 0
  },
  {
    "id": "ti",
    "name": "Texas Instruments",
    "easy": 0,
    "medium": 3,
    "hard": 1
  },
  {
    "id": "dell",
    "name": "Dell",
    "easy": 7,
    "medium": 5,
    "hard": 2
  },
  {
    "id": "hp",
    "name": "HP",
    "easy": 3,
    "medium": 2,
    "hard": 0
  },
  {
    "id": "vmware",
    "name": "VMware",
    "easy": 0,
    "medium": 5,
    "hard": 2
  },
  {
    "id": "autodesk",
    "name": "Autodesk",
    "easy": 8,
    "medium": 16,
    "hard": 7
  },
  {
    "id": "intuit",
    "name": "Intuit",
    "easy": 9,
    "medium": 34,
    "hard": 19
  },
  {
    "id": "godaddy",
    "name": "GoDaddy",
    "easy": 2,
    "medium": 2,
    "hard": 1
  },
  {
    "id": "squarespace",
    "name": "Squarespace",
    "easy": 3,
    "medium": 2,
    "hard": 0
  },
  {
    "id": "wix",
    "name": "Wix",
    "easy": 17,
    "medium": 31,
    "hard": 8
  },
  {
    "id": "docusign",
    "name": "Docusign",
    "easy": 3,
    "medium": 23,
    "hard": 7
  },
  {
    "id": "cloudflare",
    "name": "Cloudflare",
    "easy": 1,
    "medium": 8,
    "hard": 2
  },
  {
    "id": "paloalto",
    "name": "Palo Alto Networks",
    "easy": 12,
    "medium": 30,
    "hard": 7
  },
  {
    "id": "crowdstrike",
    "name": "CrowdStrike",
    "easy": 2,
    "medium": 8,
    "hard": 1
  },
  {
    "id": "fortinet",
    "name": "Fortinet",
    "easy": 2,
    "medium": 1,
    "hard": 1
  },
  {
    "id": "sap",
    "name": "SAP",
    "easy": 15,
    "medium": 20,
    "hard": 7
  },
  {
    "id": "siemens",
    "name": "Siemens",
    "easy": 6,
    "medium": 12,
    "hard": 3
  },
  {
    "id": "ge",
    "name": "GE Digital",
    "easy": 1,
    "medium": 2,
    "hard": 0
  },
  {
    "id": "honeywell",
    "name": "Honeywell",
    "easy": 2,
    "medium": 2,
    "hard": 0
  },
  {
    "id": "tesla",
    "name": "Tesla",
    "easy": 10,
    "medium": 26,
    "hard": 6
  },
  {
    "id": "rivian",
    "name": "Rivian",
    "easy": 2,
    "medium": 6,
    "hard": 1
  },
  {
    "id": "waymo",
    "name": "Waymo",
    "easy": 1,
    "medium": 16,
    "hard": 12
  },
  {
    "id": "cruise",
    "name": "Cruise",
    "easy": 0,
    "medium": 2,
    "hard": 0
  },
  {
    "id": "sofi",
    "name": "SoFi",
    "easy": 1,
    "medium": 9,
    "hard": 5
  },
  {
    "id": "chime",
    "name": "Chime",
    "easy": 0,
    "medium": 3,
    "hard": 0
  },
  {
    "id": "affirm",
    "name": "Affirm",
    "easy": 1,
    "medium": 6,
    "hard": 3
  },
  {
    "id": "upstart",
    "name": "Upstart",
    "easy": 0,
    "medium": 6,
    "hard": 0
  },
  {
    "id": "wealthfront",
    "name": "Wealthfront",
    "easy": 0,
    "medium": 1,
    "hard": 0
  },
  {
    "id": "fiverr",
    "name": "Fiverr",
    "easy": 0,
    "medium": 2,
    "hard": 0
  },
  {
    "id": "toptal",
    "name": "Toptal",
    "easy": 0,
    "medium": 2,
    "hard": 1
  },
  {
    "id": "alibaba",
    "name": "Alibaba",
    "easy": 0,
    "medium": 4,
    "hard": 1
  },
  {
    "id": "baidu",
    "name": "Baidu",
    "easy": 0,
    "medium": 6,
    "hard": 5
  },
  {
    "id": "tencent",
    "name": "Tencent",
    "easy": 0,
    "medium": 2,
    "hard": 1
  },
  {
    "id": "bytedance",
    "name": "ByteDance",
    "easy": 4,
    "medium": 51,
    "hard": 8
  },
  {
    "id": "grab",
    "name": "Grab",
    "easy": 3,
    "medium": 12,
    "hard": 0
  },
  {
    "id": "shopee",
    "name": "Shopee",
    "easy": 0,
    "medium": 6,
    "hard": 1
  },
  {
    "id": "rakuten",
    "name": "Rakuten",
    "easy": 1,
    "medium": 5,
    "hard": 1
  },
  {
    "id": "coupang",
    "name": "Coupang",
    "easy": 3,
    "medium": 32,
    "hard": 13
  },
  {
    "id": "yandex",
    "name": "Yandex",
    "easy": 51,
    "medium": 71,
    "hard": 9
  },
  {
    "id": "revolut",
    "name": "Revolut",
    "easy": 3,
    "medium": 9,
    "hard": 0
  },
  {
    "id": "wise",
    "name": "Wise",
    "easy": 1,
    "medium": 5,
    "hard": 0
  },
  {
    "id": "makemytrip",
    "name": "MakeMyTrip",
    "easy": 0,
    "medium": 14,
    "hard": 5
  },
  {
    "id": "myntra",
    "name": "Myntra",
    "easy": 4,
    "medium": 14,
    "hard": 2
  },
  {
    "id": "meesho",
    "name": "Meesho",
    "easy": 1,
    "medium": 21,
    "hard": 18
  },
  {
    "id": "nykaa",
    "name": "Nykaa",
    "easy": 0,
    "medium": 3,
    "hard": 1
  },
  {
    "id": "lenskart",
    "name": "Lenskart",
    "easy": 0,
    "medium": 0,
    "hard": 1
  },
  {
    "id": "groww",
    "name": "Groww",
    "easy": 1,
    "medium": 5,
    "hard": 1
  },
  {
    "id": "cred",
    "name": "CRED",
    "easy": 1,
    "medium": 1,
    "hard": 0
  },
  {
    "id": "phonepe",
    "name": "PhonePe",
    "easy": 3,
    "medium": 55,
    "hard": 37
  },
  {
    "id": "dream11",
    "name": "Dream11",
    "easy": 1,
    "medium": 10,
    "hard": 1
  },
  {
    "id": "urbancompany",
    "name": "Urban Company",
    "easy": 0,
    "medium": 5,
    "hard": 2
  },
  {
    "id": "delhivery",
    "name": "Delhivery",
    "easy": 1,
    "medium": 3,
    "hard": 0
  },
  {
    "id": "infoedge",
    "name": "Info Edge",
    "easy": 1,
    "medium": 6,
    "hard": 1
  },
  {
    "id": "zepto",
    "name": "Zepto",
    "easy": 1,
    "medium": 18,
    "hard": 2
  },
  {
    "id": "cognizant",
    "name": "Cognizant",
    "easy": 30,
    "medium": 15,
    "hard": 2
  },
  {
    "id": "capgemini",
    "name": "Capgemini",
    "easy": 17,
    "medium": 17,
    "hard": 2
  },
  {
    "id": "hcl",
    "name": "HCL",
    "easy": 9,
    "medium": 7,
    "hard": 2
  },
  {
    "id": "deloitte",
    "name": "Deloitte",
    "easy": 17,
    "medium": 24,
    "hard": 3
  },
  {
    "id": "ey",
    "name": "EY",
    "easy": 1,
    "medium": 1,
    "hard": 0
  },
  {
    "id": "pwc",
    "name": "Pwc",
    "easy": 3,
    "medium": 0,
    "hard": 1
  },
  {
    "id": "mckinsey",
    "name": "McKinsey",
    "easy": 0,
    "medium": 2,
    "hard": 0
  },
  {
    "id": "thoughtworks",
    "name": "ThoughtWorks",
    "easy": 2,
    "medium": 0,
    "hard": 1
  },
  {
    "id": "publicissapient",
    "name": "Publicis Sapient",
    "easy": 2,
    "medium": 5,
    "hard": 2
  },
  {
    "id": "zoho",
    "name": "Zoho",
    "easy": 55,
    "medium": 84,
    "hard": 16
  }
];

const PROBLEMS = {
  "google": [
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Add Two Numbers",
      "difficulty": "Medium",
      "topic": "Linked List, Math, Recursion",
      "freq": 78.6,
      "link": "https://leetcode.com/problems/add-two-numbers"
    },
    {
      "title": "Median of Two Sorted Arrays",
      "difficulty": "Hard",
      "topic": "Array, Binary Search, Divide and Conquer",
      "freq": 73.9,
      "link": "https://leetcode.com/problems/median-of-two-sorted-arrays"
    },
    {
      "title": "Trapping Rain Water",
      "difficulty": "Hard",
      "topic": "Array, Two Pointers, Dynamic Programming, Stack, Monotonic Stack",
      "freq": 73.9,
      "link": "https://leetcode.com/problems/trapping-rain-water"
    },
    {
      "title": "Longest Common Prefix",
      "difficulty": "Easy",
      "topic": "Array, String, Trie",
      "freq": 73.2,
      "link": "https://leetcode.com/problems/longest-common-prefix"
    },
    {
      "title": "Palindrome Number",
      "difficulty": "Easy",
      "topic": "Math",
      "freq": 73.2,
      "link": "https://leetcode.com/problems/palindrome-number"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 72.5,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    },
    {
      "title": "3Sum",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Sorting",
      "freq": 72.3,
      "link": "https://leetcode.com/problems/3sum"
    },
    {
      "title": "Best Time to Buy and Sell Stock",
      "difficulty": "Easy",
      "topic": "Array, Dynamic Programming",
      "freq": 71.7,
      "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock"
    },
    {
      "title": "Merge Sorted Array",
      "difficulty": "Easy",
      "topic": "Array, Two Pointers, Sorting",
      "freq": 71.4,
      "link": "https://leetcode.com/problems/merge-sorted-array"
    },
    {
      "title": "Longest Consecutive Sequence",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Union-Find",
      "freq": 69.6,
      "link": "https://leetcode.com/problems/longest-consecutive-sequence"
    },
    {
      "title": "Merge Strings Alternately",
      "difficulty": "Easy",
      "topic": "Two Pointers, String",
      "freq": 69.5,
      "link": "https://leetcode.com/problems/merge-strings-alternately"
    }
  ],
  "amazon": [
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 88.5,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Trapping Rain Water",
      "difficulty": "Hard",
      "topic": "Array, Two Pointers, Dynamic Programming, Stack, Monotonic Stack",
      "freq": 88.0,
      "link": "https://leetcode.com/problems/trapping-rain-water"
    },
    {
      "title": "Number of Islands",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Union-Find, Matrix",
      "freq": 85.6,
      "link": "https://leetcode.com/problems/number-of-islands"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 84.5,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    },
    {
      "title": "Best Time to Buy and Sell Stock",
      "difficulty": "Easy",
      "topic": "Array, Dynamic Programming",
      "freq": 83.8,
      "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock"
    },
    {
      "title": "Group Anagrams",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Sorting",
      "freq": 80.6,
      "link": "https://leetcode.com/problems/group-anagrams"
    },
    {
      "title": "Add Two Numbers",
      "difficulty": "Medium",
      "topic": "Linked List, Math, Recursion",
      "freq": 79.7,
      "link": "https://leetcode.com/problems/add-two-numbers"
    },
    {
      "title": "Longest Palindromic Substring",
      "difficulty": "Medium",
      "topic": "Two Pointers, String, Dynamic Programming, Manacher",
      "freq": 78.5,
      "link": "https://leetcode.com/problems/longest-palindromic-substring"
    },
    {
      "title": "3Sum",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Sorting",
      "freq": 78.3,
      "link": "https://leetcode.com/problems/3sum"
    },
    {
      "title": "Reorganize String",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Greedy, Sorting, Heap (Priority Queue), Counting",
      "freq": 78.3,
      "link": "https://leetcode.com/problems/reorganize-string"
    },
    {
      "title": "Median of Two Sorted Arrays",
      "difficulty": "Hard",
      "topic": "Array, Binary Search, Divide and Conquer",
      "freq": 76.8,
      "link": "https://leetcode.com/problems/median-of-two-sorted-arrays"
    }
  ],
  "meta": [
    {
      "title": "Minimum Remove to Make Valid Parentheses",
      "difficulty": "Medium",
      "topic": "String, Stack",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses"
    },
    {
      "title": "Valid Word Abbreviation",
      "difficulty": "Easy",
      "topic": "Two Pointers, String",
      "freq": 96.8,
      "link": "https://leetcode.com/problems/valid-word-abbreviation"
    },
    {
      "title": "Valid Palindrome II",
      "difficulty": "Easy",
      "topic": "Two Pointers, String, Greedy",
      "freq": 95.1,
      "link": "https://leetcode.com/problems/valid-palindrome-ii"
    },
    {
      "title": "Binary Tree Vertical Order Traversal",
      "difficulty": "Medium",
      "topic": "Hash Table, Tree, Depth-First Search, Breadth-First Search, Sorting, Binary Tree",
      "freq": 93.4,
      "link": "https://leetcode.com/problems/binary-tree-vertical-order-traversal"
    },
    {
      "title": "Kth Largest Element in an Array",
      "difficulty": "Medium",
      "topic": "Array, Divide and Conquer, Sorting, Heap (Priority Queue), Quickselect",
      "freq": 93.3,
      "link": "https://leetcode.com/problems/kth-largest-element-in-an-array"
    },
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 90.2,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Basic Calculator II",
      "difficulty": "Medium",
      "topic": "Math, String, Stack",
      "freq": 89.3,
      "link": "https://leetcode.com/problems/basic-calculator-ii"
    },
    {
      "title": "Lowest Common Ancestor of a Binary Tree III",
      "difficulty": "Medium",
      "topic": "Hash Table, Two Pointers, Tree, Binary Tree, Binary Lifting, Lowest Common Ancestor",
      "freq": 88.5,
      "link": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii"
    },
    {
      "title": "Nested List Weight Sum",
      "difficulty": "Medium",
      "topic": "Depth-First Search, Breadth-First Search",
      "freq": 87.9,
      "link": "https://leetcode.com/problems/nested-list-weight-sum"
    },
    {
      "title": "Random Pick with Weight",
      "difficulty": "Medium",
      "topic": "Array, Math, Binary Search, Prefix Sum, Randomized",
      "freq": 87.7,
      "link": "https://leetcode.com/problems/random-pick-with-weight"
    },
    {
      "title": "Subarray Sum Equals K",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Prefix Sum",
      "freq": 87.2,
      "link": "https://leetcode.com/problems/subarray-sum-equals-k"
    },
    {
      "title": "Diameter of Binary Tree",
      "difficulty": "Easy",
      "topic": "Tree, Depth-First Search, Binary Tree, DP on Trees",
      "freq": 86.8,
      "link": "https://leetcode.com/problems/diameter-of-binary-tree"
    }
  ],
  "microsoft": [
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Add Two Numbers",
      "difficulty": "Medium",
      "topic": "Linked List, Math, Recursion",
      "freq": 81.4,
      "link": "https://leetcode.com/problems/add-two-numbers"
    },
    {
      "title": "Longest Palindromic Substring",
      "difficulty": "Medium",
      "topic": "Two Pointers, String, Dynamic Programming, Manacher",
      "freq": 80.5,
      "link": "https://leetcode.com/problems/longest-palindromic-substring"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 79.7,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    },
    {
      "title": "Trapping Rain Water",
      "difficulty": "Hard",
      "topic": "Array, Two Pointers, Dynamic Programming, Stack, Monotonic Stack",
      "freq": 78.7,
      "link": "https://leetcode.com/problems/trapping-rain-water"
    },
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 77.9,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Best Time to Buy and Sell Stock",
      "difficulty": "Easy",
      "topic": "Array, Dynamic Programming",
      "freq": 77.7,
      "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock"
    },
    {
      "title": "Median of Two Sorted Arrays",
      "difficulty": "Hard",
      "topic": "Array, Binary Search, Divide and Conquer",
      "freq": 75.2,
      "link": "https://leetcode.com/problems/median-of-two-sorted-arrays"
    },
    {
      "title": "3Sum",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Sorting",
      "freq": 74.9,
      "link": "https://leetcode.com/problems/3sum"
    },
    {
      "title": "Maximum Subarray",
      "difficulty": "Medium",
      "topic": "Array, Divide and Conquer, Dynamic Programming",
      "freq": 74.9,
      "link": "https://leetcode.com/problems/maximum-subarray"
    },
    {
      "title": "Merge Sorted Array",
      "difficulty": "Easy",
      "topic": "Array, Two Pointers, Sorting",
      "freq": 74.3,
      "link": "https://leetcode.com/problems/merge-sorted-array"
    },
    {
      "title": "Number of Islands",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Union-Find, Matrix",
      "freq": 73.3,
      "link": "https://leetcode.com/problems/number-of-islands"
    }
  ],
  "apple": [
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 86.9,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Quicksort",
      "freq": 84.5,
      "link": "https://leetcode.com/problems/merge-intervals"
    },
    {
      "title": "Number of Islands",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Union-Find, Matrix",
      "freq": 84.5,
      "link": "https://leetcode.com/problems/number-of-islands"
    },
    {
      "title": "Best Time to Buy and Sell Stock",
      "difficulty": "Easy",
      "topic": "Array, Dynamic Programming",
      "freq": 79.3,
      "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock"
    },
    {
      "title": "Design Hit Counter",
      "difficulty": "Medium",
      "topic": "Array, Binary Search, Design, Queue, Data Stream",
      "freq": 79.3,
      "link": "https://leetcode.com/problems/design-hit-counter"
    },
    {
      "title": "Rotate Array",
      "difficulty": "Medium",
      "topic": "Array, Math, Two Pointers",
      "freq": 78.2,
      "link": "https://leetcode.com/problems/rotate-array"
    },
    {
      "title": "Group Anagrams",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Sorting",
      "freq": 77.6,
      "link": "https://leetcode.com/problems/group-anagrams"
    },
    {
      "title": "Top K Frequent Elements",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Divide and Conquer, Sorting, Heap (Priority Queue), Bucket Sort, Counting, Quickselect",
      "freq": 77.0,
      "link": "https://leetcode.com/problems/top-k-frequent-elements"
    },
    {
      "title": "Longest Common Prefix",
      "difficulty": "Easy",
      "topic": "Array, String, Trie",
      "freq": 76.4,
      "link": "https://leetcode.com/problems/longest-common-prefix"
    },
    {
      "title": "Valid Sudoku",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Matrix",
      "freq": 75.8,
      "link": "https://leetcode.com/problems/valid-sudoku"
    },
    {
      "title": "Reverse Linked List",
      "difficulty": "Easy",
      "topic": "Linked List, Recursion",
      "freq": 75.8,
      "link": "https://leetcode.com/problems/reverse-linked-list"
    }
  ],
  "bloomberg": [
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Quicksort",
      "freq": 87.1,
      "link": "https://leetcode.com/problems/merge-intervals"
    },
    {
      "title": "Add Two Numbers",
      "difficulty": "Medium",
      "topic": "Linked List, Math, Recursion",
      "freq": 85.2,
      "link": "https://leetcode.com/problems/add-two-numbers"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 85.1,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    },
    {
      "title": "Number of Islands",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Union-Find, Matrix",
      "freq": 84.7,
      "link": "https://leetcode.com/problems/number-of-islands"
    },
    {
      "title": "Insert Delete GetRandom O(1)",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Math, Design, Randomized",
      "freq": 84.7,
      "link": "https://leetcode.com/problems/insert-delete-getrandom-o1"
    },
    {
      "title": "Best Time to Buy and Sell Stock",
      "difficulty": "Easy",
      "topic": "Array, Dynamic Programming",
      "freq": 83.9,
      "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock"
    },
    {
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "topic": "String, Stack, Bracket Sequences",
      "freq": 83.8,
      "link": "https://leetcode.com/problems/valid-parentheses"
    },
    {
      "title": "Trapping Rain Water",
      "difficulty": "Hard",
      "topic": "Array, Two Pointers, Dynamic Programming, Stack, Monotonic Stack",
      "freq": 80.9,
      "link": "https://leetcode.com/problems/trapping-rain-water"
    },
    {
      "title": "Longest Palindromic Substring",
      "difficulty": "Medium",
      "topic": "Two Pointers, String, Dynamic Programming, Manacher",
      "freq": 79.6,
      "link": "https://leetcode.com/problems/longest-palindromic-substring"
    },
    {
      "title": "3Sum",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Sorting",
      "freq": 79.6,
      "link": "https://leetcode.com/problems/3sum"
    },
    {
      "title": "Invalid Transactions",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Sorting",
      "freq": 78.7,
      "link": "https://leetcode.com/problems/invalid-transactions"
    }
  ],
  "uber": [
    {
      "title": "Bus Routes",
      "difficulty": "Hard",
      "topic": "Array, Hash Table, Breadth-First Search",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/bus-routes"
    },
    {
      "title": "Alien Dictionary",
      "difficulty": "Hard",
      "topic": "Array, String, Depth-First Search, Breadth-First Search, Graph Theory, Topological Sort, Directed Acyclic Graph",
      "freq": 95.2,
      "link": "https://leetcode.com/problems/alien-dictionary"
    },
    {
      "title": "Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit",
      "difficulty": "Medium",
      "topic": "Array, Queue, Sliding Window, Heap (Priority Queue), Ordered Set, Monotonic Queue",
      "freq": 94.4,
      "link": "https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit"
    },
    {
      "title": "Number of Islands",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Union-Find, Matrix",
      "freq": 89.9,
      "link": "https://leetcode.com/problems/number-of-islands"
    },
    {
      "title": "Number of Islands II",
      "difficulty": "Hard",
      "topic": "Array, Hash Table, Union-Find",
      "freq": 89.9,
      "link": "https://leetcode.com/problems/number-of-islands-ii"
    },
    {
      "title": "Construct Quad Tree",
      "difficulty": "Medium",
      "topic": "Array, Divide and Conquer, Tree, Matrix",
      "freq": 87.0,
      "link": "https://leetcode.com/problems/construct-quad-tree"
    },
    {
      "title": "Squares of a Sorted Array",
      "difficulty": "Easy",
      "topic": "Array, Two Pointers, Sorting",
      "freq": 85.8,
      "link": "https://leetcode.com/problems/squares-of-a-sorted-array"
    },
    {
      "title": "First Unique Number",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Design, Queue, Data Stream",
      "freq": 83.2,
      "link": "https://leetcode.com/problems/first-unique-number"
    },
    {
      "title": "Kth Smallest Element in a BST",
      "difficulty": "Medium",
      "topic": "Tree, Depth-First Search, Binary Search Tree, Binary Tree",
      "freq": 82.3,
      "link": "https://leetcode.com/problems/kth-smallest-element-in-a-bst"
    },
    {
      "title": "Find the Closest Palindrome",
      "difficulty": "Hard",
      "topic": "Math, String",
      "freq": 80.8,
      "link": "https://leetcode.com/problems/find-the-closest-palindrome"
    },
    {
      "title": "Word Search",
      "difficulty": "Medium",
      "topic": "Array, String, Backtracking, Depth-First Search, Matrix",
      "freq": 78.0,
      "link": "https://leetcode.com/problems/word-search"
    },
    {
      "title": "Minimum Edge Reversals So Every Node Is Reachable",
      "difficulty": "Hard",
      "topic": "Dynamic Programming, Depth-First Search, Breadth-First Search, Graph Theory",
      "freq": 76.8,
      "link": "https://leetcode.com/problems/minimum-edge-reversals-so-every-node-is-reachable"
    }
  ],
  "tiktok": [
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Number of Islands",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Union-Find, Matrix",
      "freq": 97.3,
      "link": "https://leetcode.com/problems/number-of-islands"
    },
    {
      "title": "Longest Increasing Subsequence",
      "difficulty": "Medium",
      "topic": "Array, Binary Search, Dynamic Programming, Longest Increasing Subsequence",
      "freq": 89.7,
      "link": "https://leetcode.com/problems/longest-increasing-subsequence"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 87.2,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    },
    {
      "title": "Number of Distinct Islands",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Depth-First Search, Breadth-First Search, Union-Find, Sorting, Matrix, Hash Function",
      "freq": 86.6,
      "link": "https://leetcode.com/problems/number-of-distinct-islands"
    },
    {
      "title": "Course Schedule II",
      "difficulty": "Medium",
      "topic": "Depth-First Search, Breadth-First Search, Graph Theory, Topological Sort",
      "freq": 85.9,
      "link": "https://leetcode.com/problems/course-schedule-ii"
    },
    {
      "title": "Meeting Rooms II",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Greedy, Sorting, Heap (Priority Queue), Prefix Sum",
      "freq": 83.8,
      "link": "https://leetcode.com/problems/meeting-rooms-ii"
    },
    {
      "title": "Trapping Rain Water",
      "difficulty": "Hard",
      "topic": "Array, Two Pointers, Dynamic Programming, Stack, Monotonic Stack",
      "freq": 83.0,
      "link": "https://leetcode.com/problems/trapping-rain-water"
    },
    {
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Quicksort",
      "freq": 83.0,
      "link": "https://leetcode.com/problems/merge-intervals"
    },
    {
      "title": "Course Schedule",
      "difficulty": "Medium",
      "topic": "Depth-First Search, Breadth-First Search, Graph Theory, Topological Sort, Directed Acyclic Graph",
      "freq": 82.3,
      "link": "https://leetcode.com/problems/course-schedule"
    },
    {
      "title": "Text Justification",
      "difficulty": "Hard",
      "topic": "Array, String, Simulation",
      "freq": 79.7,
      "link": "https://leetcode.com/problems/text-justification"
    },
    {
      "title": "Decode String",
      "difficulty": "Medium",
      "topic": "String, Stack, Recursion",
      "freq": 75.8,
      "link": "https://leetcode.com/problems/decode-string"
    }
  ],
  "netflix": [
    {
      "title": "Cache With Time Limit",
      "difficulty": "Medium",
      "topic": "General",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/cache-with-time-limit"
    },
    {
      "title": "Time Based Key-Value Store",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Binary Search, Design",
      "freq": 91.5,
      "link": "https://leetcode.com/problems/time-based-key-value-store"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 89.7,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    },
    {
      "title": "Course Schedule II",
      "difficulty": "Medium",
      "topic": "Depth-First Search, Breadth-First Search, Graph Theory, Topological Sort",
      "freq": 87.7,
      "link": "https://leetcode.com/problems/course-schedule-ii"
    },
    {
      "title": "Reconstruct Itinerary",
      "difficulty": "Hard",
      "topic": "Array, String, Depth-First Search, Graph Theory, Sorting, Heap (Priority Queue), Eulerian Circuit, Eulerian Path, Semi-Eulerian Graph",
      "freq": 87.7,
      "link": "https://leetcode.com/problems/reconstruct-itinerary"
    },
    {
      "title": "Contains Duplicate III",
      "difficulty": "Hard",
      "topic": "Array, Sliding Window, Sorting, Bucket Sort, Ordered Set",
      "freq": 87.7,
      "link": "https://leetcode.com/problems/contains-duplicate-iii"
    },
    {
      "title": "Meeting Rooms II",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Greedy, Sorting, Heap (Priority Queue), Prefix Sum",
      "freq": 85.5,
      "link": "https://leetcode.com/problems/meeting-rooms-ii"
    },
    {
      "title": "Logger Rate Limiter",
      "difficulty": "Easy",
      "topic": "Hash Table, Design, Data Stream",
      "freq": 85.5,
      "link": "https://leetcode.com/problems/logger-rate-limiter"
    },
    {
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Quicksort",
      "freq": 83.2,
      "link": "https://leetcode.com/problems/merge-intervals"
    },
    {
      "title": "Parallel Courses",
      "difficulty": "Medium",
      "topic": "Graph Theory, Topological Sort, Directed Acyclic Graph",
      "freq": 80.5,
      "link": "https://leetcode.com/problems/parallel-courses"
    },
    {
      "title": "Contains Duplicate II",
      "difficulty": "Easy",
      "topic": "Array, Hash Table, Sliding Window",
      "freq": 74.1,
      "link": "https://leetcode.com/problems/contains-duplicate-ii"
    },
    {
      "title": "Word Search",
      "difficulty": "Medium",
      "topic": "Array, String, Backtracking, Depth-First Search, Matrix",
      "freq": 74.1,
      "link": "https://leetcode.com/problems/word-search"
    }
  ],
  "linkedin": [
    {
      "title": "Max Stack",
      "difficulty": "Hard",
      "topic": "Linked List, Stack, Design, Doubly-Linked List, Ordered Set",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/max-stack"
    },
    {
      "title": "Nested List Weight Sum II",
      "difficulty": "Medium",
      "topic": "Stack, Depth-First Search, Breadth-First Search",
      "freq": 95.4,
      "link": "https://leetcode.com/problems/nested-list-weight-sum-ii"
    },
    {
      "title": "All O`one Data Structure",
      "difficulty": "Hard",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 93.8,
      "link": "https://leetcode.com/problems/all-oone-data-structure"
    },
    {
      "title": "Max Consecutive Ones III",
      "difficulty": "Medium",
      "topic": "Array, Binary Search, Sliding Window, Prefix Sum",
      "freq": 83.2,
      "link": "https://leetcode.com/problems/max-consecutive-ones-iii"
    },
    {
      "title": "Shortest Word Distance II",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Two Pointers, String, Design",
      "freq": 82.3,
      "link": "https://leetcode.com/problems/shortest-word-distance-ii"
    },
    {
      "title": "Find the Celebrity",
      "difficulty": "Medium",
      "topic": "Two Pointers, Graph Theory, Interactive",
      "freq": 80.7,
      "link": "https://leetcode.com/problems/find-the-celebrity"
    },
    {
      "title": "Maximum Subarray",
      "difficulty": "Medium",
      "topic": "Array, Divide and Conquer, Dynamic Programming",
      "freq": 80.4,
      "link": "https://leetcode.com/problems/maximum-subarray"
    },
    {
      "title": "Nested List Weight Sum",
      "difficulty": "Medium",
      "topic": "Depth-First Search, Breadth-First Search",
      "freq": 79.7,
      "link": "https://leetcode.com/problems/nested-list-weight-sum"
    },
    {
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "topic": "String, Stack, Bracket Sequences",
      "freq": 79.0,
      "link": "https://leetcode.com/problems/valid-parentheses"
    },
    {
      "title": "Word Ladder",
      "difficulty": "Hard",
      "topic": "Hash Table, String, Breadth-First Search, Bidirectional Search",
      "freq": 79.0,
      "link": "https://leetcode.com/problems/word-ladder"
    },
    {
      "title": "Find Leaves of Binary Tree",
      "difficulty": "Medium",
      "topic": "Tree, Depth-First Search, Binary Tree, DP on Trees",
      "freq": 76.7,
      "link": "https://leetcode.com/problems/find-leaves-of-binary-tree"
    },
    {
      "title": "Insert Delete GetRandom O(1)",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Math, Design, Randomized",
      "freq": 75.8,
      "link": "https://leetcode.com/problems/insert-delete-getrandom-o1"
    }
  ],
  "adobe": [
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Group Anagrams",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Sorting",
      "freq": 95.1,
      "link": "https://leetcode.com/problems/group-anagrams"
    },
    {
      "title": "Special Binary String",
      "difficulty": "Hard",
      "topic": "String, Divide and Conquer, Sorting",
      "freq": 95.1,
      "link": "https://leetcode.com/problems/special-binary-string"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 91.3,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    },
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 89.1,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Add Two Numbers",
      "difficulty": "Medium",
      "topic": "Linked List, Math, Recursion",
      "freq": 86.8,
      "link": "https://leetcode.com/problems/add-two-numbers"
    },
    {
      "title": "Median of Two Sorted Arrays",
      "difficulty": "Hard",
      "topic": "Array, Binary Search, Divide and Conquer",
      "freq": 86.8,
      "link": "https://leetcode.com/problems/median-of-two-sorted-arrays"
    },
    {
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Quicksort",
      "freq": 86.8,
      "link": "https://leetcode.com/problems/merge-intervals"
    },
    {
      "title": "Majority Element",
      "difficulty": "Easy",
      "topic": "Array, Hash Table, Divide and Conquer, Sorting, Counting, Boyer\u2013Moore Majority Vote Algorithm",
      "freq": 86.8,
      "link": "https://leetcode.com/problems/majority-element"
    },
    {
      "title": "3Sum",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Sorting",
      "freq": 84.3,
      "link": "https://leetcode.com/problems/3sum"
    },
    {
      "title": "Climbing Stairs",
      "difficulty": "Easy",
      "topic": "Math, Dynamic Programming, Memoization",
      "freq": 84.3,
      "link": "https://leetcode.com/problems/climbing-stairs"
    },
    {
      "title": "Reverse Linked List",
      "difficulty": "Easy",
      "topic": "Linked List, Recursion",
      "freq": 84.3,
      "link": "https://leetcode.com/problems/reverse-linked-list"
    }
  ],
  "salesforce": [
    {
      "title": "Minimum Operations to Reduce an Integer to 0",
      "difficulty": "Medium",
      "topic": "Dynamic Programming, Greedy, Bit Manipulation",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0"
    },
    {
      "title": "String Compression",
      "difficulty": "Medium",
      "topic": "Two Pointers, String",
      "freq": 88.1,
      "link": "https://leetcode.com/problems/string-compression"
    },
    {
      "title": "Time Needed to Rearrange a Binary String",
      "difficulty": "Medium",
      "topic": "String, Dynamic Programming, Simulation",
      "freq": 79.6,
      "link": "https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string"
    },
    {
      "title": "LFU Cache",
      "difficulty": "Hard",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 78.9,
      "link": "https://leetcode.com/problems/lfu-cache"
    },
    {
      "title": "Closest Equal Element Queries",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Binary Search",
      "freq": 75.5,
      "link": "https://leetcode.com/problems/closest-equal-element-queries"
    },
    {
      "title": "Smallest Substring With Identical Characters I",
      "difficulty": "Hard",
      "topic": "Array, Binary Search, Enumeration",
      "freq": 71.5,
      "link": "https://leetcode.com/problems/smallest-substring-with-identical-characters-i"
    },
    {
      "title": "Smallest Substring With Identical Characters II",
      "difficulty": "Hard",
      "topic": "String, Binary Search",
      "freq": 71.5,
      "link": "https://leetcode.com/problems/smallest-substring-with-identical-characters-ii"
    },
    {
      "title": "Maximum Product of Three Numbers",
      "difficulty": "Easy",
      "topic": "Array, Math, Sorting",
      "freq": 67.8,
      "link": "https://leetcode.com/problems/maximum-product-of-three-numbers"
    },
    {
      "title": "Remove Adjacent Almost-Equal Characters",
      "difficulty": "Medium",
      "topic": "String, Dynamic Programming, Greedy",
      "freq": 67.8,
      "link": "https://leetcode.com/problems/remove-adjacent-almost-equal-characters"
    },
    {
      "title": "Subarray Product Less Than K",
      "difficulty": "Medium",
      "topic": "Array, Binary Search, Sliding Window, Prefix Sum",
      "freq": 66.4,
      "link": "https://leetcode.com/problems/subarray-product-less-than-k"
    },
    {
      "title": "Minimize Malware Spread",
      "difficulty": "Hard",
      "topic": "Array, Hash Table, Depth-First Search, Breadth-First Search, Union-Find, Graph Theory",
      "freq": 66.4,
      "link": "https://leetcode.com/problems/minimize-malware-spread"
    },
    {
      "title": "Maximum Number of Occurrences of a Substring",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 66.4,
      "link": "https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring"
    }
  ],
  "oracle": [
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 84.7,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    },
    {
      "title": "Number of Islands",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Union-Find, Matrix",
      "freq": 84.1,
      "link": "https://leetcode.com/problems/number-of-islands"
    },
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 82.2,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Group Anagrams",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Sorting",
      "freq": 81.6,
      "link": "https://leetcode.com/problems/group-anagrams"
    },
    {
      "title": "Top K Frequent Elements",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Divide and Conquer, Sorting, Heap (Priority Queue), Bucket Sort, Counting, Quickselect",
      "freq": 76.2,
      "link": "https://leetcode.com/problems/top-k-frequent-elements"
    },
    {
      "title": "Merge k Sorted Lists",
      "difficulty": "Hard",
      "topic": "Linked List, Divide and Conquer, Heap (Priority Queue), Merge Sort, Tournament Sort",
      "freq": 74.4,
      "link": "https://leetcode.com/problems/merge-k-sorted-lists"
    },
    {
      "title": "Sliding Window Maximum",
      "difficulty": "Hard",
      "topic": "Array, Queue, Sliding Window, Heap (Priority Queue), Monotonic Queue, Range Minimum/Maximum Query",
      "freq": 74.4,
      "link": "https://leetcode.com/problems/sliding-window-maximum"
    },
    {
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "topic": "String, Stack, Bracket Sequences",
      "freq": 73.4,
      "link": "https://leetcode.com/problems/valid-parentheses"
    },
    {
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Quicksort",
      "freq": 70.2,
      "link": "https://leetcode.com/problems/merge-intervals"
    },
    {
      "title": "Spiral Matrix",
      "difficulty": "Medium",
      "topic": "Array, Matrix, Simulation",
      "freq": 69.0,
      "link": "https://leetcode.com/problems/spiral-matrix"
    },
    {
      "title": "Search in Rotated Sorted Array",
      "difficulty": "Medium",
      "topic": "Array, Binary Search",
      "freq": 67.8,
      "link": "https://leetcode.com/problems/search-in-rotated-sorted-array"
    }
  ],
  "paypal": [
    {
      "title": "Zigzag Conversion",
      "difficulty": "Medium",
      "topic": "String",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/zigzag-conversion"
    },
    {
      "title": "Minimum Absolute Difference",
      "difficulty": "Easy",
      "topic": "Array, Sorting",
      "freq": 94.7,
      "link": "https://leetcode.com/problems/minimum-absolute-difference"
    },
    {
      "title": "Longest Increasing Subsequence",
      "difficulty": "Medium",
      "topic": "Array, Binary Search, Dynamic Programming, Longest Increasing Subsequence",
      "freq": 89.5,
      "link": "https://leetcode.com/problems/longest-increasing-subsequence"
    },
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 84.6,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Find Words That Can Be Formed by Characters",
      "difficulty": "Easy",
      "topic": "Array, Hash Table, String, Counting",
      "freq": 82.7,
      "link": "https://leetcode.com/problems/find-words-that-can-be-formed-by-characters"
    },
    {
      "title": "Count Vowel Strings in Ranges",
      "difficulty": "Medium",
      "topic": "Array, String, Prefix Sum",
      "freq": 80.7,
      "link": "https://leetcode.com/problems/count-vowel-strings-in-ranges"
    },
    {
      "title": "Pythagorean Distance Nodes in a Tree",
      "difficulty": "Medium",
      "topic": "Tree, Breadth-First Search",
      "freq": 78.4,
      "link": "https://leetcode.com/problems/pythagorean-distance-nodes-in-a-tree"
    },
    {
      "title": "Number of Islands",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Union-Find, Matrix",
      "freq": 76.0,
      "link": "https://leetcode.com/problems/number-of-islands"
    },
    {
      "title": "Product of Array Except Self",
      "difficulty": "Medium",
      "topic": "Array, Prefix Sum",
      "freq": 76.0,
      "link": "https://leetcode.com/problems/product-of-array-except-self"
    },
    {
      "title": "Maximum Number of Integers to Choose From a Range I",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Binary Search, Greedy, Sorting",
      "freq": 76.0,
      "link": "https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i"
    },
    {
      "title": "Maximum Frequency Score of a Subarray",
      "difficulty": "Hard",
      "topic": "Array, Hash Table, Math, Stack, Sliding Window",
      "freq": 76.0,
      "link": "https://leetcode.com/problems/maximum-frequency-score-of-a-subarray"
    },
    {
      "title": "Meeting Scheduler",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Sorting",
      "freq": 76.0,
      "link": "https://leetcode.com/problems/meeting-scheduler"
    }
  ],
  "stripe": [
    {
      "title": "Minimum Penalty for a Shop",
      "difficulty": "Medium",
      "topic": "String, Prefix Sum",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/minimum-penalty-for-a-shop"
    },
    {
      "title": "Calculate Amount Paid in Taxes",
      "difficulty": "Easy",
      "topic": "Array, Simulation",
      "freq": 92.7,
      "link": "https://leetcode.com/problems/calculate-amount-paid-in-taxes"
    },
    {
      "title": "Invalid Transactions",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Sorting",
      "freq": 89.7,
      "link": "https://leetcode.com/problems/invalid-transactions"
    },
    {
      "title": "Cheapest Flights Within K Stops",
      "difficulty": "Medium",
      "topic": "Dynamic Programming, Depth-First Search, Breadth-First Search, Graph Theory, Heap (Priority Queue), Shortest Path",
      "freq": 82.0,
      "link": "https://leetcode.com/problems/cheapest-flights-within-k-stops"
    },
    {
      "title": "Brace Expansion",
      "difficulty": "Medium",
      "topic": "String, Backtracking, Stack, Breadth-First Search, Sorting",
      "freq": 82.0,
      "link": "https://leetcode.com/problems/brace-expansion"
    },
    {
      "title": "Evaluate Division",
      "difficulty": "Medium",
      "topic": "Array, String, Depth-First Search, Breadth-First Search, Union-Find, Graph Theory, Shortest Path, Bellman\u2013Ford Algorithm, Floyd\u2013Warshall Algorithm",
      "freq": 76.9,
      "link": "https://leetcode.com/problems/evaluate-division"
    },
    {
      "title": "Parallel Courses III",
      "difficulty": "Hard",
      "topic": "Array, Dynamic Programming, Graph Theory, Topological Sort, Directed Acyclic Graph",
      "freq": 61.2,
      "link": "https://leetcode.com/problems/parallel-courses-iii"
    },
    {
      "title": "One Edit Distance",
      "difficulty": "Medium",
      "topic": "Two Pointers, String",
      "freq": 61.2,
      "link": "https://leetcode.com/problems/one-edit-distance"
    },
    {
      "title": "Number of Black Blocks",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Enumeration",
      "freq": 61.2,
      "link": "https://leetcode.com/problems/number-of-black-blocks"
    },
    {
      "title": "Alert Using Same Key-Card Three or More Times in a One Hour Period",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Sorting",
      "freq": 61.2,
      "link": "https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period"
    },
    {
      "title": "Simple Bank System",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Design, Simulation",
      "freq": 61.2,
      "link": "https://leetcode.com/problems/simple-bank-system"
    },
    {
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Quicksort",
      "freq": 61.2,
      "link": "https://leetcode.com/problems/merge-intervals"
    }
  ],
  "airbnb": [
    {
      "title": "Text Justification",
      "difficulty": "Hard",
      "topic": "Array, String, Simulation",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/text-justification"
    },
    {
      "title": "Maximum Profit in Job Scheduling",
      "difficulty": "Hard",
      "topic": "Array, Binary Search, Dynamic Programming, Sorting",
      "freq": 93.0,
      "link": "https://leetcode.com/problems/maximum-profit-in-job-scheduling"
    },
    {
      "title": "Flatten 2D Vector",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Design, Iterator",
      "freq": 85.6,
      "link": "https://leetcode.com/problems/flatten-2d-vector"
    },
    {
      "title": "Smallest Common Region",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Tree, Depth-First Search, Breadth-First Search, Binary Lifting, Lowest Common Ancestor",
      "freq": 82.4,
      "link": "https://leetcode.com/problems/smallest-common-region"
    },
    {
      "title": "Maximum Candies You Can Get from Boxes",
      "difficulty": "Hard",
      "topic": "Array, Breadth-First Search, Graph Theory",
      "freq": 82.4,
      "link": "https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes"
    },
    {
      "title": "Palindrome Pairs",
      "difficulty": "Hard",
      "topic": "Array, Hash Table, String, Trie, Hash Function",
      "freq": 78.6,
      "link": "https://leetcode.com/problems/palindrome-pairs"
    },
    {
      "title": "Design Excel Sum Formula",
      "difficulty": "Hard",
      "topic": "Array, Hash Table, String, Graph Theory, Design, Topological Sort, Matrix",
      "freq": 78.6,
      "link": "https://leetcode.com/problems/design-excel-sum-formula"
    },
    {
      "title": "Pour Water",
      "difficulty": "Medium",
      "topic": "Array, Simulation",
      "freq": 77.1,
      "link": "https://leetcode.com/problems/pour-water"
    },
    {
      "title": "Sliding Puzzle",
      "difficulty": "Hard",
      "topic": "Array, Dynamic Programming, Backtracking, Breadth-First Search, Memoization, Matrix, Heuristic Search, Bidirectional Search, A* Search",
      "freq": 75.6,
      "link": "https://leetcode.com/problems/sliding-puzzle"
    },
    {
      "title": "Intersection of Two Linked Lists",
      "difficulty": "Easy",
      "topic": "Hash Table, Linked List, Two Pointers",
      "freq": 73.9,
      "link": "https://leetcode.com/problems/intersection-of-two-linked-lists"
    },
    {
      "title": "Simple Bank System",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Design, Simulation",
      "freq": 72.1,
      "link": "https://leetcode.com/problems/simple-bank-system"
    },
    {
      "title": "Alien Dictionary",
      "difficulty": "Hard",
      "topic": "Array, String, Depth-First Search, Breadth-First Search, Graph Theory, Topological Sort, Directed Acyclic Graph",
      "freq": 72.1,
      "link": "https://leetcode.com/problems/alien-dictionary"
    }
  ],
  "atlassian": [
    {
      "title": "Rank Teams by Votes",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Sorting, Counting",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/rank-teams-by-votes"
    },
    {
      "title": "Stock Price Fluctuation",
      "difficulty": "Medium",
      "topic": "Hash Table, Design, Heap (Priority Queue), Data Stream, Ordered Set",
      "freq": 94.7,
      "link": "https://leetcode.com/problems/stock-price-fluctuation"
    },
    {
      "title": "All O`one Data Structure",
      "difficulty": "Hard",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 92.3,
      "link": "https://leetcode.com/problems/all-oone-data-structure"
    },
    {
      "title": "Design Snake Game",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Design, Queue, Simulation",
      "freq": 88.2,
      "link": "https://leetcode.com/problems/design-snake-game"
    },
    {
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Quicksort",
      "freq": 82.3,
      "link": "https://leetcode.com/problems/merge-intervals"
    },
    {
      "title": "High-Access Employees",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Sorting",
      "freq": 74.6,
      "link": "https://leetcode.com/problems/high-access-employees"
    },
    {
      "title": "Lowest Common Ancestor of a Binary Tree",
      "difficulty": "Medium",
      "topic": "Tree, Depth-First Search, Binary Tree, Binary Lifting, Lowest Common Ancestor",
      "freq": 74.6,
      "link": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree"
    },
    {
      "title": "Meeting Rooms II",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Greedy, Sorting, Heap (Priority Queue), Prefix Sum",
      "freq": 71.2,
      "link": "https://leetcode.com/problems/meeting-rooms-ii"
    },
    {
      "title": "Word Search",
      "difficulty": "Medium",
      "topic": "Array, String, Backtracking, Depth-First Search, Matrix",
      "freq": 65.3,
      "link": "https://leetcode.com/problems/word-search"
    },
    {
      "title": "Find the Width of Columns of a Grid",
      "difficulty": "Easy",
      "topic": "Array, Matrix",
      "freq": 65.3,
      "link": "https://leetcode.com/problems/find-the-width-of-columns-of-a-grid"
    },
    {
      "title": "Text Justification",
      "difficulty": "Hard",
      "topic": "Array, String, Simulation",
      "freq": 63.5,
      "link": "https://leetcode.com/problems/text-justification"
    },
    {
      "title": "Number of Possible Sets of Closing Branches",
      "difficulty": "Hard",
      "topic": "Bit Manipulation, Graph Theory, Heap (Priority Queue), Enumeration, Shortest Path",
      "freq": 61.5,
      "link": "https://leetcode.com/problems/number-of-possible-sets-of-closing-branches"
    }
  ],
  "nvidia": [
    {
      "title": "Special Binary String",
      "difficulty": "Hard",
      "topic": "String, Divide and Conquer, Sorting",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/special-binary-string"
    },
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 87.5,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Best Time to Buy and Sell Stock",
      "difficulty": "Easy",
      "topic": "Array, Dynamic Programming",
      "freq": 85.0,
      "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 83.6,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    },
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 78.9,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "topic": "String, Stack, Bracket Sequences",
      "freq": 77.1,
      "link": "https://leetcode.com/problems/valid-parentheses"
    },
    {
      "title": "Merge k Sorted Lists",
      "difficulty": "Hard",
      "topic": "Linked List, Divide and Conquer, Heap (Priority Queue), Merge Sort, Tournament Sort",
      "freq": 77.1,
      "link": "https://leetcode.com/problems/merge-k-sorted-lists"
    },
    {
      "title": "Group Anagrams",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Sorting",
      "freq": 75.1,
      "link": "https://leetcode.com/problems/group-anagrams"
    },
    {
      "title": "Maximize Greatness of an Array",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Greedy, Sorting",
      "freq": 75.1,
      "link": "https://leetcode.com/problems/maximize-greatness-of-an-array"
    },
    {
      "title": "Maximum Subarray",
      "difficulty": "Medium",
      "topic": "Array, Divide and Conquer, Dynamic Programming",
      "freq": 73.0,
      "link": "https://leetcode.com/problems/maximum-subarray"
    },
    {
      "title": "Last Stone Weight",
      "difficulty": "Easy",
      "topic": "Array, Heap (Priority Queue)",
      "freq": 73.0,
      "link": "https://leetcode.com/problems/last-stone-weight"
    },
    {
      "title": "Number of Islands",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Union-Find, Matrix",
      "freq": 73.0,
      "link": "https://leetcode.com/problems/number-of-islands"
    }
  ],
  "visa": [
    {
      "title": "Text Justification",
      "difficulty": "Hard",
      "topic": "Array, String, Simulation",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/text-justification"
    },
    {
      "title": "Length of Longest V-Shaped Diagonal Segment",
      "difficulty": "Hard",
      "topic": "Array, Dynamic Programming, Memoization, Matrix",
      "freq": 98.9,
      "link": "https://leetcode.com/problems/length-of-longest-v-shaped-diagonal-segment"
    },
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 97.8,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Rotating the Box",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Matrix",
      "freq": 96.7,
      "link": "https://leetcode.com/problems/rotating-the-box"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 95.5,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    },
    {
      "title": "3Sum",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Sorting",
      "freq": 92.9,
      "link": "https://leetcode.com/problems/3sum"
    },
    {
      "title": "Minimum Operations to Write the Letter Y on a Grid",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Matrix, Counting",
      "freq": 92.9,
      "link": "https://leetcode.com/problems/minimum-operations-to-write-the-letter-y-on-a-grid"
    },
    {
      "title": "Split the Array",
      "difficulty": "Easy",
      "topic": "Array, Hash Table, Counting",
      "freq": 90.0,
      "link": "https://leetcode.com/problems/split-the-array"
    },
    {
      "title": "Find the Length of the Longest Common Prefix",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Trie",
      "freq": 90.0,
      "link": "https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix"
    },
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 86.7,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Best Time to Buy and Sell Stock",
      "difficulty": "Easy",
      "topic": "Array, Dynamic Programming",
      "freq": 84.8,
      "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock"
    },
    {
      "title": "Group Anagrams",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Sorting",
      "freq": 80.7,
      "link": "https://leetcode.com/problems/group-anagrams"
    }
  ],
  "pinterest": [
    {
      "title": "Reconstruct Itinerary",
      "difficulty": "Hard",
      "topic": "Array, String, Depth-First Search, Graph Theory, Sorting, Heap (Priority Queue), Eulerian Circuit, Eulerian Path, Semi-Eulerian Graph",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/reconstruct-itinerary"
    },
    {
      "title": "Optimal Account Balancing",
      "difficulty": "Hard",
      "topic": "Array, Dynamic Programming, Backtracking, Bit Manipulation, Bitmask",
      "freq": 96.5,
      "link": "https://leetcode.com/problems/optimal-account-balancing"
    },
    {
      "title": "Bus Routes",
      "difficulty": "Hard",
      "topic": "Array, Hash Table, Breadth-First Search",
      "freq": 94.1,
      "link": "https://leetcode.com/problems/bus-routes"
    },
    {
      "title": "Expression Add Operators",
      "difficulty": "Hard",
      "topic": "Math, String, Backtracking",
      "freq": 90.2,
      "link": "https://leetcode.com/problems/expression-add-operators"
    },
    {
      "title": "Shortest Way to Form String",
      "difficulty": "Medium",
      "topic": "Two Pointers, String, Binary Search, Greedy",
      "freq": 81.7,
      "link": "https://leetcode.com/problems/shortest-way-to-form-string"
    },
    {
      "title": "Shortest Path in a Grid with Obstacles Elimination",
      "difficulty": "Hard",
      "topic": "Array, Breadth-First Search, Matrix",
      "freq": 79.0,
      "link": "https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination"
    },
    {
      "title": "Coin Change",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming, Breadth-First Search, Knapsack Problem, Complete Knapsack",
      "freq": 77.0,
      "link": "https://leetcode.com/problems/coin-change"
    },
    {
      "title": "Count Subarrays With Score Less Than K",
      "difficulty": "Hard",
      "topic": "Array, Binary Search, Sliding Window, Prefix Sum",
      "freq": 77.0,
      "link": "https://leetcode.com/problems/count-subarrays-with-score-less-than-k"
    },
    {
      "title": "Count and Say",
      "difficulty": "Medium",
      "topic": "String",
      "freq": 69.2,
      "link": "https://leetcode.com/problems/count-and-say"
    },
    {
      "title": "Design Search Autocomplete System",
      "difficulty": "Hard",
      "topic": "String, Depth-First Search, Design, Trie, Sorting, Heap (Priority Queue), Data Stream",
      "freq": 69.2,
      "link": "https://leetcode.com/problems/design-search-autocomplete-system"
    },
    {
      "title": "Maximum Profit in Job Scheduling",
      "difficulty": "Hard",
      "topic": "Array, Binary Search, Dynamic Programming, Sorting",
      "freq": 67.6,
      "link": "https://leetcode.com/problems/maximum-profit-in-job-scheduling"
    },
    {
      "title": "Is Subsequence",
      "difficulty": "Easy",
      "topic": "Two Pointers, String, Dynamic Programming",
      "freq": 67.6,
      "link": "https://leetcode.com/problems/is-subsequence"
    }
  ],
  "doordash": [
    {
      "title": "Walls and Gates",
      "difficulty": "Medium",
      "topic": "Array, Breadth-First Search, Matrix",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/walls-and-gates"
    },
    {
      "title": "Longest Increasing Path in a Matrix",
      "difficulty": "Hard",
      "topic": "Array, Dynamic Programming, Depth-First Search, Breadth-First Search, Graph Theory, Topological Sort, Memoization, Matrix, Directed Acyclic Graph",
      "freq": 92.5,
      "link": "https://leetcode.com/problems/longest-increasing-path-in-a-matrix"
    },
    {
      "title": "Binary Tree Maximum Path Sum",
      "difficulty": "Hard",
      "topic": "Dynamic Programming, Tree, Depth-First Search, Binary Tree, DP on Trees",
      "freq": 90.2,
      "link": "https://leetcode.com/problems/binary-tree-maximum-path-sum"
    },
    {
      "title": "Search Suggestions System",
      "difficulty": "Medium",
      "topic": "Array, String, Binary Search, Trie, Sorting, Heap (Priority Queue)",
      "freq": 82.5,
      "link": "https://leetcode.com/problems/search-suggestions-system"
    },
    {
      "title": "Maximum Profit in Job Scheduling",
      "difficulty": "Hard",
      "topic": "Array, Binary Search, Dynamic Programming, Sorting",
      "freq": 77.8,
      "link": "https://leetcode.com/problems/maximum-profit-in-job-scheduling"
    },
    {
      "title": "Koko Eating Bananas",
      "difficulty": "Medium",
      "topic": "Array, Binary Search",
      "freq": 76.3,
      "link": "https://leetcode.com/problems/koko-eating-bananas"
    },
    {
      "title": "Single-Threaded CPU",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Heap (Priority Queue)",
      "freq": 74.6,
      "link": "https://leetcode.com/problems/single-threaded-cpu"
    },
    {
      "title": "Design File System",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Design, Trie",
      "freq": 72.7,
      "link": "https://leetcode.com/problems/design-file-system"
    },
    {
      "title": "Shortest Distance from All Buildings",
      "difficulty": "Hard",
      "topic": "Array, Breadth-First Search, Matrix",
      "freq": 71.4,
      "link": "https://leetcode.com/problems/shortest-distance-from-all-buildings"
    },
    {
      "title": "Most Profit Assigning Work",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Binary Search, Greedy, Sorting",
      "freq": 67.4,
      "link": "https://leetcode.com/problems/most-profit-assigning-work"
    },
    {
      "title": "Design In-Memory File System",
      "difficulty": "Hard",
      "topic": "Hash Table, String, Design, Trie, Sorting",
      "freq": 65.6,
      "link": "https://leetcode.com/problems/design-in-memory-file-system"
    },
    {
      "title": "Buddy Strings",
      "difficulty": "Easy",
      "topic": "Hash Table, String",
      "freq": 65.6,
      "link": "https://leetcode.com/problems/buddy-strings"
    }
  ],
  "lyft": [
    {
      "title": "Rotting Oranges",
      "difficulty": "Medium",
      "topic": "Array, Breadth-First Search, Matrix",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/rotting-oranges"
    },
    {
      "title": "Minimum Window Substring",
      "difficulty": "Hard",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 94.3,
      "link": "https://leetcode.com/problems/minimum-window-substring"
    },
    {
      "title": "Read N Characters Given read4 II - Call Multiple Times",
      "difficulty": "Hard",
      "topic": "Array, Simulation, Interactive",
      "freq": 92.9,
      "link": "https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times"
    },
    {
      "title": "Time Based Key-Value Store",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Binary Search, Design",
      "freq": 88.9,
      "link": "https://leetcode.com/problems/time-based-key-value-store"
    },
    {
      "title": "Convert Sorted List to Binary Search Tree",
      "difficulty": "Medium",
      "topic": "Linked List, Divide and Conquer, Tree, Binary Search Tree, Binary Tree",
      "freq": 75.5,
      "link": "https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree"
    },
    {
      "title": "Check Completeness of a Binary Tree",
      "difficulty": "Medium",
      "topic": "Tree, Breadth-First Search, Binary Tree",
      "freq": 73.7,
      "link": "https://leetcode.com/problems/check-completeness-of-a-binary-tree"
    },
    {
      "title": "Smallest Range Covering Elements from K Lists",
      "difficulty": "Hard",
      "topic": "Array, Hash Table, Greedy, Sliding Window, Sorting, Heap (Priority Queue)",
      "freq": 69.4,
      "link": "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists"
    },
    {
      "title": "Car Pooling",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Heap (Priority Queue), Simulation, Prefix Sum",
      "freq": 69.4,
      "link": "https://leetcode.com/problems/car-pooling"
    },
    {
      "title": "Max Stack",
      "difficulty": "Hard",
      "topic": "Linked List, Stack, Design, Doubly-Linked List, Ordered Set",
      "freq": 69.4,
      "link": "https://leetcode.com/problems/max-stack"
    },
    {
      "title": "String Compression",
      "difficulty": "Medium",
      "topic": "Two Pointers, String",
      "freq": 69.4,
      "link": "https://leetcode.com/problems/string-compression"
    },
    {
      "title": "Word Ladder II",
      "difficulty": "Hard",
      "topic": "Hash Table, String, Backtracking, Breadth-First Search, Bidirectional Search",
      "freq": 66.8,
      "link": "https://leetcode.com/problems/word-ladder-ii"
    },
    {
      "title": "Min Stack",
      "difficulty": "Medium",
      "topic": "Stack, Design",
      "freq": 63.8,
      "link": "https://leetcode.com/problems/min-stack"
    }
  ],
  "snap": [
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Number of Islands",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Union-Find, Matrix",
      "freq": 98.6,
      "link": "https://leetcode.com/problems/number-of-islands"
    },
    {
      "title": "Meeting Rooms II",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Greedy, Sorting, Heap (Priority Queue), Prefix Sum",
      "freq": 98.6,
      "link": "https://leetcode.com/problems/meeting-rooms-ii"
    },
    {
      "title": "Word Ladder",
      "difficulty": "Hard",
      "topic": "Hash Table, String, Breadth-First Search, Bidirectional Search",
      "freq": 93.7,
      "link": "https://leetcode.com/problems/word-ladder"
    },
    {
      "title": "Minimum Window Substring",
      "difficulty": "Hard",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 91.8,
      "link": "https://leetcode.com/problems/minimum-window-substring"
    },
    {
      "title": "Bus Routes",
      "difficulty": "Hard",
      "topic": "Array, Hash Table, Breadth-First Search",
      "freq": 91.8,
      "link": "https://leetcode.com/problems/bus-routes"
    },
    {
      "title": "Number of Distinct Islands",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Depth-First Search, Breadth-First Search, Union-Find, Sorting, Matrix, Hash Function",
      "freq": 91.8,
      "link": "https://leetcode.com/problems/number-of-distinct-islands"
    },
    {
      "title": "Design Log Storage System",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Design, Ordered Set",
      "freq": 89.8,
      "link": "https://leetcode.com/problems/design-log-storage-system"
    },
    {
      "title": "Making A Large Island",
      "difficulty": "Hard",
      "topic": "Array, Depth-First Search, Breadth-First Search, Union-Find, Matrix",
      "freq": 89.8,
      "link": "https://leetcode.com/problems/making-a-large-island"
    },
    {
      "title": "Basic Calculator II",
      "difficulty": "Medium",
      "topic": "Math, String, Stack",
      "freq": 87.6,
      "link": "https://leetcode.com/problems/basic-calculator-ii"
    },
    {
      "title": "Word Break II",
      "difficulty": "Hard",
      "topic": "Array, Hash Table, String, Dynamic Programming, Backtracking, Trie, Memoization",
      "freq": 85.2,
      "link": "https://leetcode.com/problems/word-break-ii"
    },
    {
      "title": "Bricks Falling When Hit",
      "difficulty": "Hard",
      "topic": "Array, Union-Find, Matrix",
      "freq": 85.2,
      "link": "https://leetcode.com/problems/bricks-falling-when-hit"
    }
  ],
  "cisco": [
    {
      "title": "House Robber",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/house-robber"
    },
    {
      "title": "Longest Palindromic Substring",
      "difficulty": "Medium",
      "topic": "Two Pointers, String, Dynamic Programming, Manacher",
      "freq": 99.5,
      "link": "https://leetcode.com/problems/longest-palindromic-substring"
    },
    {
      "title": "Collect Coins in a Tree",
      "difficulty": "Hard",
      "topic": "Array, Tree, Graph Theory, Topological Sort",
      "freq": 99.0,
      "link": "https://leetcode.com/problems/collect-coins-in-a-tree"
    },
    {
      "title": "Word Search II",
      "difficulty": "Hard",
      "topic": "Array, String, Backtracking, Trie, Matrix",
      "freq": 84.5,
      "link": "https://leetcode.com/problems/word-search-ii"
    },
    {
      "title": "Rotate Image",
      "difficulty": "Medium",
      "topic": "Array, Math, Matrix",
      "freq": 83.5,
      "link": "https://leetcode.com/problems/rotate-image"
    },
    {
      "title": "Lucky Numbers in a Matrix",
      "difficulty": "Easy",
      "topic": "Array, Matrix",
      "freq": 83.5,
      "link": "https://leetcode.com/problems/lucky-numbers-in-a-matrix"
    },
    {
      "title": "Spiral Matrix",
      "difficulty": "Medium",
      "topic": "Array, Matrix, Simulation",
      "freq": 80.1,
      "link": "https://leetcode.com/problems/spiral-matrix"
    },
    {
      "title": "Fizz Buzz",
      "difficulty": "Easy",
      "topic": "Math, String, Simulation",
      "freq": 72.9,
      "link": "https://leetcode.com/problems/fizz-buzz"
    },
    {
      "title": "Find Third Transaction",
      "difficulty": "Medium",
      "topic": "Database",
      "freq": 71.0,
      "link": "https://leetcode.com/problems/find-third-transaction"
    },
    {
      "title": "Implement Router",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Binary Search, Design, Queue, Ordered Set",
      "freq": 71.0,
      "link": "https://leetcode.com/problems/implement-router"
    },
    {
      "title": "Power Grid Maintenance",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Depth-First Search, Breadth-First Search, Union-Find, Graph Theory, Heap (Priority Queue), Ordered Set",
      "freq": 71.0,
      "link": "https://leetcode.com/problems/power-grid-maintenance"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 69.0,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    }
  ],
  "intel": [
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Find Consecutive Integers from a Data Stream",
      "difficulty": "Medium",
      "topic": "Hash Table, Design, Queue, Counting, Data Stream",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream"
    },
    {
      "title": "Maximum Nesting Depth of the Parentheses",
      "difficulty": "Easy",
      "topic": "String, Stack, Bracket Sequences",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses"
    },
    {
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "topic": "String, Stack, Bracket Sequences",
      "freq": 88.1,
      "link": "https://leetcode.com/problems/valid-parentheses"
    },
    {
      "title": "Copy List with Random Pointer",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List",
      "freq": 88.1,
      "link": "https://leetcode.com/problems/copy-list-with-random-pointer"
    },
    {
      "title": "Number of Islands",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Union-Find, Matrix",
      "freq": 82.5,
      "link": "https://leetcode.com/problems/number-of-islands"
    },
    {
      "title": "Trapping Rain Water",
      "difficulty": "Hard",
      "topic": "Array, Two Pointers, Dynamic Programming, Stack, Monotonic Stack",
      "freq": 75.2,
      "link": "https://leetcode.com/problems/trapping-rain-water"
    },
    {
      "title": "Container With Most Water",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Greedy",
      "freq": 75.2,
      "link": "https://leetcode.com/problems/container-with-most-water"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 65.0,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    },
    {
      "title": "Count Primes",
      "difficulty": "Medium",
      "topic": "Array, Math, Enumeration, Number Theory, Primality Test, Sieve Theory, Prime Number Sieve",
      "freq": 65.0,
      "link": "https://leetcode.com/problems/count-primes"
    },
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 65.0,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Palindrome Number",
      "difficulty": "Easy",
      "topic": "Math",
      "freq": 65.0,
      "link": "https://leetcode.com/problems/palindrome-number"
    }
  ],
  "ibm": [
    {
      "title": "Fizz Buzz",
      "difficulty": "Easy",
      "topic": "Math, String, Simulation",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/fizz-buzz"
    },
    {
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Quicksort",
      "freq": 93.8,
      "link": "https://leetcode.com/problems/merge-intervals"
    },
    {
      "title": "Integer to Roman",
      "difficulty": "Medium",
      "topic": "Hash Table, Math, String",
      "freq": 91.3,
      "link": "https://leetcode.com/problems/integer-to-roman"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 87.5,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    },
    {
      "title": "Best Time to Buy and Sell Stock",
      "difficulty": "Easy",
      "topic": "Array, Dynamic Programming",
      "freq": 86.5,
      "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock"
    },
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 85.4,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Roman to Integer",
      "difficulty": "Easy",
      "topic": "Hash Table, Math, String",
      "freq": 82.9,
      "link": "https://leetcode.com/problems/roman-to-integer"
    },
    {
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "topic": "String, Stack, Bracket Sequences",
      "freq": 81.6,
      "link": "https://leetcode.com/problems/valid-parentheses"
    },
    {
      "title": "Count Ways to Group Overlapping Ranges",
      "difficulty": "Medium",
      "topic": "Array, Sorting",
      "freq": 81.6,
      "link": "https://leetcode.com/problems/count-ways-to-group-overlapping-ranges"
    },
    {
      "title": "Minimum Operations to Make All Array Elements Equal",
      "difficulty": "Medium",
      "topic": "Array, Binary Search, Sorting, Prefix Sum",
      "freq": 80.3,
      "link": "https://leetcode.com/problems/minimum-operations-to-make-all-array-elements-equal"
    },
    {
      "title": "Rotate Image",
      "difficulty": "Medium",
      "topic": "Array, Math, Matrix",
      "freq": 78.8,
      "link": "https://leetcode.com/problems/rotate-image"
    },
    {
      "title": "Minimum Moves to Equal Array Elements",
      "difficulty": "Medium",
      "topic": "Array, Math",
      "freq": 75.5,
      "link": "https://leetcode.com/problems/minimum-moves-to-equal-array-elements"
    }
  ],
  "flipkart": [
    {
      "title": "Maximum Points You Can Obtain from Cards",
      "difficulty": "Medium",
      "topic": "Array, Sliding Window, Prefix Sum",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards"
    },
    {
      "title": "Contain Virus",
      "difficulty": "Hard",
      "topic": "Array, Depth-First Search, Breadth-First Search, Matrix, Simulation",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/contain-virus"
    },
    {
      "title": "Transform Array to All Equal Elements",
      "difficulty": "Medium",
      "topic": "Array, Greedy",
      "freq": 84.3,
      "link": "https://leetcode.com/problems/transform-array-to-all-equal-elements"
    },
    {
      "title": "Minimum Number of Coins to be Added",
      "difficulty": "Medium",
      "topic": "Array, Greedy, Sorting",
      "freq": 82.0,
      "link": "https://leetcode.com/problems/minimum-number-of-coins-to-be-added"
    },
    {
      "title": "Rotting Oranges",
      "difficulty": "Medium",
      "topic": "Array, Breadth-First Search, Matrix",
      "freq": 82.0,
      "link": "https://leetcode.com/problems/rotting-oranges"
    },
    {
      "title": "Design Movie Rental System",
      "difficulty": "Hard",
      "topic": "Array, Hash Table, Design, Heap (Priority Queue), Ordered Set",
      "freq": 79.4,
      "link": "https://leetcode.com/problems/design-movie-rental-system"
    },
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 76.6,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Container With Most Water",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Greedy",
      "freq": 76.6,
      "link": "https://leetcode.com/problems/container-with-most-water"
    },
    {
      "title": "The Score of Students Solving Math Expression",
      "difficulty": "Hard",
      "topic": "Array, Hash Table, Math, String, Dynamic Programming, Stack, Memoization",
      "freq": 76.6,
      "link": "https://leetcode.com/problems/the-score-of-students-solving-math-expression"
    },
    {
      "title": "Minimum Cost to Reach City With Discounts",
      "difficulty": "Medium",
      "topic": "Graph Theory, Heap (Priority Queue), Shortest Path, Dijkstra's Algorithm",
      "freq": 76.6,
      "link": "https://leetcode.com/problems/minimum-cost-to-reach-city-with-discounts"
    },
    {
      "title": "Numbers With Same Consecutive Differences",
      "difficulty": "Medium",
      "topic": "Backtracking, Breadth-First Search",
      "freq": 76.6,
      "link": "https://leetcode.com/problems/numbers-with-same-consecutive-differences"
    },
    {
      "title": "Triples with Bitwise AND Equal To Zero",
      "difficulty": "Hard",
      "topic": "Array, Hash Table, Bit Manipulation",
      "freq": 76.6,
      "link": "https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero"
    }
  ],
  "swiggy": [
    {
      "title": "Maximize Area of Square Hole in Grid",
      "difficulty": "Medium",
      "topic": "Array, Sorting",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/maximize-area-of-square-hole-in-grid"
    },
    {
      "title": "Count Good Meals",
      "difficulty": "Medium",
      "topic": "Array, Hash Table",
      "freq": 97.3,
      "link": "https://leetcode.com/problems/count-good-meals"
    },
    {
      "title": "Minimum Value to Get Positive Step by Step Sum",
      "difficulty": "Easy",
      "topic": "Array, Prefix Sum",
      "freq": 94.3,
      "link": "https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum"
    },
    {
      "title": "Next Greater Element I",
      "difficulty": "Easy",
      "topic": "Array, Hash Table, Stack, Monotonic Stack",
      "freq": 82.3,
      "link": "https://leetcode.com/problems/next-greater-element-i"
    },
    {
      "title": "Happy Number",
      "difficulty": "Easy",
      "topic": "Hash Table, Math, Two Pointers, Floyd's Cycle Finding Algorithm",
      "freq": 82.3,
      "link": "https://leetcode.com/problems/happy-number"
    },
    {
      "title": "Distinct Subsequences",
      "difficulty": "Hard",
      "topic": "String, Dynamic Programming",
      "freq": 82.3,
      "link": "https://leetcode.com/problems/distinct-subsequences"
    },
    {
      "title": "Course Schedule",
      "difficulty": "Medium",
      "topic": "Depth-First Search, Breadth-First Search, Graph Theory, Topological Sort, Directed Acyclic Graph",
      "freq": 76.6,
      "link": "https://leetcode.com/problems/course-schedule"
    },
    {
      "title": "Edit Distance",
      "difficulty": "Medium",
      "topic": "String, Dynamic Programming",
      "freq": 76.6,
      "link": "https://leetcode.com/problems/edit-distance"
    },
    {
      "title": "Best Time to Buy and Sell Stock",
      "difficulty": "Easy",
      "topic": "Array, Dynamic Programming",
      "freq": 76.6,
      "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock"
    },
    {
      "title": "Merge Sorted Array",
      "difficulty": "Easy",
      "topic": "Array, Two Pointers, Sorting",
      "freq": 69.2,
      "link": "https://leetcode.com/problems/merge-sorted-array"
    },
    {
      "title": "Integer to Roman",
      "difficulty": "Medium",
      "topic": "Hash Table, Math, String",
      "freq": 69.2,
      "link": "https://leetcode.com/problems/integer-to-roman"
    },
    {
      "title": "Daily Temperatures",
      "difficulty": "Medium",
      "topic": "Array, Stack, Monotonic Stack",
      "freq": 69.2,
      "link": "https://leetcode.com/problems/daily-temperatures"
    }
  ],
  "zomato": [
    {
      "title": "Maximum Spending After Buying Items",
      "difficulty": "Hard",
      "topic": "Array, Greedy, Sorting, Heap (Priority Queue), Matrix",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/maximum-spending-after-buying-items"
    },
    {
      "title": "Split the Array to Make Coprime Products",
      "difficulty": "Hard",
      "topic": "Array, Hash Table, Math, Number Theory, Prime Factorization",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/split-the-array-to-make-coprime-products"
    },
    {
      "title": "Bitwise OR of All Subsequence Sums",
      "difficulty": "Medium",
      "topic": "Array, Math, Bit Manipulation, Brainteaser, Prefix Sum",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/bitwise-or-of-all-subsequence-sums"
    },
    {
      "title": "Shortest Cycle in a Graph",
      "difficulty": "Hard",
      "topic": "Breadth-First Search, Graph Theory",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/shortest-cycle-in-a-graph"
    },
    {
      "title": "Number of Ways to Divide a Long Corridor",
      "difficulty": "Hard",
      "topic": "Math, String, Dynamic Programming",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor"
    },
    {
      "title": "Count the Hidden Sequences",
      "difficulty": "Medium",
      "topic": "Array, Prefix Sum",
      "freq": 96.4,
      "link": "https://leetcode.com/problems/count-the-hidden-sequences"
    },
    {
      "title": "The Skyline Problem",
      "difficulty": "Hard",
      "topic": "Array, Divide and Conquer, Binary Indexed Tree, Segment Tree, Sweep Line, Sorting, Heap (Priority Queue), Ordered Set",
      "freq": 81.1,
      "link": "https://leetcode.com/problems/the-skyline-problem"
    },
    {
      "title": "Exchange Seats",
      "difficulty": "Medium",
      "topic": "Database",
      "freq": 81.1,
      "link": "https://leetcode.com/problems/exchange-seats"
    },
    {
      "title": "First Missing Positive",
      "difficulty": "Hard",
      "topic": "Array, Hash Table",
      "freq": 73.3,
      "link": "https://leetcode.com/problems/first-missing-positive"
    },
    {
      "title": "Number of Islands",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Union-Find, Matrix",
      "freq": 73.3,
      "link": "https://leetcode.com/problems/number-of-islands"
    },
    {
      "title": "Maximum Subarray",
      "difficulty": "Medium",
      "topic": "Array, Divide and Conquer, Dynamic Programming",
      "freq": 73.3,
      "link": "https://leetcode.com/problems/maximum-subarray"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 73.3,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    }
  ],
  "paytm": [
    {
      "title": "Min Stack",
      "difficulty": "Medium",
      "topic": "Stack, Design",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/min-stack"
    },
    {
      "title": "Find Indices With Index and Value Difference I",
      "difficulty": "Easy",
      "topic": "Array, Two Pointers",
      "freq": 94.3,
      "link": "https://leetcode.com/problems/find-indices-with-index-and-value-difference-i"
    },
    {
      "title": "Find Indices With Index and Value Difference II",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers",
      "freq": 94.3,
      "link": "https://leetcode.com/problems/find-indices-with-index-and-value-difference-ii"
    },
    {
      "title": "Remove All Adjacent Duplicates In String",
      "difficulty": "Easy",
      "topic": "String, Stack",
      "freq": 94.3,
      "link": "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string"
    },
    {
      "title": "Longest Nice Subarray",
      "difficulty": "Medium",
      "topic": "Array, Bit Manipulation, Sliding Window",
      "freq": 94.3,
      "link": "https://leetcode.com/problems/longest-nice-subarray"
    },
    {
      "title": "Minimize Maximum of Array",
      "difficulty": "Medium",
      "topic": "Array, Binary Search, Dynamic Programming, Greedy, Prefix Sum",
      "freq": 94.3,
      "link": "https://leetcode.com/problems/minimize-maximum-of-array"
    },
    {
      "title": "Number of Unequal Triplets in Array",
      "difficulty": "Easy",
      "topic": "Array, Hash Table, Sorting",
      "freq": 94.3,
      "link": "https://leetcode.com/problems/number-of-unequal-triplets-in-array"
    },
    {
      "title": "Maximum Transactions Without Negative Balance",
      "difficulty": "Medium",
      "topic": "Array, Greedy, Heap (Priority Queue)",
      "freq": 94.3,
      "link": "https://leetcode.com/problems/maximum-transactions-without-negative-balance"
    },
    {
      "title": "Lexicographically Smallest String After Deleting Duplicate Characters",
      "difficulty": "Hard",
      "topic": "Hash Table, String, Stack, Greedy, Monotonic Stack",
      "freq": 94.3,
      "link": "https://leetcode.com/problems/lexicographically-smallest-string-after-deleting-duplicate-characters"
    },
    {
      "title": "Linked List Cycle II",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Two Pointers, Floyd's Cycle Finding Algorithm",
      "freq": 76.6,
      "link": "https://leetcode.com/problems/linked-list-cycle-ii"
    },
    {
      "title": "Longest Consecutive Sequence",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Union-Find",
      "freq": 76.6,
      "link": "https://leetcode.com/problems/longest-consecutive-sequence"
    },
    {
      "title": "Trapping Rain Water",
      "difficulty": "Hard",
      "topic": "Array, Two Pointers, Dynamic Programming, Stack, Monotonic Stack",
      "freq": 69.3,
      "link": "https://leetcode.com/problems/trapping-rain-water"
    }
  ],
  "infosys": [
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 92.8,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    },
    {
      "title": "Best Time to Buy and Sell Stock",
      "difficulty": "Easy",
      "topic": "Array, Dynamic Programming",
      "freq": 82.3,
      "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock"
    },
    {
      "title": "Maximum Subarray",
      "difficulty": "Medium",
      "topic": "Array, Divide and Conquer, Dynamic Programming",
      "freq": 81.1,
      "link": "https://leetcode.com/problems/maximum-subarray"
    },
    {
      "title": "Second Highest Salary",
      "difficulty": "Medium",
      "topic": "Database",
      "freq": 78.4,
      "link": "https://leetcode.com/problems/second-highest-salary"
    },
    {
      "title": "Palindrome Number",
      "difficulty": "Easy",
      "topic": "Math",
      "freq": 76.9,
      "link": "https://leetcode.com/problems/palindrome-number"
    },
    {
      "title": "Find the Number of Subsequences With Equal GCD",
      "difficulty": "Hard",
      "topic": "Array, Math, Dynamic Programming, Number Theory, Euclidean Algorithm, Greatest Common Divisor",
      "freq": 76.9,
      "link": "https://leetcode.com/problems/find-the-number-of-subsequences-with-equal-gcd"
    },
    {
      "title": "Subarray Sum Equals K",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Prefix Sum",
      "freq": 76.9,
      "link": "https://leetcode.com/problems/subarray-sum-equals-k"
    },
    {
      "title": "Gas Station",
      "difficulty": "Medium",
      "topic": "Array, Greedy",
      "freq": 73.6,
      "link": "https://leetcode.com/problems/gas-station"
    },
    {
      "title": "House Robber",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming",
      "freq": 71.8,
      "link": "https://leetcode.com/problems/house-robber"
    },
    {
      "title": "Longest Palindromic Substring",
      "difficulty": "Medium",
      "topic": "Two Pointers, String, Dynamic Programming, Manacher",
      "freq": 69.8,
      "link": "https://leetcode.com/problems/longest-palindromic-substring"
    },
    {
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "topic": "String, Stack, Bracket Sequences",
      "freq": 69.8,
      "link": "https://leetcode.com/problems/valid-parentheses"
    }
  ],
  "wipro": [
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Minimum Moves to Capture The Queen",
      "difficulty": "Medium",
      "topic": "Math, Enumeration",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/minimum-moves-to-capture-the-queen"
    },
    {
      "title": "Longest Common Prefix",
      "difficulty": "Easy",
      "topic": "Array, String, Trie",
      "freq": 87.5,
      "link": "https://leetcode.com/problems/longest-common-prefix"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 70.6,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    },
    {
      "title": "Palindrome Number",
      "difficulty": "Easy",
      "topic": "Math",
      "freq": 70.6,
      "link": "https://leetcode.com/problems/palindrome-number"
    },
    {
      "title": "Valid Anagram",
      "difficulty": "Easy",
      "topic": "Hash Table, String, Sorting",
      "freq": 70.6,
      "link": "https://leetcode.com/problems/valid-anagram"
    },
    {
      "title": "Group Anagrams",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Sorting",
      "freq": 70.6,
      "link": "https://leetcode.com/problems/group-anagrams"
    },
    {
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "topic": "String, Stack, Bracket Sequences",
      "freq": 60.8,
      "link": "https://leetcode.com/problems/valid-parentheses"
    },
    {
      "title": "Reverse Integer",
      "difficulty": "Medium",
      "topic": "Math",
      "freq": 60.8,
      "link": "https://leetcode.com/problems/reverse-integer"
    },
    {
      "title": "Sort Characters By Frequency",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sorting, Heap (Priority Queue), Bucket Sort, Counting",
      "freq": 60.8,
      "link": "https://leetcode.com/problems/sort-characters-by-frequency"
    },
    {
      "title": "Create Hello World Function",
      "difficulty": "Easy",
      "topic": "General",
      "freq": 60.8,
      "link": "https://leetcode.com/problems/create-hello-world-function"
    },
    {
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Quicksort",
      "freq": 60.8,
      "link": "https://leetcode.com/problems/merge-intervals"
    }
  ],
  "accenture": [
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Climbing Stairs",
      "difficulty": "Easy",
      "topic": "Math, Dynamic Programming, Memoization",
      "freq": 86.0,
      "link": "https://leetcode.com/problems/climbing-stairs"
    },
    {
      "title": "Best Time to Buy and Sell Stock",
      "difficulty": "Easy",
      "topic": "Array, Dynamic Programming",
      "freq": 84.0,
      "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock"
    },
    {
      "title": "Smallest Divisible Digit Product II",
      "difficulty": "Hard",
      "topic": "Math, String, Backtracking, Greedy, Number Theory",
      "freq": 81.9,
      "link": "https://leetcode.com/problems/smallest-divisible-digit-product-ii"
    },
    {
      "title": "Palindrome Number",
      "difficulty": "Easy",
      "topic": "Math",
      "freq": 79.6,
      "link": "https://leetcode.com/problems/palindrome-number"
    },
    {
      "title": "Smallest Divisible Digit Product I",
      "difficulty": "Easy",
      "topic": "Math, Enumeration",
      "freq": 79.6,
      "link": "https://leetcode.com/problems/smallest-divisible-digit-product-i"
    },
    {
      "title": "Minimum Number of Operations to Have Distinct Elements",
      "difficulty": "Medium",
      "topic": "Array, Hash Table",
      "freq": 79.6,
      "link": "https://leetcode.com/problems/minimum-number-of-operations-to-have-distinct-elements"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 77.0,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    },
    {
      "title": "Reverse Integer",
      "difficulty": "Medium",
      "topic": "Math",
      "freq": 77.0,
      "link": "https://leetcode.com/problems/reverse-integer"
    },
    {
      "title": "Sum of Values at Indices With K Set Bits",
      "difficulty": "Easy",
      "topic": "Array, Bit Manipulation",
      "freq": 77.0,
      "link": "https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits"
    },
    {
      "title": "Maximum Subarray",
      "difficulty": "Medium",
      "topic": "Array, Divide and Conquer, Dynamic Programming",
      "freq": 77.0,
      "link": "https://leetcode.com/problems/maximum-subarray"
    },
    {
      "title": "Maximum Area of Longest Diagonal Rectangle",
      "difficulty": "Easy",
      "topic": "Array",
      "freq": 77.0,
      "link": "https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle"
    }
  ],
  "tcs": [
    {
      "title": "Friday Purchases I",
      "difficulty": "Medium",
      "topic": "Database",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/friday-purchases-i"
    },
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 89.0,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Longest Palindromic Substring",
      "difficulty": "Medium",
      "topic": "Two Pointers, String, Dynamic Programming, Manacher",
      "freq": 82.0,
      "link": "https://leetcode.com/problems/longest-palindromic-substring"
    },
    {
      "title": "Palindrome Number",
      "difficulty": "Easy",
      "topic": "Math",
      "freq": 80.0,
      "link": "https://leetcode.com/problems/palindrome-number"
    },
    {
      "title": "Maximum Subarray",
      "difficulty": "Medium",
      "topic": "Array, Divide and Conquer, Dynamic Programming",
      "freq": 73.6,
      "link": "https://leetcode.com/problems/maximum-subarray"
    },
    {
      "title": "Container With Most Water",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Greedy",
      "freq": 72.0,
      "link": "https://leetcode.com/problems/container-with-most-water"
    },
    {
      "title": "Move Zeroes",
      "difficulty": "Easy",
      "topic": "Array, Two Pointers",
      "freq": 72.0,
      "link": "https://leetcode.com/problems/move-zeroes"
    },
    {
      "title": "Best Time to Buy and Sell Stock",
      "difficulty": "Easy",
      "topic": "Array, Dynamic Programming",
      "freq": 70.3,
      "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock"
    },
    {
      "title": "Longest Common Prefix",
      "difficulty": "Easy",
      "topic": "Array, String, Trie",
      "freq": 68.5,
      "link": "https://leetcode.com/problems/longest-common-prefix"
    },
    {
      "title": "Rank Transform of an Array",
      "difficulty": "Easy",
      "topic": "Array, Hash Table, Sorting",
      "freq": 67.5,
      "link": "https://leetcode.com/problems/rank-transform-of-an-array"
    },
    {
      "title": "Majority Element",
      "difficulty": "Easy",
      "topic": "Array, Hash Table, Divide and Conquer, Sorting, Counting, Boyer\u2013Moore Majority Vote Algorithm",
      "freq": 66.4,
      "link": "https://leetcode.com/problems/majority-element"
    },
    {
      "title": "Second Highest Salary",
      "difficulty": "Medium",
      "topic": "Database",
      "freq": 66.4,
      "link": "https://leetcode.com/problems/second-highest-salary"
    }
  ],
  "twitch": [
    {
      "title": "Create a Session Bar Chart",
      "difficulty": "Easy",
      "topic": "Database",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/create-a-session-bar-chart"
    },
    {
      "title": "Design a File Sharing System",
      "difficulty": "Medium",
      "topic": "Hash Table, Design, Sorting, Heap (Priority Queue), Data Stream",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/design-a-file-sharing-system"
    },
    {
      "title": "Toss Strange Coins",
      "difficulty": "Medium",
      "topic": "Array, Math, Dynamic Programming, Probability and Statistics",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/toss-strange-coins"
    },
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 84.2,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Reverse Vowels of a String",
      "difficulty": "Easy",
      "topic": "Two Pointers, String",
      "freq": 68.5,
      "link": "https://leetcode.com/problems/reverse-vowels-of-a-string"
    },
    {
      "title": "Find Median from Data Stream",
      "difficulty": "Hard",
      "topic": "Two Pointers, Design, Sorting, Heap (Priority Queue), Data Stream",
      "freq": 68.5,
      "link": "https://leetcode.com/problems/find-median-from-data-stream"
    },
    {
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Quicksort",
      "freq": 68.5,
      "link": "https://leetcode.com/problems/merge-intervals"
    }
  ],
  "x": [
    {
      "title": "Minimum Genetic Mutation",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Breadth-First Search, Bidirectional Search",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/minimum-genetic-mutation"
    },
    {
      "title": "Trapping Rain Water",
      "difficulty": "Hard",
      "topic": "Array, Two Pointers, Dynamic Programming, Stack, Monotonic Stack",
      "freq": 97.0,
      "link": "https://leetcode.com/problems/trapping-rain-water"
    },
    {
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Quicksort",
      "freq": 97.0,
      "link": "https://leetcode.com/problems/merge-intervals"
    },
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 97.0,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Flatten Nested List Iterator",
      "difficulty": "Medium",
      "topic": "Stack, Tree, Depth-First Search, Design, Queue, Iterator",
      "freq": 97.0,
      "link": "https://leetcode.com/problems/flatten-nested-list-iterator"
    },
    {
      "title": "Design Twitter",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Heap (Priority Queue)",
      "freq": 97.0,
      "link": "https://leetcode.com/problems/design-twitter"
    },
    {
      "title": "Tweet Counts Per Frequency",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Binary Search, Design, Sorting, Ordered Set",
      "freq": 97.0,
      "link": "https://leetcode.com/problems/tweet-counts-per-frequency"
    },
    {
      "title": "Invalid Tweets",
      "difficulty": "Easy",
      "topic": "Database",
      "freq": 97.0,
      "link": "https://leetcode.com/problems/invalid-tweets"
    },
    {
      "title": "Regular Expression Matching",
      "difficulty": "Hard",
      "topic": "String, Dynamic Programming, Recursion",
      "freq": 93.7,
      "link": "https://leetcode.com/problems/regular-expression-matching"
    },
    {
      "title": "Integer to Roman",
      "difficulty": "Medium",
      "topic": "Hash Table, Math, String",
      "freq": 93.7,
      "link": "https://leetcode.com/problems/integer-to-roman"
    },
    {
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "topic": "String, Stack, Bracket Sequences",
      "freq": 93.7,
      "link": "https://leetcode.com/problems/valid-parentheses"
    },
    {
      "title": "Merge k Sorted Lists",
      "difficulty": "Hard",
      "topic": "Linked List, Divide and Conquer, Heap (Priority Queue), Merge Sort, Tournament Sort",
      "freq": 93.7,
      "link": "https://leetcode.com/problems/merge-k-sorted-lists"
    }
  ],
  "reddit": [
    {
      "title": "Number of Ways to Buy Pens and Pencils",
      "difficulty": "Medium",
      "topic": "Math, Enumeration",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils"
    },
    {
      "title": "Word Ladder",
      "difficulty": "Hard",
      "topic": "Hash Table, String, Breadth-First Search, Bidirectional Search",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/word-ladder"
    },
    {
      "title": "Design Hit Counter",
      "difficulty": "Medium",
      "topic": "Array, Binary Search, Design, Queue, Data Stream",
      "freq": 78.1,
      "link": "https://leetcode.com/problems/design-hit-counter"
    },
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 78.1,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Logger Rate Limiter",
      "difficulty": "Easy",
      "topic": "Hash Table, Design, Data Stream",
      "freq": 78.1,
      "link": "https://leetcode.com/problems/logger-rate-limiter"
    }
  ],
  "spotify": [
    {
      "title": "Moving Average from Data Stream",
      "difficulty": "Easy",
      "topic": "Array, Design, Queue, Data Stream",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/moving-average-from-data-stream"
    },
    {
      "title": "Analyze User Website Visit Pattern",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Sorting",
      "freq": 86.3,
      "link": "https://leetcode.com/problems/analyze-user-website-visit-pattern"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 84.7,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    },
    {
      "title": "Kth Largest Element in an Array",
      "difficulty": "Medium",
      "topic": "Array, Divide and Conquer, Sorting, Heap (Priority Queue), Quickselect",
      "freq": 84.7,
      "link": "https://leetcode.com/problems/kth-largest-element-in-an-array"
    },
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 79.0,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Leetcodify Friends Recommendations",
      "difficulty": "Hard",
      "topic": "Database",
      "freq": 76.7,
      "link": "https://leetcode.com/problems/leetcodify-friends-recommendations"
    },
    {
      "title": "Leetcodify Similar Friends",
      "difficulty": "Hard",
      "topic": "Database",
      "freq": 76.7,
      "link": "https://leetcode.com/problems/leetcodify-similar-friends"
    },
    {
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "topic": "String, Stack, Bracket Sequences",
      "freq": 76.7,
      "link": "https://leetcode.com/problems/valid-parentheses"
    },
    {
      "title": "Sliding Window Median",
      "difficulty": "Hard",
      "topic": "Array, Hash Table, Sliding Window, Heap (Priority Queue), Treap",
      "freq": 67.4,
      "link": "https://leetcode.com/problems/sliding-window-median"
    },
    {
      "title": "Find Median from Data Stream",
      "difficulty": "Hard",
      "topic": "Two Pointers, Design, Sorting, Heap (Priority Queue), Data Stream",
      "freq": 63.0,
      "link": "https://leetcode.com/problems/find-median-from-data-stream"
    },
    {
      "title": "Ransom Note",
      "difficulty": "Easy",
      "topic": "Hash Table, String, Counting",
      "freq": 57.3,
      "link": "https://leetcode.com/problems/ransom-note"
    },
    {
      "title": "Fibonacci Number",
      "difficulty": "Easy",
      "topic": "Math, Dynamic Programming, Recursion, Memoization",
      "freq": 57.3,
      "link": "https://leetcode.com/problems/fibonacci-number"
    }
  ],
  "dropbox": [
    {
      "title": "Simple Bank System",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Design, Simulation",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/simple-bank-system"
    },
    {
      "title": "Web Crawler",
      "difficulty": "Medium",
      "topic": "String, Depth-First Search, Breadth-First Search, Interactive",
      "freq": 95.0,
      "link": "https://leetcode.com/problems/web-crawler"
    },
    {
      "title": "Web Crawler Multithreaded",
      "difficulty": "Medium",
      "topic": "Depth-First Search, Breadth-First Search, Concurrency",
      "freq": 95.0,
      "link": "https://leetcode.com/problems/web-crawler-multithreaded"
    },
    {
      "title": "Minimize Malware Spread",
      "difficulty": "Hard",
      "topic": "Array, Hash Table, Depth-First Search, Breadth-First Search, Union-Find, Graph Theory",
      "freq": 95.0,
      "link": "https://leetcode.com/problems/minimize-malware-spread"
    },
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 92.1,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Median of Two Sorted Arrays",
      "difficulty": "Hard",
      "topic": "Array, Binary Search, Divide and Conquer",
      "freq": 92.1,
      "link": "https://leetcode.com/problems/median-of-two-sorted-arrays"
    },
    {
      "title": "Letter Combinations of a Phone Number",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Backtracking",
      "freq": 92.1,
      "link": "https://leetcode.com/problems/letter-combinations-of-a-phone-number"
    },
    {
      "title": "Grid Illumination",
      "difficulty": "Hard",
      "topic": "Array, Hash Table",
      "freq": 92.1,
      "link": "https://leetcode.com/problems/grid-illumination"
    },
    {
      "title": "Find Duplicate File in System",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String",
      "freq": 92.1,
      "link": "https://leetcode.com/problems/find-duplicate-file-in-system"
    },
    {
      "title": "Word Break II",
      "difficulty": "Hard",
      "topic": "Array, Hash Table, String, Dynamic Programming, Backtracking, Trie, Memoization",
      "freq": 92.1,
      "link": "https://leetcode.com/problems/word-break-ii"
    },
    {
      "title": "Number of Valid Words for Each Puzzle",
      "difficulty": "Hard",
      "topic": "Array, Hash Table, String, Bit Manipulation, Trie",
      "freq": 92.1,
      "link": "https://leetcode.com/problems/number-of-valid-words-for-each-puzzle"
    },
    {
      "title": "Word Pattern",
      "difficulty": "Easy",
      "topic": "Hash Table, String",
      "freq": 92.1,
      "link": "https://leetcode.com/problems/word-pattern"
    }
  ],
  "zoom": [
    {
      "title": "User Activity for the Past 30 Days I",
      "difficulty": "Easy",
      "topic": "Database",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/user-activity-for-the-past-30-days-i"
    },
    {
      "title": "User Activity for the Past 30 Days II",
      "difficulty": "Easy",
      "topic": "Database",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/user-activity-for-the-past-30-days-ii"
    },
    {
      "title": "Word Search II",
      "difficulty": "Hard",
      "topic": "Array, String, Backtracking, Trie, Matrix",
      "freq": 78.4,
      "link": "https://leetcode.com/problems/word-search-ii"
    },
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 69.5,
      "link": "https://leetcode.com/problems/lru-cache"
    }
  ],
  "shopify": [
    {
      "title": "Walking Robot Simulation",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Simulation",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/walking-robot-simulation"
    },
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 80.3,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Encode and Decode TinyURL",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Design, Hash Function",
      "freq": 65.3,
      "link": "https://leetcode.com/problems/encode-and-decode-tinyurl"
    },
    {
      "title": "Paint House",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming",
      "freq": 65.3,
      "link": "https://leetcode.com/problems/paint-house"
    },
    {
      "title": "Design In-Memory File System",
      "difficulty": "Hard",
      "topic": "Hash Table, String, Design, Trie, Sorting",
      "freq": 52.4,
      "link": "https://leetcode.com/problems/design-in-memory-file-system"
    }
  ],
  "twilio": [
    {
      "title": "Maximize Greatness of an Array",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Greedy, Sorting",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/maximize-greatness-of-an-array"
    },
    {
      "title": "Reformat Date",
      "difficulty": "Easy",
      "topic": "String",
      "freq": 95.0,
      "link": "https://leetcode.com/problems/reformat-date"
    },
    {
      "title": "Univalued Binary Tree",
      "difficulty": "Easy",
      "topic": "Tree, Depth-First Search, Breadth-First Search, Binary Tree",
      "freq": 95.0,
      "link": "https://leetcode.com/problems/univalued-binary-tree"
    },
    {
      "title": "Count Vowel Strings in Ranges",
      "difficulty": "Medium",
      "topic": "Array, String, Prefix Sum",
      "freq": 79.4,
      "link": "https://leetcode.com/problems/count-vowel-strings-in-ranges"
    },
    {
      "title": "Top K Frequent Elements",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Divide and Conquer, Sorting, Heap (Priority Queue), Bucket Sort, Counting, Quickselect",
      "freq": 72.9,
      "link": "https://leetcode.com/problems/top-k-frequent-elements"
    },
    {
      "title": "Group Anagrams",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Sorting",
      "freq": 72.9,
      "link": "https://leetcode.com/problems/group-anagrams"
    },
    {
      "title": "Ways to Make a Fair Array",
      "difficulty": "Medium",
      "topic": "Array, Prefix Sum",
      "freq": 63.8,
      "link": "https://leetcode.com/problems/ways-to-make-a-fair-array"
    },
    {
      "title": "Furthest Building You Can Reach",
      "difficulty": "Medium",
      "topic": "Array, Greedy, Heap (Priority Queue)",
      "freq": 63.8,
      "link": "https://leetcode.com/problems/furthest-building-you-can-reach"
    },
    {
      "title": "Search Suggestions System",
      "difficulty": "Medium",
      "topic": "Array, String, Binary Search, Trie, Sorting, Heap (Priority Queue)",
      "freq": 63.8,
      "link": "https://leetcode.com/problems/search-suggestions-system"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 63.8,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    },
    {
      "title": "Remove All Adjacent Duplicates in String II",
      "difficulty": "Medium",
      "topic": "String, Stack",
      "freq": 63.8,
      "link": "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii"
    }
  ],
  "yelp": [
    {
      "title": "Destination City",
      "difficulty": "Easy",
      "topic": "Array, Hash Table, String",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/destination-city"
    },
    {
      "title": "Remove Colored Pieces if Both Neighbors are the Same Color",
      "difficulty": "Medium",
      "topic": "Math, String, Greedy, Game Theory",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color"
    },
    {
      "title": "Filter Restaurants by Vegan-Friendly, Price and Distance",
      "difficulty": "Medium",
      "topic": "Array, Sorting",
      "freq": 97.3,
      "link": "https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance"
    },
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 94.2,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 94.2,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    },
    {
      "title": "Longest Common Prefix",
      "difficulty": "Easy",
      "topic": "Array, String, Trie",
      "freq": 94.2,
      "link": "https://leetcode.com/problems/longest-common-prefix"
    },
    {
      "title": "Group Anagrams",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Sorting",
      "freq": 94.2,
      "link": "https://leetcode.com/problems/group-anagrams"
    },
    {
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Quicksort",
      "freq": 94.2,
      "link": "https://leetcode.com/problems/merge-intervals"
    },
    {
      "title": "Word Ladder II",
      "difficulty": "Hard",
      "topic": "Hash Table, String, Backtracking, Breadth-First Search, Bidirectional Search",
      "freq": 94.2,
      "link": "https://leetcode.com/problems/word-ladder-ii"
    },
    {
      "title": "Word Ladder",
      "difficulty": "Hard",
      "topic": "Hash Table, String, Breadth-First Search, Bidirectional Search",
      "freq": 94.2,
      "link": "https://leetcode.com/problems/word-ladder"
    },
    {
      "title": "Reverse Words in a String",
      "difficulty": "Medium",
      "topic": "Two Pointers, String",
      "freq": 94.2,
      "link": "https://leetcode.com/problems/reverse-words-in-a-string"
    },
    {
      "title": "Active Businesses",
      "difficulty": "Medium",
      "topic": "Database",
      "freq": 94.2,
      "link": "https://leetcode.com/problems/active-businesses"
    }
  ],
  "coinbase": [
    {
      "title": "Simple Bank System",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Design, Simulation",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/simple-bank-system"
    },
    {
      "title": "Zigzag Iterator",
      "difficulty": "Medium",
      "topic": "Array, Design, Queue, Iterator",
      "freq": 91.0,
      "link": "https://leetcode.com/problems/zigzag-iterator"
    },
    {
      "title": "Time Based Key-Value Store",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Binary Search, Design",
      "freq": 88.5,
      "link": "https://leetcode.com/problems/time-based-key-value-store"
    },
    {
      "title": "Design In-Memory File System",
      "difficulty": "Hard",
      "topic": "Hash Table, String, Design, Trie, Sorting",
      "freq": 82.5,
      "link": "https://leetcode.com/problems/design-in-memory-file-system"
    },
    {
      "title": "Decode the Message",
      "difficulty": "Easy",
      "topic": "Hash Table, String",
      "freq": 78.6,
      "link": "https://leetcode.com/problems/decode-the-message"
    },
    {
      "title": "Random Pick with Weight",
      "difficulty": "Medium",
      "topic": "Array, Math, Binary Search, Prefix Sum, Randomized",
      "freq": 70.7,
      "link": "https://leetcode.com/problems/random-pick-with-weight"
    },
    {
      "title": "Design File System",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Design, Trie",
      "freq": 49.3,
      "link": "https://leetcode.com/problems/design-file-system"
    },
    {
      "title": "Find the Length of the Longest Common Prefix",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Trie",
      "freq": 49.3,
      "link": "https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix"
    },
    {
      "title": "Best Time to Buy and Sell Stock",
      "difficulty": "Easy",
      "topic": "Array, Dynamic Programming",
      "freq": 49.3,
      "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock"
    },
    {
      "title": "Design Circular Queue",
      "difficulty": "Medium",
      "topic": "Array, Linked List, Design, Queue",
      "freq": 49.3,
      "link": "https://leetcode.com/problems/design-circular-queue"
    },
    {
      "title": "Course Schedule II",
      "difficulty": "Medium",
      "topic": "Depth-First Search, Breadth-First Search, Graph Theory, Topological Sort",
      "freq": 49.3,
      "link": "https://leetcode.com/problems/course-schedule-ii"
    }
  ],
  "robinhood": [
    {
      "title": "Top K Frequent Words",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Trie, Sorting, Heap (Priority Queue), Bucket Sort, Counting",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/top-k-frequent-words"
    },
    {
      "title": "Ways to Split Array Into Three Subarrays",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Binary Search, Prefix Sum",
      "freq": 97.5,
      "link": "https://leetcode.com/problems/ways-to-split-array-into-three-subarrays"
    },
    {
      "title": "Restore the Array From Adjacent Pairs",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Depth-First Search",
      "freq": 97.5,
      "link": "https://leetcode.com/problems/restore-the-array-from-adjacent-pairs"
    },
    {
      "title": "Brightest Position on Street",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Prefix Sum, Ordered Set",
      "freq": 94.7,
      "link": "https://leetcode.com/problems/brightest-position-on-street"
    },
    {
      "title": "Count Good Meals",
      "difficulty": "Medium",
      "topic": "Array, Hash Table",
      "freq": 94.7,
      "link": "https://leetcode.com/problems/count-good-meals"
    },
    {
      "title": "Number of Orders in the Backlog",
      "difficulty": "Medium",
      "topic": "Array, Heap (Priority Queue), Simulation",
      "freq": 94.7,
      "link": "https://leetcode.com/problems/number-of-orders-in-the-backlog"
    },
    {
      "title": "Check if There is a Valid Path in a Grid",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Union-Find, Matrix",
      "freq": 94.7,
      "link": "https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid"
    },
    {
      "title": "Capital Gain/Loss",
      "difficulty": "Medium",
      "topic": "Database",
      "freq": 94.7,
      "link": "https://leetcode.com/problems/capital-gainloss"
    },
    {
      "title": "Count the Number of Consistent Strings",
      "difficulty": "Easy",
      "topic": "Array, Hash Table, String, Bit Manipulation, Counting",
      "freq": 94.7,
      "link": "https://leetcode.com/problems/count-the-number-of-consistent-strings"
    },
    {
      "title": "Text Justification",
      "difficulty": "Hard",
      "topic": "Array, String, Simulation",
      "freq": 91.5,
      "link": "https://leetcode.com/problems/text-justification"
    },
    {
      "title": "Minesweeper",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Matrix",
      "freq": 78.2,
      "link": "https://leetcode.com/problems/minesweeper"
    },
    {
      "title": "Top K Frequent Elements",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Divide and Conquer, Sorting, Heap (Priority Queue), Bucket Sort, Counting, Quickselect",
      "freq": 71.3,
      "link": "https://leetcode.com/problems/top-k-frequent-elements"
    }
  ],
  "roblox": [
    {
      "title": "Candy Crush",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Matrix, Simulation",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/candy-crush"
    },
    {
      "title": "Reorganize String",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Greedy, Sorting, Heap (Priority Queue), Counting",
      "freq": 92.2,
      "link": "https://leetcode.com/problems/reorganize-string"
    },
    {
      "title": "Number of Ways to Wear Different Hats to Each Other",
      "difficulty": "Hard",
      "topic": "Array, Dynamic Programming, Bit Manipulation, Bitmask, Bipartite Graph, Matching (Graph), Perfect Matching",
      "freq": 91.5,
      "link": "https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other"
    },
    {
      "title": "Text Justification",
      "difficulty": "Hard",
      "topic": "Array, String, Simulation",
      "freq": 87.7,
      "link": "https://leetcode.com/problems/text-justification"
    },
    {
      "title": "Maximize Distance to Closest Person",
      "difficulty": "Medium",
      "topic": "Array",
      "freq": 85.0,
      "link": "https://leetcode.com/problems/maximize-distance-to-closest-person"
    },
    {
      "title": "Task Scheduler",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Greedy, Sorting, Heap (Priority Queue), Counting",
      "freq": 84.0,
      "link": "https://leetcode.com/problems/task-scheduler"
    },
    {
      "title": "Course Schedule II",
      "difficulty": "Medium",
      "topic": "Depth-First Search, Breadth-First Search, Graph Theory, Topological Sort",
      "freq": 82.9,
      "link": "https://leetcode.com/problems/course-schedule-ii"
    },
    {
      "title": "Design Hit Counter",
      "difficulty": "Medium",
      "topic": "Array, Binary Search, Design, Queue, Data Stream",
      "freq": 76.7,
      "link": "https://leetcode.com/problems/design-hit-counter"
    },
    {
      "title": "Integer to English Words",
      "difficulty": "Hard",
      "topic": "Math, String, Recursion",
      "freq": 71.8,
      "link": "https://leetcode.com/problems/integer-to-english-words"
    },
    {
      "title": "Design Search Autocomplete System",
      "difficulty": "Hard",
      "topic": "String, Depth-First Search, Design, Trie, Sorting, Heap (Priority Queue), Data Stream",
      "freq": 71.8,
      "link": "https://leetcode.com/problems/design-search-autocomplete-system"
    },
    {
      "title": "Rotate Image",
      "difficulty": "Medium",
      "topic": "Array, Math, Matrix",
      "freq": 67.7,
      "link": "https://leetcode.com/problems/rotate-image"
    },
    {
      "title": "Count Number of Nice Subarrays",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Math, Sliding Window, Prefix Sum",
      "freq": 67.7,
      "link": "https://leetcode.com/problems/count-number-of-nice-subarrays"
    }
  ],
  "servicenow": [
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 97.4,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    },
    {
      "title": "Lexicographically Smallest String After Operations With Constraint",
      "difficulty": "Medium",
      "topic": "String, Greedy",
      "freq": 91.5,
      "link": "https://leetcode.com/problems/lexicographically-smallest-string-after-operations-with-constraint"
    },
    {
      "title": "Number of Distinct Roll Sequences",
      "difficulty": "Hard",
      "topic": "Dynamic Programming, Memoization",
      "freq": 91.5,
      "link": "https://leetcode.com/problems/number-of-distinct-roll-sequences"
    },
    {
      "title": "Find Minimum Diameter After Merging Two Trees",
      "difficulty": "Hard",
      "topic": "Tree, Depth-First Search, Breadth-First Search, Graph Theory",
      "freq": 91.5,
      "link": "https://leetcode.com/problems/find-minimum-diameter-after-merging-two-trees"
    },
    {
      "title": "Maximum Score with Co-Prime Element",
      "difficulty": "Hard",
      "topic": "Array, Hash Table, Math, Combinatorics, Enumeration, Number Theory",
      "freq": 91.5,
      "link": "https://leetcode.com/problems/maximum-score-with-co-prime-element"
    },
    {
      "title": "Trapping Rain Water",
      "difficulty": "Hard",
      "topic": "Array, Two Pointers, Dynamic Programming, Stack, Monotonic Stack",
      "freq": 87.9,
      "link": "https://leetcode.com/problems/trapping-rain-water"
    },
    {
      "title": "Generate Parentheses",
      "difficulty": "Medium",
      "topic": "String, Dynamic Programming, Backtracking, Bracket Sequences",
      "freq": 83.8,
      "link": "https://leetcode.com/problems/generate-parentheses"
    },
    {
      "title": "Number of Islands",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Union-Find, Matrix",
      "freq": 83.8,
      "link": "https://leetcode.com/problems/number-of-islands"
    },
    {
      "title": "String Compression",
      "difficulty": "Medium",
      "topic": "Two Pointers, String",
      "freq": 83.8,
      "link": "https://leetcode.com/problems/string-compression"
    },
    {
      "title": "First Missing Positive",
      "difficulty": "Hard",
      "topic": "Array, Hash Table",
      "freq": 78.9,
      "link": "https://leetcode.com/problems/first-missing-positive"
    },
    {
      "title": "Container With Most Water",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Greedy",
      "freq": 72.9,
      "link": "https://leetcode.com/problems/container-with-most-water"
    }
  ],
  "workday": [
    {
      "title": "Break a Palindrome",
      "difficulty": "Medium",
      "topic": "String, Greedy",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/break-a-palindrome"
    },
    {
      "title": "Group Anagrams",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Sorting",
      "freq": 92.1,
      "link": "https://leetcode.com/problems/group-anagrams"
    },
    {
      "title": "Container With Most Water",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Greedy",
      "freq": 92.1,
      "link": "https://leetcode.com/problems/container-with-most-water"
    },
    {
      "title": "Sort Colors",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Sorting, Quicksort, Bubble Sort",
      "freq": 80.9,
      "link": "https://leetcode.com/problems/sort-colors"
    },
    {
      "title": "Top K Frequent Elements",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Divide and Conquer, Sorting, Heap (Priority Queue), Bucket Sort, Counting, Quickselect",
      "freq": 80.9,
      "link": "https://leetcode.com/problems/top-k-frequent-elements"
    },
    {
      "title": "Permutations",
      "difficulty": "Medium",
      "topic": "Array, Backtracking",
      "freq": 80.9,
      "link": "https://leetcode.com/problems/permutations"
    }
  ],
  "snowflake": [
    {
      "title": "Happy Number",
      "difficulty": "Easy",
      "topic": "Hash Table, Math, Two Pointers, Floyd's Cycle Finding Algorithm",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/happy-number"
    },
    {
      "title": "Parallel Courses III",
      "difficulty": "Hard",
      "topic": "Array, Dynamic Programming, Graph Theory, Topological Sort, Directed Acyclic Graph",
      "freq": 97.1,
      "link": "https://leetcode.com/problems/parallel-courses-iii"
    },
    {
      "title": "Course Schedule II",
      "difficulty": "Medium",
      "topic": "Depth-First Search, Breadth-First Search, Graph Theory, Topological Sort",
      "freq": 95.5,
      "link": "https://leetcode.com/problems/course-schedule-ii"
    },
    {
      "title": "Design In-Memory File System",
      "difficulty": "Hard",
      "topic": "Hash Table, String, Design, Trie, Sorting",
      "freq": 92.9,
      "link": "https://leetcode.com/problems/design-in-memory-file-system"
    },
    {
      "title": "Trapping Rain Water",
      "difficulty": "Hard",
      "topic": "Array, Two Pointers, Dynamic Programming, Stack, Monotonic Stack",
      "freq": 89.9,
      "link": "https://leetcode.com/problems/trapping-rain-water"
    },
    {
      "title": "Minimum Window Substring",
      "difficulty": "Hard",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 89.9,
      "link": "https://leetcode.com/problems/minimum-window-substring"
    },
    {
      "title": "Word Search II",
      "difficulty": "Hard",
      "topic": "Array, String, Backtracking, Trie, Matrix",
      "freq": 88.8,
      "link": "https://leetcode.com/problems/word-search-ii"
    },
    {
      "title": "Painting the Walls",
      "difficulty": "Hard",
      "topic": "Array, Dynamic Programming",
      "freq": 85.1,
      "link": "https://leetcode.com/problems/painting-the-walls"
    },
    {
      "title": "Calculate Amount Paid in Taxes",
      "difficulty": "Easy",
      "topic": "Array, Simulation",
      "freq": 83.8,
      "link": "https://leetcode.com/problems/calculate-amount-paid-in-taxes"
    },
    {
      "title": "Throne Inheritance",
      "difficulty": "Medium",
      "topic": "Hash Table, Tree, Depth-First Search, Design",
      "freq": 83.8,
      "link": "https://leetcode.com/problems/throne-inheritance"
    },
    {
      "title": "Step-By-Step Directions From a Binary Tree Node to Another",
      "difficulty": "Medium",
      "topic": "String, Tree, Depth-First Search, Binary Tree, Binary Lifting, Lowest Common Ancestor",
      "freq": 83.8,
      "link": "https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another"
    },
    {
      "title": "Maximum Profit in Job Scheduling",
      "difficulty": "Hard",
      "topic": "Array, Binary Search, Dynamic Programming, Sorting",
      "freq": 80.8,
      "link": "https://leetcode.com/problems/maximum-profit-in-job-scheduling"
    }
  ],
  "mongodb": [
    {
      "title": "Implement Trie (Prefix Tree)",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Design, Trie",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/implement-trie-prefix-tree"
    },
    {
      "title": "Word Break",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Dynamic Programming, Trie, Memoization, Brute-Force Search",
      "freq": 97.1,
      "link": "https://leetcode.com/problems/word-break"
    },
    {
      "title": "Intersection of Two Arrays",
      "difficulty": "Easy",
      "topic": "Array, Hash Table, Two Pointers, Binary Search, Sorting",
      "freq": 97.1,
      "link": "https://leetcode.com/problems/intersection-of-two-arrays"
    },
    {
      "title": "Snapshot Array",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Binary Search, Design, Persistent Data Structure",
      "freq": 97.1,
      "link": "https://leetcode.com/problems/snapshot-array"
    },
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 89.9,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Merge k Sorted Lists",
      "difficulty": "Hard",
      "topic": "Linked List, Divide and Conquer, Heap (Priority Queue), Merge Sort, Tournament Sort",
      "freq": 85.3,
      "link": "https://leetcode.com/problems/merge-k-sorted-lists"
    },
    {
      "title": "Text Justification",
      "difficulty": "Hard",
      "topic": "Array, String, Simulation",
      "freq": 85.3,
      "link": "https://leetcode.com/problems/text-justification"
    },
    {
      "title": "Web Crawler Multithreaded",
      "difficulty": "Medium",
      "topic": "Depth-First Search, Breadth-First Search, Concurrency",
      "freq": 79.7,
      "link": "https://leetcode.com/problems/web-crawler-multithreaded"
    },
    {
      "title": "Convert JSON String to Object",
      "difficulty": "Hard",
      "topic": "General",
      "freq": 79.7,
      "link": "https://leetcode.com/problems/convert-json-string-to-object"
    },
    {
      "title": "Insert Interval",
      "difficulty": "Medium",
      "topic": "Array",
      "freq": 72.6,
      "link": "https://leetcode.com/problems/insert-interval"
    },
    {
      "title": "Stock Price Fluctuation",
      "difficulty": "Medium",
      "topic": "Hash Table, Design, Heap (Priority Queue), Data Stream, Ordered Set",
      "freq": 72.6,
      "link": "https://leetcode.com/problems/stock-price-fluctuation"
    },
    {
      "title": "Sliding Window Maximum",
      "difficulty": "Hard",
      "topic": "Array, Queue, Sliding Window, Heap (Priority Queue), Monotonic Queue, Range Minimum/Maximum Query",
      "freq": 72.6,
      "link": "https://leetcode.com/problems/sliding-window-maximum"
    }
  ],
  "databricks": [
    {
      "title": "Design Hit Counter",
      "difficulty": "Medium",
      "topic": "Array, Binary Search, Design, Queue, Data Stream",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/design-hit-counter"
    },
    {
      "title": "IP to CIDR",
      "difficulty": "Medium",
      "topic": "String, Bit Manipulation",
      "freq": 97.6,
      "link": "https://leetcode.com/problems/ip-to-cidr"
    },
    {
      "title": "Design Tic-Tac-Toe",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Design, Matrix, Simulation",
      "freq": 93.6,
      "link": "https://leetcode.com/problems/design-tic-tac-toe"
    },
    {
      "title": "Find All Anagrams in a String",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 84.4,
      "link": "https://leetcode.com/problems/find-all-anagrams-in-a-string"
    },
    {
      "title": "Step-By-Step Directions From a Binary Tree Node to Another",
      "difficulty": "Medium",
      "topic": "String, Tree, Depth-First Search, Binary Tree, Binary Lifting, Lowest Common Ancestor",
      "freq": 83.7,
      "link": "https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another"
    },
    {
      "title": "House Robber",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming",
      "freq": 83.7,
      "link": "https://leetcode.com/problems/house-robber"
    },
    {
      "title": "Time Based Key-Value Store",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Binary Search, Design",
      "freq": 79.9,
      "link": "https://leetcode.com/problems/time-based-key-value-store"
    },
    {
      "title": "House Robber II",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming",
      "freq": 78.1,
      "link": "https://leetcode.com/problems/house-robber-ii"
    },
    {
      "title": "RLE Iterator",
      "difficulty": "Medium",
      "topic": "Array, Design, Counting, Iterator",
      "freq": 65.2,
      "link": "https://leetcode.com/problems/rle-iterator"
    },
    {
      "title": "Number of Recent Calls",
      "difficulty": "Easy",
      "topic": "Design, Queue, Data Stream",
      "freq": 63.3,
      "link": "https://leetcode.com/problems/number-of-recent-calls"
    },
    {
      "title": "Shortest Path in a Grid with Obstacles Elimination",
      "difficulty": "Hard",
      "topic": "Array, Breadth-First Search, Matrix",
      "freq": 63.3,
      "link": "https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination"
    },
    {
      "title": "Longest Palindrome by Concatenating Two Letter Words",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Greedy, Counting",
      "freq": 61.1,
      "link": "https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words"
    }
  ],
  "datadog": [
    {
      "title": "Most Common Word",
      "difficulty": "Easy",
      "topic": "Array, Hash Table, String, Counting",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/most-common-word"
    },
    {
      "title": "Coin Change",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming, Breadth-First Search, Knapsack Problem, Complete Knapsack",
      "freq": 93.8,
      "link": "https://leetcode.com/problems/coin-change"
    },
    {
      "title": "Meeting Scheduler",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Sorting",
      "freq": 91.3,
      "link": "https://leetcode.com/problems/meeting-scheduler"
    },
    {
      "title": "Valid Word Abbreviation",
      "difficulty": "Easy",
      "topic": "Two Pointers, String",
      "freq": 89.9,
      "link": "https://leetcode.com/problems/valid-word-abbreviation"
    },
    {
      "title": "Design Add and Search Words Data Structure",
      "difficulty": "Medium",
      "topic": "String, Depth-First Search, Design, Trie",
      "freq": 85.0,
      "link": "https://leetcode.com/problems/design-add-and-search-words-data-structure"
    },
    {
      "title": "Maximum Depth of N-ary Tree",
      "difficulty": "Easy",
      "topic": "Tree, Depth-First Search, Breadth-First Search",
      "freq": 83.0,
      "link": "https://leetcode.com/problems/maximum-depth-of-n-ary-tree"
    },
    {
      "title": "Design Circular Queue",
      "difficulty": "Medium",
      "topic": "Array, Linked List, Design, Queue",
      "freq": 78.5,
      "link": "https://leetcode.com/problems/design-circular-queue"
    },
    {
      "title": "People Whose List of Favorite Companies Is Not a Subset of Another List",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String",
      "freq": 68.9,
      "link": "https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list"
    },
    {
      "title": "House Robber",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming",
      "freq": 68.9,
      "link": "https://leetcode.com/problems/house-robber"
    },
    {
      "title": "Maximum Vacation Days",
      "difficulty": "Hard",
      "topic": "Array, Dynamic Programming, Matrix",
      "freq": 58.5,
      "link": "https://leetcode.com/problems/maximum-vacation-days"
    },
    {
      "title": "Sliding Window Median",
      "difficulty": "Hard",
      "topic": "Array, Hash Table, Sliding Window, Heap (Priority Queue), Treap",
      "freq": 58.5,
      "link": "https://leetcode.com/problems/sliding-window-median"
    },
    {
      "title": "Binary Tree Maximum Path Sum",
      "difficulty": "Hard",
      "topic": "Dynamic Programming, Tree, Depth-First Search, Binary Tree, DP on Trees",
      "freq": 58.5,
      "link": "https://leetcode.com/problems/binary-tree-maximum-path-sum"
    }
  ],
  "okta": [
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Insert Delete GetRandom O(1)",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Math, Design, Randomized",
      "freq": 95.1,
      "link": "https://leetcode.com/problems/insert-delete-getrandom-o1"
    },
    {
      "title": "Simple Bank System",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Design, Simulation",
      "freq": 95.1,
      "link": "https://leetcode.com/problems/simple-bank-system"
    },
    {
      "title": "Find Median from Data Stream",
      "difficulty": "Hard",
      "topic": "Two Pointers, Design, Sorting, Heap (Priority Queue), Data Stream",
      "freq": 89.2,
      "link": "https://leetcode.com/problems/find-median-from-data-stream"
    },
    {
      "title": "All Nodes Distance K in Binary Tree",
      "difficulty": "Medium",
      "topic": "Hash Table, Tree, Depth-First Search, Breadth-First Search, Binary Tree",
      "freq": 89.2,
      "link": "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree"
    },
    {
      "title": "Group Anagrams",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Sorting",
      "freq": 89.2,
      "link": "https://leetcode.com/problems/group-anagrams"
    },
    {
      "title": "Longest Consecutive Sequence",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Union-Find",
      "freq": 81.6,
      "link": "https://leetcode.com/problems/longest-consecutive-sequence"
    },
    {
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Quicksort",
      "freq": 70.8,
      "link": "https://leetcode.com/problems/merge-intervals"
    },
    {
      "title": "Median of Two Sorted Arrays",
      "difficulty": "Hard",
      "topic": "Array, Binary Search, Divide and Conquer",
      "freq": 70.8,
      "link": "https://leetcode.com/problems/median-of-two-sorted-arrays"
    },
    {
      "title": "Container With Most Water",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Greedy",
      "freq": 70.8,
      "link": "https://leetcode.com/problems/container-with-most-water"
    },
    {
      "title": "Making File Names Unique",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String",
      "freq": 70.8,
      "link": "https://leetcode.com/problems/making-file-names-unique"
    },
    {
      "title": "Range Sum Query 2D - Immutable",
      "difficulty": "Medium",
      "topic": "Array, Design, Matrix, Prefix Sum",
      "freq": 70.8,
      "link": "https://leetcode.com/problems/range-sum-query-2d-immutable"
    }
  ],
  "splunk": [
    {
      "title": "Longest Increasing Subsequence",
      "difficulty": "Medium",
      "topic": "Array, Binary Search, Dynamic Programming, Longest Increasing Subsequence",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/longest-increasing-subsequence"
    },
    {
      "title": "Meeting Rooms II",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Greedy, Sorting, Heap (Priority Queue), Prefix Sum",
      "freq": 87.7,
      "link": "https://leetcode.com/problems/meeting-rooms-ii"
    },
    {
      "title": "Find Median from Data Stream",
      "difficulty": "Hard",
      "topic": "Two Pointers, Design, Sorting, Heap (Priority Queue), Data Stream",
      "freq": 87.7,
      "link": "https://leetcode.com/problems/find-median-from-data-stream"
    },
    {
      "title": "Find First and Last Position of Element in Sorted Array",
      "difficulty": "Medium",
      "topic": "Array, Binary Search",
      "freq": 87.7,
      "link": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array"
    },
    {
      "title": "Minimum Height Trees",
      "difficulty": "Medium",
      "topic": "Depth-First Search, Breadth-First Search, Graph Theory, Topological Sort",
      "freq": 87.7,
      "link": "https://leetcode.com/problems/minimum-height-trees"
    },
    {
      "title": "Find All Anagrams in a String",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 87.7,
      "link": "https://leetcode.com/problems/find-all-anagrams-in-a-string"
    },
    {
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "topic": "String, Stack, Bracket Sequences",
      "freq": 87.7,
      "link": "https://leetcode.com/problems/valid-parentheses"
    },
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 87.7,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Design Circular Queue",
      "difficulty": "Medium",
      "topic": "Array, Linked List, Design, Queue",
      "freq": 87.7,
      "link": "https://leetcode.com/problems/design-circular-queue"
    },
    {
      "title": "Number of Islands",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Union-Find, Matrix",
      "freq": 87.7,
      "link": "https://leetcode.com/problems/number-of-islands"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 87.7,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    }
  ],
  "asana": [
    {
      "title": "K Closest Points to Origin",
      "difficulty": "Medium",
      "topic": "Array, Math, Divide and Conquer, Geometry, Sorting, Heap (Priority Queue), Quickselect, K-D Tree",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/k-closest-points-to-origin"
    },
    {
      "title": "Product of Array Except Self",
      "difficulty": "Medium",
      "topic": "Array, Prefix Sum",
      "freq": 98.5,
      "link": "https://leetcode.com/problems/product-of-array-except-self"
    },
    {
      "title": "Maximum Repeating Substring",
      "difficulty": "Easy",
      "topic": "String, Dynamic Programming, String Matching",
      "freq": 88.7,
      "link": "https://leetcode.com/problems/maximum-repeating-substring"
    },
    {
      "title": "Minimum Cost Path with Edge Reversals",
      "difficulty": "Medium",
      "topic": "Graph Theory, Heap (Priority Queue), Shortest Path",
      "freq": 88.7,
      "link": "https://leetcode.com/problems/minimum-cost-path-with-edge-reversals"
    },
    {
      "title": "Validate Binary Search Tree",
      "difficulty": "Medium",
      "topic": "Tree, Depth-First Search, Binary Search Tree, Binary Tree",
      "freq": 60.6,
      "link": "https://leetcode.com/problems/validate-binary-search-tree"
    }
  ],
  "grammarly": [
    {
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Quicksort",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/merge-intervals"
    },
    {
      "title": "Remove All Adjacent Duplicates In String",
      "difficulty": "Easy",
      "topic": "String, Stack",
      "freq": 91.8,
      "link": "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string"
    },
    {
      "title": "Vowel Spellchecker",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String",
      "freq": 89.1,
      "link": "https://leetcode.com/problems/vowel-spellchecker"
    },
    {
      "title": "Insert Delete GetRandom O(1)",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Math, Design, Randomized",
      "freq": 89.1,
      "link": "https://leetcode.com/problems/insert-delete-getrandom-o1"
    },
    {
      "title": "Search in Rotated Sorted Array",
      "difficulty": "Medium",
      "topic": "Array, Binary Search",
      "freq": 89.1,
      "link": "https://leetcode.com/problems/search-in-rotated-sorted-array"
    },
    {
      "title": "Remove All Adjacent Duplicates in String II",
      "difficulty": "Medium",
      "topic": "String, Stack",
      "freq": 87.7,
      "link": "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii"
    },
    {
      "title": "Climbing Stairs",
      "difficulty": "Easy",
      "topic": "Math, Dynamic Programming, Memoization",
      "freq": 84.4,
      "link": "https://leetcode.com/problems/climbing-stairs"
    },
    {
      "title": "Repeated DNA Sequences",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Bit Manipulation, Sliding Window, Rolling Hash, Hash Function, Z Algorithm, Boyer\u2013Moore String-Search Algorithm",
      "freq": 80.5,
      "link": "https://leetcode.com/problems/repeated-dna-sequences"
    },
    {
      "title": "Non-overlapping Intervals",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming, Greedy, Sorting",
      "freq": 80.5,
      "link": "https://leetcode.com/problems/non-overlapping-intervals"
    },
    {
      "title": "Two Best Non-Overlapping Events",
      "difficulty": "Medium",
      "topic": "Array, Binary Search, Dynamic Programming, Sorting, Heap (Priority Queue)",
      "freq": 80.5,
      "link": "https://leetcode.com/problems/two-best-non-overlapping-events"
    },
    {
      "title": "Sqrt(x)",
      "difficulty": "Easy",
      "topic": "Math, Binary Search, Newton's Method",
      "freq": 78.3,
      "link": "https://leetcode.com/problems/sqrtx"
    },
    {
      "title": "Generate Parentheses",
      "difficulty": "Medium",
      "topic": "String, Dynamic Programming, Backtracking, Bracket Sequences",
      "freq": 75.8,
      "link": "https://leetcode.com/problems/generate-parentheses"
    }
  ],
  "duolingo": [
    {
      "title": "Encrypt and Decrypt Strings",
      "difficulty": "Hard",
      "topic": "Array, Hash Table, String, Design, Trie",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/encrypt-and-decrypt-strings"
    },
    {
      "title": "K Radius Subarray Averages",
      "difficulty": "Medium",
      "topic": "Array, Sliding Window",
      "freq": 80.9,
      "link": "https://leetcode.com/problems/k-radius-subarray-averages"
    },
    {
      "title": "Minimum Number of People to Teach",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Greedy",
      "freq": 80.9,
      "link": "https://leetcode.com/problems/minimum-number-of-people-to-teach"
    },
    {
      "title": "Longest Increasing Path in a Matrix",
      "difficulty": "Hard",
      "topic": "Array, Dynamic Programming, Depth-First Search, Breadth-First Search, Graph Theory, Topological Sort, Memoization, Matrix, Directed Acyclic Graph",
      "freq": 72.0,
      "link": "https://leetcode.com/problems/longest-increasing-path-in-a-matrix"
    },
    {
      "title": "Task Scheduler II",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Simulation",
      "freq": 67.8,
      "link": "https://leetcode.com/problems/task-scheduler-ii"
    }
  ],
  "instacart": [
    {
      "title": "Find First and Last Position of Element in Sorted Array",
      "difficulty": "Medium",
      "topic": "Array, Binary Search",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array"
    },
    {
      "title": "Squares of a Sorted Array",
      "difficulty": "Easy",
      "topic": "Array, Two Pointers, Sorting",
      "freq": 92.1,
      "link": "https://leetcode.com/problems/squares-of-a-sorted-array"
    },
    {
      "title": "Average Waiting Time",
      "difficulty": "Medium",
      "topic": "Array, Simulation",
      "freq": 92.1,
      "link": "https://leetcode.com/problems/average-waiting-time"
    },
    {
      "title": "Check if Every Row and Column Contains All Numbers",
      "difficulty": "Easy",
      "topic": "Array, Hash Table, Matrix",
      "freq": 89.6,
      "link": "https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers"
    },
    {
      "title": "Time Based Key-Value Store",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Binary Search, Design",
      "freq": 74.8,
      "link": "https://leetcode.com/problems/time-based-key-value-store"
    },
    {
      "title": "Wildcard Matching",
      "difficulty": "Hard",
      "topic": "String, Dynamic Programming, Greedy, Recursion",
      "freq": 74.8,
      "link": "https://leetcode.com/problems/wildcard-matching"
    },
    {
      "title": "Find the Length of the Longest Common Prefix",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Trie",
      "freq": 74.8,
      "link": "https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix"
    },
    {
      "title": "Simple Bank System",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Design, Simulation",
      "freq": 68.6,
      "link": "https://leetcode.com/problems/simple-bank-system"
    },
    {
      "title": "Group Anagrams",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Sorting",
      "freq": 68.6,
      "link": "https://leetcode.com/problems/group-anagrams"
    }
  ],
  "expedia": [
    {
      "title": "Find the Smallest Divisor Given a Threshold",
      "difficulty": "Medium",
      "topic": "Array, Binary Search",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold"
    },
    {
      "title": "The kth Factor of n",
      "difficulty": "Medium",
      "topic": "Math, Number Theory, Prime Factorization",
      "freq": 94.6,
      "link": "https://leetcode.com/problems/the-kth-factor-of-n"
    },
    {
      "title": "Valid Triangle Number",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Binary Search, Greedy, Sorting",
      "freq": 94.6,
      "link": "https://leetcode.com/problems/valid-triangle-number"
    },
    {
      "title": "The Earliest Moment When Everyone Become Friends",
      "difficulty": "Medium",
      "topic": "Array, Union-Find, Sorting",
      "freq": 91.4,
      "link": "https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends"
    },
    {
      "title": "Minimum Swaps to Group All 1's Together",
      "difficulty": "Medium",
      "topic": "Array, Sliding Window",
      "freq": 91.4,
      "link": "https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together"
    },
    {
      "title": "Break a Palindrome",
      "difficulty": "Medium",
      "topic": "String, Greedy",
      "freq": 91.4,
      "link": "https://leetcode.com/problems/break-a-palindrome"
    },
    {
      "title": "Unique Substrings With Equal Digit Frequency",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Rolling Hash, Counting, Hash Function",
      "freq": 91.4,
      "link": "https://leetcode.com/problems/unique-substrings-with-equal-digit-frequency"
    },
    {
      "title": "Valid Word",
      "difficulty": "Easy",
      "topic": "String",
      "freq": 91.4,
      "link": "https://leetcode.com/problems/valid-word"
    },
    {
      "title": "Minimum Replacements to Sort the Array",
      "difficulty": "Hard",
      "topic": "Array, Math, Greedy",
      "freq": 91.4,
      "link": "https://leetcode.com/problems/minimum-replacements-to-sort-the-array"
    },
    {
      "title": "String Compression",
      "difficulty": "Medium",
      "topic": "Two Pointers, String",
      "freq": 91.4,
      "link": "https://leetcode.com/problems/string-compression"
    },
    {
      "title": "Divide Players Into Teams of Equal Skill",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Two Pointers, Sorting",
      "freq": 91.4,
      "link": "https://leetcode.com/problems/divide-players-into-teams-of-equal-skill"
    },
    {
      "title": "Rearrange Words in a Sentence",
      "difficulty": "Medium",
      "topic": "String, Sorting",
      "freq": 91.4,
      "link": "https://leetcode.com/problems/rearrange-words-in-a-sentence"
    }
  ],
  "tripadvisor": [
    {
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "topic": "String, Stack, Bracket Sequences",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/valid-parentheses"
    },
    {
      "title": "Find Common Characters",
      "difficulty": "Easy",
      "topic": "Array, Hash Table, String",
      "freq": 91.8,
      "link": "https://leetcode.com/problems/find-common-characters"
    },
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 71.9,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Ransom Note",
      "difficulty": "Easy",
      "topic": "Hash Table, String, Counting",
      "freq": 71.9,
      "link": "https://leetcode.com/problems/ransom-note"
    },
    {
      "title": "Min Stack",
      "difficulty": "Medium",
      "topic": "Stack, Design",
      "freq": 63.6,
      "link": "https://leetcode.com/problems/min-stack"
    }
  ],
  "booking": [
    {
      "title": "Reward Top K Students",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Sorting, Heap (Priority Queue)",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/reward-top-k-students"
    },
    {
      "title": "Delete Duplicate Folders in System",
      "difficulty": "Hard",
      "topic": "Array, Hash Table, String, Depth-First Search, Trie, Sorting, Hash Function",
      "freq": 82.2,
      "link": "https://leetcode.com/problems/delete-duplicate-folders-in-system"
    },
    {
      "title": "Two Out of Three",
      "difficulty": "Easy",
      "topic": "Array, Hash Table, Bit Manipulation",
      "freq": 82.2,
      "link": "https://leetcode.com/problems/two-out-of-three"
    },
    {
      "title": "Coloring A Border",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Matrix",
      "freq": 79.7,
      "link": "https://leetcode.com/problems/coloring-a-border"
    },
    {
      "title": "K Highest Ranked Items Within a Price Range",
      "difficulty": "Medium",
      "topic": "Array, Breadth-First Search, Sorting, Heap (Priority Queue), Matrix",
      "freq": 79.7,
      "link": "https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range"
    },
    {
      "title": "Order Two Columns Independently",
      "difficulty": "Medium",
      "topic": "Database",
      "freq": 79.7,
      "link": "https://leetcode.com/problems/order-two-columns-independently"
    },
    {
      "title": "Sliding Window Maximum",
      "difficulty": "Hard",
      "topic": "Array, Queue, Sliding Window, Heap (Priority Queue), Monotonic Queue, Range Minimum/Maximum Query",
      "freq": 73.7,
      "link": "https://leetcode.com/problems/sliding-window-maximum"
    },
    {
      "title": "Permutations",
      "difficulty": "Medium",
      "topic": "Array, Backtracking",
      "freq": 69.9,
      "link": "https://leetcode.com/problems/permutations"
    },
    {
      "title": "Maximal Square",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming, Matrix",
      "freq": 65.2,
      "link": "https://leetcode.com/problems/maximal-square"
    },
    {
      "title": "Reconstruct Itinerary",
      "difficulty": "Hard",
      "topic": "Array, String, Depth-First Search, Graph Theory, Sorting, Heap (Priority Queue), Eulerian Circuit, Eulerian Path, Semi-Eulerian Graph",
      "freq": 65.2,
      "link": "https://leetcode.com/problems/reconstruct-itinerary"
    },
    {
      "title": "Integer to Roman",
      "difficulty": "Medium",
      "topic": "Hash Table, Math, String",
      "freq": 65.2,
      "link": "https://leetcode.com/problems/integer-to-roman"
    },
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 59.2,
      "link": "https://leetcode.com/problems/lru-cache"
    }
  ],
  "wayfair": [
    {
      "title": "Best Sightseeing Pair",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/best-sightseeing-pair"
    },
    {
      "title": "Minimum Moves to Reach Target Score",
      "difficulty": "Medium",
      "topic": "Math, Greedy",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/minimum-moves-to-reach-target-score"
    },
    {
      "title": "Largest Magic Square",
      "difficulty": "Medium",
      "topic": "Array, Matrix, Prefix Sum",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/largest-magic-square"
    },
    {
      "title": "Design A Leaderboard",
      "difficulty": "Medium",
      "topic": "Hash Table, Design, Sorting",
      "freq": 97.0,
      "link": "https://leetcode.com/problems/design-a-leaderboard"
    },
    {
      "title": "Alert Using Same Key-Card Three or More Times in a One Hour Period",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Sorting",
      "freq": 97.0,
      "link": "https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period"
    },
    {
      "title": "Maximum Number of Balloons",
      "difficulty": "Easy",
      "topic": "Hash Table, String, Counting",
      "freq": 97.0,
      "link": "https://leetcode.com/problems/maximum-number-of-balloons"
    },
    {
      "title": "Delete Characters to Make Fancy String",
      "difficulty": "Easy",
      "topic": "String",
      "freq": 97.0,
      "link": "https://leetcode.com/problems/delete-characters-to-make-fancy-string"
    },
    {
      "title": "Longest Happy String",
      "difficulty": "Medium",
      "topic": "String, Greedy, Heap (Priority Queue)",
      "freq": 97.0,
      "link": "https://leetcode.com/problems/longest-happy-string"
    },
    {
      "title": "Tournament Winners",
      "difficulty": "Hard",
      "topic": "Database",
      "freq": 97.0,
      "link": "https://leetcode.com/problems/tournament-winners"
    },
    {
      "title": "Team Scores in Football Tournament",
      "difficulty": "Medium",
      "topic": "Database",
      "freq": 97.0,
      "link": "https://leetcode.com/problems/team-scores-in-football-tournament"
    },
    {
      "title": "Number of Divisible Substrings",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Counting, Prefix Sum",
      "freq": 97.0,
      "link": "https://leetcode.com/problems/number-of-divisible-substrings"
    },
    {
      "title": "Add Strings",
      "difficulty": "Easy",
      "topic": "Math, String, Simulation",
      "freq": 72.1,
      "link": "https://leetcode.com/problems/add-strings"
    }
  ],
  "chewy": [
    {
      "title": "Top K Frequent Elements",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Divide and Conquer, Sorting, Heap (Priority Queue), Bucket Sort, Counting, Quickselect",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/top-k-frequent-elements"
    },
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "topic": "String, Stack, Bracket Sequences",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/valid-parentheses"
    },
    {
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Quicksort",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/merge-intervals"
    },
    {
      "title": "Move Zeroes",
      "difficulty": "Easy",
      "topic": "Array, Two Pointers",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/move-zeroes"
    }
  ],
  "ebay": [
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Remove One Element to Make the Array Strictly Increasing",
      "difficulty": "Easy",
      "topic": "Array",
      "freq": 97.7,
      "link": "https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing"
    },
    {
      "title": "Alternating Digit Sum",
      "difficulty": "Easy",
      "topic": "Math",
      "freq": 92.4,
      "link": "https://leetcode.com/problems/alternating-digit-sum"
    },
    {
      "title": "Partition Equal Subset Sum",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming, Knapsack Problem, 0-1 Knapsack",
      "freq": 89.3,
      "link": "https://leetcode.com/problems/partition-equal-subset-sum"
    },
    {
      "title": "Subtree of Another Tree",
      "difficulty": "Easy",
      "topic": "Tree, Depth-First Search, String Matching, Binary Tree, Hash Function",
      "freq": 89.3,
      "link": "https://leetcode.com/problems/subtree-of-another-tree"
    },
    {
      "title": "Minimum Window Subsequence",
      "difficulty": "Hard",
      "topic": "String, Dynamic Programming, Sliding Window",
      "freq": 89.3,
      "link": "https://leetcode.com/problems/minimum-window-subsequence"
    },
    {
      "title": "Binary Gap",
      "difficulty": "Easy",
      "topic": "Bit Manipulation",
      "freq": 89.3,
      "link": "https://leetcode.com/problems/binary-gap"
    },
    {
      "title": "Design Skiplist",
      "difficulty": "Hard",
      "topic": "Linked List, Design",
      "freq": 89.3,
      "link": "https://leetcode.com/problems/design-skiplist"
    },
    {
      "title": "Minimize Maximum Pair Sum in Array",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Greedy, Sorting",
      "freq": 89.3,
      "link": "https://leetcode.com/problems/minimize-maximum-pair-sum-in-array"
    },
    {
      "title": "Spiral Matrix",
      "difficulty": "Medium",
      "topic": "Array, Matrix, Simulation",
      "freq": 89.3,
      "link": "https://leetcode.com/problems/spiral-matrix"
    },
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 85.8,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Number of Islands",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Union-Find, Matrix",
      "freq": 81.7,
      "link": "https://leetcode.com/problems/number-of-islands"
    }
  ],
  "zillow": [
    {
      "title": "Rotate Image",
      "difficulty": "Medium",
      "topic": "Array, Math, Matrix",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/rotate-image"
    }
  ],
  "nextdoor": [
    {
      "title": "Compare Version Numbers",
      "difficulty": "Medium",
      "topic": "Two Pointers, String",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/compare-version-numbers"
    },
    {
      "title": "All O`one Data Structure",
      "difficulty": "Hard",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 96.3,
      "link": "https://leetcode.com/problems/all-oone-data-structure"
    },
    {
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Quicksort",
      "freq": 89.0,
      "link": "https://leetcode.com/problems/merge-intervals"
    }
  ],
  "quora": [
    {
      "title": "Construct Target Array With Multiple Sums",
      "difficulty": "Hard",
      "topic": "Array, Heap (Priority Queue)",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/construct-target-array-with-multiple-sums"
    },
    {
      "title": "Range Frequency Queries",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Binary Search, Design, Segment Tree",
      "freq": 97.4,
      "link": "https://leetcode.com/problems/range-frequency-queries"
    },
    {
      "title": "Encode Number",
      "difficulty": "Medium",
      "topic": "Math, String, Bit Manipulation",
      "freq": 94.5,
      "link": "https://leetcode.com/problems/encode-number"
    },
    {
      "title": "1-bit and 2-bit Characters",
      "difficulty": "Easy",
      "topic": "Array",
      "freq": 94.5,
      "link": "https://leetcode.com/problems/1-bit-and-2-bit-characters"
    },
    {
      "title": "Sort the Matrix Diagonally",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Matrix",
      "freq": 94.5,
      "link": "https://leetcode.com/problems/sort-the-matrix-diagonally"
    },
    {
      "title": "Maximum Number of Words You Can Type",
      "difficulty": "Easy",
      "topic": "Hash Table, String",
      "freq": 94.5,
      "link": "https://leetcode.com/problems/maximum-number-of-words-you-can-type"
    },
    {
      "title": "Exam Room",
      "difficulty": "Medium",
      "topic": "Design, Heap (Priority Queue), Ordered Set",
      "freq": 94.5,
      "link": "https://leetcode.com/problems/exam-room"
    },
    {
      "title": "Subtract the Product and Sum of Digits of an Integer",
      "difficulty": "Easy",
      "topic": "Math",
      "freq": 94.5,
      "link": "https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer"
    },
    {
      "title": "Find Numbers with Even Number of Digits",
      "difficulty": "Easy",
      "topic": "Array, Math",
      "freq": 94.5,
      "link": "https://leetcode.com/problems/find-numbers-with-even-number-of-digits"
    },
    {
      "title": "Find the K-Beauty of a Number",
      "difficulty": "Easy",
      "topic": "Math, String, Sliding Window",
      "freq": 94.5,
      "link": "https://leetcode.com/problems/find-the-k-beauty-of-a-number"
    },
    {
      "title": "3Sum With Multiplicity",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Two Pointers, Sorting, Counting",
      "freq": 94.5,
      "link": "https://leetcode.com/problems/3sum-with-multiplicity"
    },
    {
      "title": "Substrings of Size Three with Distinct Characters",
      "difficulty": "Easy",
      "topic": "Hash Table, String, Sliding Window, Counting",
      "freq": 94.5,
      "link": "https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters"
    }
  ],
  "tinder": [
    {
      "title": "Find Median from Data Stream",
      "difficulty": "Hard",
      "topic": "Two Pointers, Design, Sorting, Heap (Priority Queue), Data Stream",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/find-median-from-data-stream"
    },
    {
      "title": "Kth Largest Element in a Stream",
      "difficulty": "Easy",
      "topic": "Tree, Design, Binary Search Tree, Heap (Priority Queue), Binary Tree, Data Stream",
      "freq": 92.9,
      "link": "https://leetcode.com/problems/kth-largest-element-in-a-stream"
    },
    {
      "title": "Text Justification",
      "difficulty": "Hard",
      "topic": "Array, String, Simulation",
      "freq": 73.5,
      "link": "https://leetcode.com/problems/text-justification"
    }
  ],
  "peloton": [
    {
      "title": "Insert Delete GetRandom O(1) - Duplicates allowed",
      "difficulty": "Hard",
      "topic": "Array, Hash Table, Math, Design, Randomized",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed"
    },
    {
      "title": "Insert Delete GetRandom O(1)",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Math, Design, Randomized",
      "freq": 95.1,
      "link": "https://leetcode.com/problems/insert-delete-getrandom-o1"
    }
  ],
  "grubhub": [
    {
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Quicksort",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/merge-intervals"
    },
    {
      "title": "Max Area of Island",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Union-Find, Matrix",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/max-area-of-island"
    }
  ],
  "postmates": [
    {
      "title": "Most Beautiful Item for Each Query",
      "difficulty": "Medium",
      "topic": "Array, Binary Search, Sorting",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/most-beautiful-item-for-each-query"
    },
    {
      "title": "Find the K-Beauty of a Number",
      "difficulty": "Easy",
      "topic": "Math, String, Sliding Window",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/find-the-k-beauty-of-a-number"
    },
    {
      "title": "Determine if Two Strings Are Close",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sorting, Counting",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/determine-if-two-strings-are-close"
    }
  ],
  "yahoo": [
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Maximum Depth of Binary Tree",
      "difficulty": "Easy",
      "topic": "Tree, Depth-First Search, Breadth-First Search, Binary Tree",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/maximum-depth-of-binary-tree"
    },
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Reverse Linked List",
      "difficulty": "Easy",
      "topic": "Linked List, Recursion",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/reverse-linked-list"
    },
    {
      "title": "Contains Duplicate",
      "difficulty": "Easy",
      "topic": "Array, Hash Table, Sorting",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/contains-duplicate"
    },
    {
      "title": "Serialize and Deserialize Binary Tree",
      "difficulty": "Hard",
      "topic": "String, Tree, Depth-First Search, Breadth-First Search, Design, Binary Tree",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree"
    },
    {
      "title": "Largest Palindrome Product",
      "difficulty": "Hard",
      "topic": "Math, Enumeration",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/largest-palindrome-product"
    },
    {
      "title": "Median of Two Sorted Arrays",
      "difficulty": "Hard",
      "topic": "Array, Binary Search, Divide and Conquer",
      "freq": 96.9,
      "link": "https://leetcode.com/problems/median-of-two-sorted-arrays"
    },
    {
      "title": "Roman to Integer",
      "difficulty": "Easy",
      "topic": "Hash Table, Math, String",
      "freq": 96.9,
      "link": "https://leetcode.com/problems/roman-to-integer"
    },
    {
      "title": "Word Break",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Dynamic Programming, Trie, Memoization, Brute-Force Search",
      "freq": 96.9,
      "link": "https://leetcode.com/problems/word-break"
    },
    {
      "title": "Linked List Cycle",
      "difficulty": "Easy",
      "topic": "Hash Table, Linked List, Two Pointers, Floyd's Cycle Finding Algorithm",
      "freq": 96.9,
      "link": "https://leetcode.com/problems/linked-list-cycle"
    },
    {
      "title": "Peeking Iterator",
      "difficulty": "Medium",
      "topic": "Array, Design, Iterator",
      "freq": 96.9,
      "link": "https://leetcode.com/problems/peeking-iterator"
    }
  ],
  "disney": [
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Remove All Adjacent Duplicates in String II",
      "difficulty": "Medium",
      "topic": "String, Stack",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii"
    },
    {
      "title": "Longest Common Prefix",
      "difficulty": "Easy",
      "topic": "Array, String, Trie",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/longest-common-prefix"
    },
    {
      "title": "Group Anagrams",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Sorting",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/group-anagrams"
    },
    {
      "title": "Top K Frequent Elements",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Divide and Conquer, Sorting, Heap (Priority Queue), Bucket Sort, Counting, Quickselect",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/top-k-frequent-elements"
    },
    {
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Quicksort",
      "freq": 87.6,
      "link": "https://leetcode.com/problems/merge-intervals"
    },
    {
      "title": "Generate Parentheses",
      "difficulty": "Medium",
      "topic": "String, Dynamic Programming, Backtracking, Bracket Sequences",
      "freq": 87.6,
      "link": "https://leetcode.com/problems/generate-parentheses"
    },
    {
      "title": "Meeting Rooms II",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Greedy, Sorting, Heap (Priority Queue), Prefix Sum",
      "freq": 87.6,
      "link": "https://leetcode.com/problems/meeting-rooms-ii"
    },
    {
      "title": "Maximum Value at a Given Index in a Bounded Array",
      "difficulty": "Medium",
      "topic": "Math, Binary Search, Greedy",
      "freq": 87.6,
      "link": "https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array"
    },
    {
      "title": "Longest Palindromic Substring",
      "difficulty": "Medium",
      "topic": "Two Pointers, String, Dynamic Programming, Manacher",
      "freq": 87.6,
      "link": "https://leetcode.com/problems/longest-palindromic-substring"
    },
    {
      "title": "Merge k Sorted Lists",
      "difficulty": "Hard",
      "topic": "Linked List, Divide and Conquer, Heap (Priority Queue), Merge Sort, Tournament Sort",
      "freq": 87.6,
      "link": "https://leetcode.com/problems/merge-k-sorted-lists"
    }
  ],
  "warnermedia": [
    {
      "title": "Number of Accounts That Did Not Stream",
      "difficulty": "Medium",
      "topic": "Database",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/number-of-accounts-that-did-not-stream"
    },
    {
      "title": "Roman to Integer",
      "difficulty": "Easy",
      "topic": "Hash Table, Math, String",
      "freq": 78.1,
      "link": "https://leetcode.com/problems/roman-to-integer"
    },
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 78.1,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Merge k Sorted Lists",
      "difficulty": "Hard",
      "topic": "Linked List, Divide and Conquer, Heap (Priority Queue), Merge Sort, Tournament Sort",
      "freq": 69.0,
      "link": "https://leetcode.com/problems/merge-k-sorted-lists"
    },
    {
      "title": "Product of Array Except Self",
      "difficulty": "Medium",
      "topic": "Array, Prefix Sum",
      "freq": 69.0,
      "link": "https://leetcode.com/problems/product-of-array-except-self"
    },
    {
      "title": "Flatten Nested List Iterator",
      "difficulty": "Medium",
      "topic": "Stack, Tree, Depth-First Search, Design, Queue, Iterator",
      "freq": 69.0,
      "link": "https://leetcode.com/problems/flatten-nested-list-iterator"
    },
    {
      "title": "Integer to Roman",
      "difficulty": "Medium",
      "topic": "Hash Table, Math, String",
      "freq": 69.0,
      "link": "https://leetcode.com/problems/integer-to-roman"
    }
  ],
  "comcast": [
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Best Time to Buy and Sell Stock",
      "difficulty": "Easy",
      "topic": "Array, Dynamic Programming",
      "freq": 83.3,
      "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock"
    },
    {
      "title": "Valid Palindrome",
      "difficulty": "Easy",
      "topic": "Two Pointers, String",
      "freq": 83.3,
      "link": "https://leetcode.com/problems/valid-palindrome"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 73.5,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    },
    {
      "title": "Number of Islands",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Union-Find, Matrix",
      "freq": 73.5,
      "link": "https://leetcode.com/problems/number-of-islands"
    },
    {
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "topic": "String, Stack, Bracket Sequences",
      "freq": 73.5,
      "link": "https://leetcode.com/problems/valid-parentheses"
    }
  ],
  "hulu": [
    {
      "title": "Number of Valid Subarrays",
      "difficulty": "Hard",
      "topic": "Array, Stack, Monotonic Stack",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/number-of-valid-subarrays"
    },
    {
      "title": "Basic Calculator III",
      "difficulty": "Hard",
      "topic": "Math, String, Stack, Recursion",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/basic-calculator-iii"
    },
    {
      "title": "Binary Tree Pruning",
      "difficulty": "Medium",
      "topic": "Tree, Depth-First Search, Binary Tree",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/binary-tree-pruning"
    },
    {
      "title": "Sum of Two Integers",
      "difficulty": "Medium",
      "topic": "Math, Bit Manipulation",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/sum-of-two-integers"
    },
    {
      "title": "K-th Smallest in Lexicographical Order",
      "difficulty": "Hard",
      "topic": "Trie",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/k-th-smallest-in-lexicographical-order"
    }
  ],
  "activision": [
    {
      "title": "Reformat Phone Number",
      "difficulty": "Easy",
      "topic": "String",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/reformat-phone-number"
    },
    {
      "title": "Decode String",
      "difficulty": "Medium",
      "topic": "String, Stack, Recursion",
      "freq": 78.9,
      "link": "https://leetcode.com/problems/decode-string"
    },
    {
      "title": "Number of Divisible Triplet Sums",
      "difficulty": "Medium",
      "topic": "Array, Hash Table",
      "freq": 70.1,
      "link": "https://leetcode.com/problems/number-of-divisible-triplet-sums"
    }
  ],
  "riot": [
    {
      "title": "Teemo Attacking",
      "difficulty": "Easy",
      "topic": "Array, Simulation",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/teemo-attacking"
    },
    {
      "title": "Sudoku Solver",
      "difficulty": "Hard",
      "topic": "Array, Hash Table, Backtracking, Matrix, Algorithm X, Dancing Links",
      "freq": 74.2,
      "link": "https://leetcode.com/problems/sudoku-solver"
    },
    {
      "title": "Better Compression of String",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sorting, Counting",
      "freq": 74.2,
      "link": "https://leetcode.com/problems/better-compression-of-string"
    },
    {
      "title": "Game of Life",
      "difficulty": "Medium",
      "topic": "Array, Matrix, Simulation",
      "freq": 66.1,
      "link": "https://leetcode.com/problems/game-of-life"
    },
    {
      "title": "Valid Sudoku",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Matrix",
      "freq": 66.1,
      "link": "https://leetcode.com/problems/valid-sudoku"
    }
  ],
  "unity": [
    {
      "title": "Number of Subarrays With LCM Equal to K",
      "difficulty": "Medium",
      "topic": "Array, Math, Number Theory",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/number-of-subarrays-with-lcm-equal-to-k"
    },
    {
      "title": "Remove Colored Pieces if Both Neighbors are the Same Color",
      "difficulty": "Medium",
      "topic": "Math, String, Greedy, Game Theory",
      "freq": 90.4,
      "link": "https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color"
    }
  ],
  "nike": [
    {
      "title": "Happy Number",
      "difficulty": "Easy",
      "topic": "Hash Table, Math, Two Pointers, Floyd's Cycle Finding Algorithm",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/happy-number"
    },
    {
      "title": "Diagonal Traverse",
      "difficulty": "Medium",
      "topic": "Array, Matrix, Simulation",
      "freq": 94.2,
      "link": "https://leetcode.com/problems/diagonal-traverse"
    },
    {
      "title": "Longest Valid Parentheses",
      "difficulty": "Hard",
      "topic": "String, Dynamic Programming, Stack, Bracket Sequences",
      "freq": 86.8,
      "link": "https://leetcode.com/problems/longest-valid-parentheses"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 76.3,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    },
    {
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "topic": "String, Stack, Bracket Sequences",
      "freq": 76.3,
      "link": "https://leetcode.com/problems/valid-parentheses"
    },
    {
      "title": "Maximum Subarray",
      "difficulty": "Medium",
      "topic": "Array, Divide and Conquer, Dynamic Programming",
      "freq": 76.3,
      "link": "https://leetcode.com/problems/maximum-subarray"
    },
    {
      "title": "Design Graph With Shortest Path Calculator",
      "difficulty": "Hard",
      "topic": "Graph Theory, Design, Heap (Priority Queue), Shortest Path",
      "freq": 76.3,
      "link": "https://leetcode.com/problems/design-graph-with-shortest-path-calculator"
    },
    {
      "title": "Min Stack",
      "difficulty": "Medium",
      "topic": "Stack, Design",
      "freq": 76.3,
      "link": "https://leetcode.com/problems/min-stack"
    },
    {
      "title": "Can Place Flowers",
      "difficulty": "Easy",
      "topic": "Array, Greedy",
      "freq": 76.3,
      "link": "https://leetcode.com/problems/can-place-flowers"
    },
    {
      "title": "Next Permutation",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers",
      "freq": 76.3,
      "link": "https://leetcode.com/problems/next-permutation"
    },
    {
      "title": "Best Time to Buy and Sell Stock II",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming, Greedy",
      "freq": 76.3,
      "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii"
    },
    {
      "title": "Jump Game",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming, Greedy",
      "freq": 76.3,
      "link": "https://leetcode.com/problems/jump-game"
    }
  ],
  "target": [
    {
      "title": "Sort Colors",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Sorting, Quicksort, Bubble Sort",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/sort-colors"
    },
    {
      "title": "Longest Path With Different Adjacent Characters",
      "difficulty": "Hard",
      "topic": "Array, String, Tree, Depth-First Search, Graph Theory, Topological Sort",
      "freq": 88.2,
      "link": "https://leetcode.com/problems/longest-path-with-different-adjacent-characters"
    },
    {
      "title": "Product of the Last K Numbers",
      "difficulty": "Medium",
      "topic": "Array, Math, Design, Data Stream, Prefix Sum",
      "freq": 88.2,
      "link": "https://leetcode.com/problems/product-of-the-last-k-numbers"
    },
    {
      "title": "Maximum Subarray",
      "difficulty": "Medium",
      "topic": "Array, Divide and Conquer, Dynamic Programming",
      "freq": 88.2,
      "link": "https://leetcode.com/problems/maximum-subarray"
    },
    {
      "title": "Longest Common Prefix",
      "difficulty": "Easy",
      "topic": "Array, String, Trie",
      "freq": 88.2,
      "link": "https://leetcode.com/problems/longest-common-prefix"
    },
    {
      "title": "Sort Characters By Frequency",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sorting, Heap (Priority Queue), Bucket Sort, Counting",
      "freq": 88.2,
      "link": "https://leetcode.com/problems/sort-characters-by-frequency"
    }
  ],
  "walmart": [
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    },
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 98.5,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Trapping Rain Water",
      "difficulty": "Hard",
      "topic": "Array, Two Pointers, Dynamic Programming, Stack, Monotonic Stack",
      "freq": 96.9,
      "link": "https://leetcode.com/problems/trapping-rain-water"
    },
    {
      "title": "Number of Islands",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Union-Find, Matrix",
      "freq": 96.9,
      "link": "https://leetcode.com/problems/number-of-islands"
    },
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 95.2,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "topic": "String, Stack, Bracket Sequences",
      "freq": 95.2,
      "link": "https://leetcode.com/problems/valid-parentheses"
    },
    {
      "title": "Generate Parentheses",
      "difficulty": "Medium",
      "topic": "String, Dynamic Programming, Backtracking, Bracket Sequences",
      "freq": 93.3,
      "link": "https://leetcode.com/problems/generate-parentheses"
    },
    {
      "title": "Search in Rotated Sorted Array",
      "difficulty": "Medium",
      "topic": "Array, Binary Search",
      "freq": 91.3,
      "link": "https://leetcode.com/problems/search-in-rotated-sorted-array"
    },
    {
      "title": "Group Anagrams",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Sorting",
      "freq": 91.3,
      "link": "https://leetcode.com/problems/group-anagrams"
    },
    {
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Quicksort",
      "freq": 91.3,
      "link": "https://leetcode.com/problems/merge-intervals"
    },
    {
      "title": "Word Break",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Dynamic Programming, Trie, Memoization, Brute-Force Search",
      "freq": 81.6,
      "link": "https://leetcode.com/problems/word-break"
    },
    {
      "title": "Divide Intervals Into Minimum Number of Groups",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Greedy, Sorting, Heap (Priority Queue), Prefix Sum",
      "freq": 81.6,
      "link": "https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups"
    }
  ],
  "lowes": [
    {
      "title": "Find the Original Typed String I",
      "difficulty": "Easy",
      "topic": "String",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/find-the-original-typed-string-i"
    },
    {
      "title": "Minimum Operations to Make Array Values Equal to K",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k"
    },
    {
      "title": "The Number of Good Subsets",
      "difficulty": "Hard",
      "topic": "Array, Hash Table, Math, Dynamic Programming, Bit Manipulation, Counting, Number Theory, Bitmask, Sieve Theory",
      "freq": 95.2,
      "link": "https://leetcode.com/problems/the-number-of-good-subsets"
    },
    {
      "title": "Groups of Strings",
      "difficulty": "Hard",
      "topic": "Array, Hash Table, String, Bit Manipulation, Union-Find",
      "freq": 95.2,
      "link": "https://leetcode.com/problems/groups-of-strings"
    },
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 65.1,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 65.1,
      "link": "https://leetcode.com/problems/lru-cache"
    }
  ],
  "nordstrom": [
    {
      "title": "Course Schedule",
      "difficulty": "Medium",
      "topic": "Depth-First Search, Breadth-First Search, Graph Theory, Topological Sort, Directed Acyclic Graph",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/course-schedule"
    },
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 82.7,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Spiral Matrix",
      "difficulty": "Medium",
      "topic": "Array, Matrix, Simulation",
      "freq": 82.7,
      "link": "https://leetcode.com/problems/spiral-matrix"
    },
    {
      "title": "Display Table of Food Orders in a Restaurant",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Sorting, Ordered Set",
      "freq": 82.7,
      "link": "https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant"
    }
  ],
  "capitalone": [
    {
      "title": "Simple Bank System",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Design, Simulation",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/simple-bank-system"
    },
    {
      "title": "Text Justification",
      "difficulty": "Hard",
      "topic": "Array, String, Simulation",
      "freq": 94.1,
      "link": "https://leetcode.com/problems/text-justification"
    },
    {
      "title": "Block Placement Queries",
      "difficulty": "Hard",
      "topic": "Array, Binary Search, Binary Indexed Tree, Segment Tree, Ordered Set",
      "freq": 89.7,
      "link": "https://leetcode.com/problems/block-placement-queries"
    },
    {
      "title": "Spiral Matrix",
      "difficulty": "Medium",
      "topic": "Array, Matrix, Simulation",
      "freq": 88.4,
      "link": "https://leetcode.com/problems/spiral-matrix"
    },
    {
      "title": "Candy Crush",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Matrix, Simulation",
      "freq": 83.2,
      "link": "https://leetcode.com/problems/candy-crush"
    },
    {
      "title": "Minimum Operations to Write the Letter Y on a Grid",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Matrix, Counting",
      "freq": 81.4,
      "link": "https://leetcode.com/problems/minimum-operations-to-write-the-letter-y-on-a-grid"
    },
    {
      "title": "Find the Length of the Longest Common Prefix",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Trie",
      "freq": 79.4,
      "link": "https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix"
    },
    {
      "title": "Restore the Array From Adjacent Pairs",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Depth-First Search",
      "freq": 76.0,
      "link": "https://leetcode.com/problems/restore-the-array-from-adjacent-pairs"
    },
    {
      "title": "Design Memory Allocator",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Design, Simulation",
      "freq": 73.4,
      "link": "https://leetcode.com/problems/design-memory-allocator"
    },
    {
      "title": "Number of Black Blocks",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Enumeration",
      "freq": 71.9,
      "link": "https://leetcode.com/problems/number-of-black-blocks"
    },
    {
      "title": "Number of Adjacent Elements With the Same Color",
      "difficulty": "Medium",
      "topic": "Array",
      "freq": 71.9,
      "link": "https://leetcode.com/problems/number-of-adjacent-elements-with-the-same-color"
    },
    {
      "title": "Rotate Image",
      "difficulty": "Medium",
      "topic": "Array, Math, Matrix",
      "freq": 70.3,
      "link": "https://leetcode.com/problems/rotate-image"
    }
  ],
  "amex": [
    {
      "title": "Divide an Array Into Subarrays With Minimum Cost II",
      "difficulty": "Hard",
      "topic": "Array, Hash Table, Sliding Window, Heap (Priority Queue)",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-ii"
    },
    {
      "title": "Minimum Deletions to Make Character Frequencies Unique",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Greedy, Sorting",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique"
    },
    {
      "title": "Ugly Number III",
      "difficulty": "Medium",
      "topic": "Math, Binary Search, Combinatorics, Number Theory, Least Common Multiple, Euclidean Algorithm, Greatest Common Divisor, Inclusion-Exclusion Principle",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/ugly-number-iii"
    },
    {
      "title": "Maximum Equal Frequency",
      "difficulty": "Hard",
      "topic": "Array, Hash Table",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/maximum-equal-frequency"
    },
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 96.9,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Find a Value of a Mysterious Function Closest to Target",
      "difficulty": "Hard",
      "topic": "Array, Binary Search, Bit Manipulation, Segment Tree, Sparse Table",
      "freq": 96.9,
      "link": "https://leetcode.com/problems/find-a-value-of-a-mysterious-function-closest-to-target"
    },
    {
      "title": "Divide an Array Into Subarrays With Minimum Cost I",
      "difficulty": "Easy",
      "topic": "Array, Sorting, Enumeration",
      "freq": 96.9,
      "link": "https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i"
    },
    {
      "title": "Percentage of Letter in String",
      "difficulty": "Easy",
      "topic": "String",
      "freq": 96.9,
      "link": "https://leetcode.com/problems/percentage-of-letter-in-string"
    },
    {
      "title": "Maximize the Topmost Element After K Moves",
      "difficulty": "Medium",
      "topic": "Array, Greedy",
      "freq": 96.9,
      "link": "https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves"
    },
    {
      "title": "Maximum XOR After Operations",
      "difficulty": "Medium",
      "topic": "Array, Math, Bit Manipulation",
      "freq": 96.9,
      "link": "https://leetcode.com/problems/maximum-xor-after-operations"
    },
    {
      "title": "Equal Sum Arrays With Minimum Number of Operations",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Greedy, Counting",
      "freq": 96.9,
      "link": "https://leetcode.com/problems/equal-sum-arrays-with-minimum-number-of-operations"
    },
    {
      "title": "Maximum Area of Two Non-Overlapping Square Submatrices",
      "difficulty": "Medium",
      "topic": "General",
      "freq": 89.2,
      "link": "https://leetcode.com/problems/maximum-area-of-two-non-overlapping-square-submatrices"
    }
  ],
  "mastercard": [
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Strange Printer",
      "difficulty": "Hard",
      "topic": "String, Dynamic Programming",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/strange-printer"
    },
    {
      "title": "Best Time to Buy and Sell Stock",
      "difficulty": "Easy",
      "topic": "Array, Dynamic Programming",
      "freq": 93.9,
      "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock"
    },
    {
      "title": "Coin Change II",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming, Knapsack Problem, Complete Knapsack",
      "freq": 93.9,
      "link": "https://leetcode.com/problems/coin-change-ii"
    },
    {
      "title": "N-Queens",
      "difficulty": "Hard",
      "topic": "Array, Backtracking, Algorithm X",
      "freq": 93.9,
      "link": "https://leetcode.com/problems/n-queens"
    },
    {
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "topic": "String, Stack, Bracket Sequences",
      "freq": 86.1,
      "link": "https://leetcode.com/problems/valid-parentheses"
    },
    {
      "title": "Coin Change",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming, Breadth-First Search, Knapsack Problem, Complete Knapsack",
      "freq": 86.1,
      "link": "https://leetcode.com/problems/coin-change"
    },
    {
      "title": "Fizz Buzz",
      "difficulty": "Easy",
      "topic": "Math, String, Simulation",
      "freq": 86.1,
      "link": "https://leetcode.com/problems/fizz-buzz"
    },
    {
      "title": "Valid Anagram",
      "difficulty": "Easy",
      "topic": "Hash Table, String, Sorting",
      "freq": 75.0,
      "link": "https://leetcode.com/problems/valid-anagram"
    },
    {
      "title": "Gas Station",
      "difficulty": "Medium",
      "topic": "Array, Greedy",
      "freq": 75.0,
      "link": "https://leetcode.com/problems/gas-station"
    },
    {
      "title": "Word Search",
      "difficulty": "Medium",
      "topic": "Array, String, Backtracking, Depth-First Search, Matrix",
      "freq": 75.0,
      "link": "https://leetcode.com/problems/word-search"
    },
    {
      "title": "Rotate Image",
      "difficulty": "Medium",
      "topic": "Array, Math, Matrix",
      "freq": 75.0,
      "link": "https://leetcode.com/problems/rotate-image"
    }
  ],
  "goldmansachs": [
    {
      "title": "Trapping Rain Water",
      "difficulty": "Hard",
      "topic": "Array, Two Pointers, Dynamic Programming, Stack, Monotonic Stack",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/trapping-rain-water"
    },
    {
      "title": "Median of Two Sorted Arrays",
      "difficulty": "Hard",
      "topic": "Array, Binary Search, Divide and Conquer",
      "freq": 80.1,
      "link": "https://leetcode.com/problems/median-of-two-sorted-arrays"
    },
    {
      "title": "First Unique Character in a String",
      "difficulty": "Easy",
      "topic": "Hash Table, String, Queue, Counting",
      "freq": 77.2,
      "link": "https://leetcode.com/problems/first-unique-character-in-a-string"
    },
    {
      "title": "Fraction to Recurring Decimal",
      "difficulty": "Medium",
      "topic": "Hash Table, Math, String",
      "freq": 76.9,
      "link": "https://leetcode.com/problems/fraction-to-recurring-decimal"
    },
    {
      "title": "High Five",
      "difficulty": "Easy",
      "topic": "Array, Hash Table, Sorting, Heap (Priority Queue)",
      "freq": 76.3,
      "link": "https://leetcode.com/problems/high-five"
    },
    {
      "title": "Minimum Path Sum",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming, Matrix",
      "freq": 68.6,
      "link": "https://leetcode.com/problems/minimum-path-sum"
    },
    {
      "title": "Container With Most Water",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Greedy",
      "freq": 65.2,
      "link": "https://leetcode.com/problems/container-with-most-water"
    },
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 65.2,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 63.3,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    },
    {
      "title": "String Compression",
      "difficulty": "Medium",
      "topic": "Two Pointers, String",
      "freq": 61.0,
      "link": "https://leetcode.com/problems/string-compression"
    },
    {
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Quicksort",
      "freq": 60.2,
      "link": "https://leetcode.com/problems/merge-intervals"
    },
    {
      "title": "Find the Winner of the Circular Game",
      "difficulty": "Medium",
      "topic": "Array, Math, Recursion, Queue, Simulation",
      "freq": 60.2,
      "link": "https://leetcode.com/problems/find-the-winner-of-the-circular-game"
    }
  ],
  "morganstanley": [
    {
      "title": "Best Time to Buy and Sell Stock",
      "difficulty": "Easy",
      "topic": "Array, Dynamic Programming",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock"
    },
    {
      "title": "Best Team With No Conflicts",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming, Sorting, Longest Increasing Subsequence",
      "freq": 93.3,
      "link": "https://leetcode.com/problems/best-team-with-no-conflicts"
    },
    {
      "title": "Minimum Cost to Move Chips to The Same Position",
      "difficulty": "Easy",
      "topic": "Array, Math, Greedy",
      "freq": 90.7,
      "link": "https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position"
    },
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 87.7,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Find the Longest Valid Obstacle Course at Each Position",
      "difficulty": "Hard",
      "topic": "Array, Binary Search, Binary Indexed Tree, Longest Increasing Subsequence",
      "freq": 87.7,
      "link": "https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position"
    },
    {
      "title": "Minimum Number of Lines to Cover Points",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Math, Dynamic Programming, Backtracking, Bit Manipulation, Geometry, Bitmask",
      "freq": 87.7,
      "link": "https://leetcode.com/problems/minimum-number-of-lines-to-cover-points"
    },
    {
      "title": "Find Subarrays With Equal Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 87.7,
      "link": "https://leetcode.com/problems/find-subarrays-with-equal-sum"
    },
    {
      "title": "The Employee That Worked on the Longest Task",
      "difficulty": "Easy",
      "topic": "Array",
      "freq": 87.7,
      "link": "https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task"
    },
    {
      "title": "Find The Original Array of Prefix Xor",
      "difficulty": "Medium",
      "topic": "Array, Bit Manipulation",
      "freq": 87.7,
      "link": "https://leetcode.com/problems/find-the-original-array-of-prefix-xor"
    },
    {
      "title": "Count Subarrays With Fixed Bounds",
      "difficulty": "Hard",
      "topic": "Array, Queue, Sliding Window, Monotonic Queue",
      "freq": 80.4,
      "link": "https://leetcode.com/problems/count-subarrays-with-fixed-bounds"
    },
    {
      "title": "Delete and Earn",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Dynamic Programming",
      "freq": 80.4,
      "link": "https://leetcode.com/problems/delete-and-earn"
    },
    {
      "title": "Copy List with Random Pointer",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List",
      "freq": 75.7,
      "link": "https://leetcode.com/problems/copy-list-with-random-pointer"
    }
  ],
  "citigroup": [
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Best Time to Buy and Sell Stock",
      "difficulty": "Easy",
      "topic": "Array, Dynamic Programming",
      "freq": 87.1,
      "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock"
    },
    {
      "title": "Evaluate Reverse Polish Notation",
      "difficulty": "Medium",
      "topic": "Array, Math, Stack",
      "freq": 76.9,
      "link": "https://leetcode.com/problems/evaluate-reverse-polish-notation"
    },
    {
      "title": "Rotate Image",
      "difficulty": "Medium",
      "topic": "Array, Math, Matrix",
      "freq": 76.9,
      "link": "https://leetcode.com/problems/rotate-image"
    },
    {
      "title": "Minimum Size Subarray Sum",
      "difficulty": "Medium",
      "topic": "Array, Binary Search, Sliding Window, Prefix Sum",
      "freq": 76.9,
      "link": "https://leetcode.com/problems/minimum-size-subarray-sum"
    },
    {
      "title": "Number of Visible People in a Queue",
      "difficulty": "Hard",
      "topic": "Array, Stack, Monotonic Stack",
      "freq": 76.9,
      "link": "https://leetcode.com/problems/number-of-visible-people-in-a-queue"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 76.9,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    }
  ],
  "bofa": [
    {
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "topic": "String, Stack, Bracket Sequences",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/valid-parentheses"
    },
    {
      "title": "Best Time to Buy and Sell Stock",
      "difficulty": "Easy",
      "topic": "Array, Dynamic Programming",
      "freq": 82.2,
      "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock"
    }
  ],
  "wellsfargo": [
    {
      "title": "Shortest and Lexicographically Smallest Beautiful String",
      "difficulty": "Medium",
      "topic": "String, Sliding Window",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string"
    },
    {
      "title": "Verbal Arithmetic Puzzle",
      "difficulty": "Hard",
      "topic": "Array, Math, String, Backtracking",
      "freq": 85.4,
      "link": "https://leetcode.com/problems/verbal-arithmetic-puzzle"
    },
    {
      "title": "Minimum String Length After Removing Substrings",
      "difficulty": "Easy",
      "topic": "String, Stack, Simulation",
      "freq": 85.4,
      "link": "https://leetcode.com/problems/minimum-string-length-after-removing-substrings"
    },
    {
      "title": "Rotate String",
      "difficulty": "Easy",
      "topic": "String, String Matching",
      "freq": 79.9,
      "link": "https://leetcode.com/problems/rotate-string"
    },
    {
      "title": "Merge Strings Alternately",
      "difficulty": "Easy",
      "topic": "Two Pointers, String",
      "freq": 72.8,
      "link": "https://leetcode.com/problems/merge-strings-alternately"
    },
    {
      "title": "Number of Islands",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Union-Find, Matrix",
      "freq": 72.8,
      "link": "https://leetcode.com/problems/number-of-islands"
    },
    {
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "topic": "String, Stack, Bracket Sequences",
      "freq": 72.8,
      "link": "https://leetcode.com/problems/valid-parentheses"
    },
    {
      "title": "Count Binary Substrings",
      "difficulty": "Easy",
      "topic": "Two Pointers, String",
      "freq": 72.8,
      "link": "https://leetcode.com/problems/count-binary-substrings"
    },
    {
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Quicksort",
      "freq": 72.8,
      "link": "https://leetcode.com/problems/merge-intervals"
    },
    {
      "title": "Kth Largest Element in a Stream",
      "difficulty": "Easy",
      "topic": "Tree, Design, Binary Search Tree, Heap (Priority Queue), Binary Tree, Data Stream",
      "freq": 62.8,
      "link": "https://leetcode.com/problems/kth-largest-element-in-a-stream"
    },
    {
      "title": "Spiral Matrix",
      "difficulty": "Medium",
      "topic": "Array, Matrix, Simulation",
      "freq": 62.8,
      "link": "https://leetcode.com/problems/spiral-matrix"
    },
    {
      "title": "Maximum Subarray",
      "difficulty": "Medium",
      "topic": "Array, Divide and Conquer, Dynamic Programming",
      "freq": 62.8,
      "link": "https://leetcode.com/problems/maximum-subarray"
    }
  ],
  "blackrock": [
    {
      "title": "Happy Number",
      "difficulty": "Easy",
      "topic": "Hash Table, Math, Two Pointers, Floyd's Cycle Finding Algorithm",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/happy-number"
    },
    {
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "topic": "String, Stack, Bracket Sequences",
      "freq": 74.4,
      "link": "https://leetcode.com/problems/valid-parentheses"
    },
    {
      "title": "Find the Maximum Sum of Node Values",
      "difficulty": "Hard",
      "topic": "Array, Dynamic Programming, Greedy, Bit Manipulation, Tree, Sorting",
      "freq": 74.4,
      "link": "https://leetcode.com/problems/find-the-maximum-sum-of-node-values"
    },
    {
      "title": "Maximum Subtree of the Same Color",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming, Tree, Depth-First Search",
      "freq": 72.6,
      "link": "https://leetcode.com/problems/maximum-subtree-of-the-same-color"
    },
    {
      "title": "Group Anagrams",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Sorting",
      "freq": 60.0,
      "link": "https://leetcode.com/problems/group-anagrams"
    },
    {
      "title": "Best Time to Buy and Sell Stock",
      "difficulty": "Easy",
      "topic": "Array, Dynamic Programming",
      "freq": 56.0,
      "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock"
    },
    {
      "title": "Maximum Profit From Trading Stocks",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming",
      "freq": 50.7,
      "link": "https://leetcode.com/problems/maximum-profit-from-trading-stocks"
    },
    {
      "title": "Lowest Common Ancestor of a Binary Tree",
      "difficulty": "Medium",
      "topic": "Tree, Depth-First Search, Binary Tree, Binary Lifting, Lowest Common Ancestor",
      "freq": 50.7,
      "link": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree"
    },
    {
      "title": "Lowest Common Ancestor of a Binary Search Tree",
      "difficulty": "Medium",
      "topic": "Tree, Depth-First Search, Binary Search Tree, Binary Tree, Binary Lifting, Lowest Common Ancestor",
      "freq": 50.7,
      "link": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree"
    },
    {
      "title": "Transform Binary String Using Subsequence Sort",
      "difficulty": "Medium",
      "topic": "General",
      "freq": 50.7,
      "link": "https://leetcode.com/problems/transform-binary-string-using-subsequence-sort"
    },
    {
      "title": "Number of Islands",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Union-Find, Matrix",
      "freq": 43.4,
      "link": "https://leetcode.com/problems/number-of-islands"
    },
    {
      "title": "Longest Palindromic Substring",
      "difficulty": "Medium",
      "topic": "Two Pointers, String, Dynamic Programming, Manacher",
      "freq": 43.4,
      "link": "https://leetcode.com/problems/longest-palindromic-substring"
    }
  ],
  "citadel": [
    {
      "title": "Sliding Window Maximum",
      "difficulty": "Hard",
      "topic": "Array, Queue, Sliding Window, Heap (Priority Queue), Monotonic Queue, Range Minimum/Maximum Query",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/sliding-window-maximum"
    },
    {
      "title": "Count Palindromic Subsequences",
      "difficulty": "Hard",
      "topic": "String, Dynamic Programming",
      "freq": 98.6,
      "link": "https://leetcode.com/problems/count-palindromic-subsequences"
    },
    {
      "title": "Palindromic Substrings",
      "difficulty": "Medium",
      "topic": "Two Pointers, String, Dynamic Programming",
      "freq": 93.8,
      "link": "https://leetcode.com/problems/palindromic-substrings"
    },
    {
      "title": "Best Time to Buy and Sell Stock",
      "difficulty": "Easy",
      "topic": "Array, Dynamic Programming",
      "freq": 89.9,
      "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock"
    },
    {
      "title": "Find Median from Data Stream",
      "difficulty": "Hard",
      "topic": "Two Pointers, Design, Sorting, Heap (Priority Queue), Data Stream",
      "freq": 87.8,
      "link": "https://leetcode.com/problems/find-median-from-data-stream"
    },
    {
      "title": "Best Position for a Service Centre",
      "difficulty": "Hard",
      "topic": "Array, Math, Geometry, Randomized",
      "freq": 87.8,
      "link": "https://leetcode.com/problems/best-position-for-a-service-centre"
    },
    {
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Quicksort",
      "freq": 87.8,
      "link": "https://leetcode.com/problems/merge-intervals"
    },
    {
      "title": "Number of Orders in the Backlog",
      "difficulty": "Medium",
      "topic": "Array, Heap (Priority Queue), Simulation",
      "freq": 85.4,
      "link": "https://leetcode.com/problems/number-of-orders-in-the-backlog"
    },
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 82.8,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Maximum Total Damage With Spell Casting",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Two Pointers, Binary Search, Dynamic Programming, Sorting, Counting",
      "freq": 82.8,
      "link": "https://leetcode.com/problems/maximum-total-damage-with-spell-casting"
    },
    {
      "title": "Minimum Costs Using the Train Line",
      "difficulty": "Hard",
      "topic": "Array, Dynamic Programming",
      "freq": 82.8,
      "link": "https://leetcode.com/problems/minimum-costs-using-the-train-line"
    },
    {
      "title": "Minimum Operations to Make Numbers Non-positive",
      "difficulty": "Hard",
      "topic": "Array, Binary Search",
      "freq": 82.8,
      "link": "https://leetcode.com/problems/minimum-operations-to-make-numbers-non-positive"
    }
  ],
  "janestreet": [
    {
      "title": "Count Common Words With One Occurrence",
      "difficulty": "Easy",
      "topic": "Array, Hash Table, String, Counting",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/count-common-words-with-one-occurrence"
    },
    {
      "title": "Walking Robot Simulation",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Simulation",
      "freq": 97.8,
      "link": "https://leetcode.com/problems/walking-robot-simulation"
    },
    {
      "title": "Minimum Time to Make Array Sum At Most x",
      "difficulty": "Hard",
      "topic": "Array, Dynamic Programming, Sorting",
      "freq": 95.3,
      "link": "https://leetcode.com/problems/minimum-time-to-make-array-sum-at-most-x"
    },
    {
      "title": "Design a Text Editor",
      "difficulty": "Hard",
      "topic": "Linked List, String, Stack, Design, Simulation, Doubly-Linked List",
      "freq": 81.5,
      "link": "https://leetcode.com/problems/design-a-text-editor"
    },
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 76.3,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Teemo Attacking",
      "difficulty": "Easy",
      "topic": "Array, Simulation",
      "freq": 69.5,
      "link": "https://leetcode.com/problems/teemo-attacking"
    },
    {
      "title": "Longest Common Prefix",
      "difficulty": "Easy",
      "topic": "Array, String, Trie",
      "freq": 60.1,
      "link": "https://leetcode.com/problems/longest-common-prefix"
    },
    {
      "title": "Stream of Characters",
      "difficulty": "Hard",
      "topic": "Array, String, Design, Trie, Data Stream, Aho\u2013Corasick Algorithm",
      "freq": 60.1,
      "link": "https://leetcode.com/problems/stream-of-characters"
    },
    {
      "title": "Add Two Integers",
      "difficulty": "Easy",
      "topic": "Math",
      "freq": 60.1,
      "link": "https://leetcode.com/problems/add-two-integers"
    },
    {
      "title": "Add Strings",
      "difficulty": "Easy",
      "topic": "Math, String, Simulation",
      "freq": 60.1,
      "link": "https://leetcode.com/problems/add-strings"
    },
    {
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "topic": "String, Stack, Bracket Sequences",
      "freq": 60.1,
      "link": "https://leetcode.com/problems/valid-parentheses"
    },
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 60.1,
      "link": "https://leetcode.com/problems/two-sum"
    }
  ],
  "twosigma": [
    {
      "title": "Random Pick with Weight",
      "difficulty": "Medium",
      "topic": "Array, Math, Binary Search, Prefix Sum, Randomized",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/random-pick-with-weight"
    },
    {
      "title": "Number of Provinces",
      "difficulty": "Medium",
      "topic": "Depth-First Search, Breadth-First Search, Union-Find, Graph Theory",
      "freq": 93.2,
      "link": "https://leetcode.com/problems/number-of-provinces"
    },
    {
      "title": "Maximum Subarray Sum with One Deletion",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming",
      "freq": 93.2,
      "link": "https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion"
    },
    {
      "title": "Multiply Strings",
      "difficulty": "Medium",
      "topic": "Math, String, Simulation",
      "freq": 90.4,
      "link": "https://leetcode.com/problems/multiply-strings"
    },
    {
      "title": "Wildcard Matching",
      "difficulty": "Hard",
      "topic": "String, Dynamic Programming, Greedy, Recursion",
      "freq": 90.4,
      "link": "https://leetcode.com/problems/wildcard-matching"
    },
    {
      "title": "Longest String Chain",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Two Pointers, String, Dynamic Programming, Sorting",
      "freq": 90.4,
      "link": "https://leetcode.com/problems/longest-string-chain"
    },
    {
      "title": "Game of Life",
      "difficulty": "Medium",
      "topic": "Array, Matrix, Simulation",
      "freq": 90.4,
      "link": "https://leetcode.com/problems/game-of-life"
    },
    {
      "title": "Power of Four",
      "difficulty": "Easy",
      "topic": "Math, Bit Manipulation, Recursion",
      "freq": 90.4,
      "link": "https://leetcode.com/problems/power-of-four"
    },
    {
      "title": "Intersection of Two Arrays",
      "difficulty": "Easy",
      "topic": "Array, Hash Table, Two Pointers, Binary Search, Sorting",
      "freq": 90.4,
      "link": "https://leetcode.com/problems/intersection-of-two-arrays"
    },
    {
      "title": "Maximum Sum Circular Subarray",
      "difficulty": "Medium",
      "topic": "Array, Divide and Conquer, Dynamic Programming, Queue, Monotonic Queue",
      "freq": 90.4,
      "link": "https://leetcode.com/problems/maximum-sum-circular-subarray"
    },
    {
      "title": "Parallel Courses III",
      "difficulty": "Hard",
      "topic": "Array, Dynamic Programming, Graph Theory, Topological Sort, Directed Acyclic Graph",
      "freq": 83.6,
      "link": "https://leetcode.com/problems/parallel-courses-iii"
    },
    {
      "title": "Word Search II",
      "difficulty": "Hard",
      "topic": "Array, String, Backtracking, Trie, Matrix",
      "freq": 83.6,
      "link": "https://leetcode.com/problems/word-search-ii"
    }
  ],
  "deshaw": [
    {
      "title": "Binary Tree Cameras",
      "difficulty": "Hard",
      "topic": "Dynamic Programming, Tree, Depth-First Search, Binary Tree, DP on Trees",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/binary-tree-cameras"
    },
    {
      "title": "Find Minimum Cost to Remove Array Elements",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming",
      "freq": 87.0,
      "link": "https://leetcode.com/problems/find-minimum-cost-to-remove-array-elements"
    },
    {
      "title": "Maximum Number of Subsequences After One Inserting",
      "difficulty": "Medium",
      "topic": "String, Dynamic Programming, Greedy, Prefix Sum",
      "freq": 83.1,
      "link": "https://leetcode.com/problems/maximum-number-of-subsequences-after-one-inserting"
    },
    {
      "title": "Minimum Number of Taps to Open to Water a Garden",
      "difficulty": "Hard",
      "topic": "Array, Dynamic Programming, Greedy",
      "freq": 78.5,
      "link": "https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden"
    },
    {
      "title": "Minimum Size Subarray in Infinite Array",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Sliding Window, Prefix Sum",
      "freq": 76.7,
      "link": "https://leetcode.com/problems/minimum-size-subarray-in-infinite-array"
    },
    {
      "title": "Letter Combinations of a Phone Number",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Backtracking",
      "freq": 74.7,
      "link": "https://leetcode.com/problems/letter-combinations-of-a-phone-number"
    },
    {
      "title": "Maximum Points After Collecting Coins From All Nodes",
      "difficulty": "Hard",
      "topic": "Array, Dynamic Programming, Bit Manipulation, Tree, Depth-First Search, Memoization, DP on Trees",
      "freq": 74.7,
      "link": "https://leetcode.com/problems/maximum-points-after-collecting-coins-from-all-nodes"
    },
    {
      "title": "Maximum Subsequence Score",
      "difficulty": "Medium",
      "topic": "Array, Greedy, Sorting, Heap (Priority Queue)",
      "freq": 74.7,
      "link": "https://leetcode.com/problems/maximum-subsequence-score"
    },
    {
      "title": "Maximum Points Tourist Can Earn",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming, Matrix",
      "freq": 74.7,
      "link": "https://leetcode.com/problems/maximum-points-tourist-can-earn"
    },
    {
      "title": "Find Peak Calling Hours for Each City",
      "difficulty": "Medium",
      "topic": "Database",
      "freq": 72.6,
      "link": "https://leetcode.com/problems/find-peak-calling-hours-for-each-city"
    },
    {
      "title": "Minimize Connected Groups by Inserting Interval",
      "difficulty": "Medium",
      "topic": "Array, Binary Search, Sliding Window, Sorting",
      "freq": 72.6,
      "link": "https://leetcode.com/problems/minimize-connected-groups-by-inserting-interval"
    },
    {
      "title": "Minimum Runes to Add to Cast Spell",
      "difficulty": "Hard",
      "topic": "Array, Depth-First Search, Breadth-First Search, Graph Theory, Topological Sort",
      "freq": 72.6,
      "link": "https://leetcode.com/problems/minimum-runes-to-add-to-cast-spell"
    }
  ],
  "point72": [
    {
      "title": "Top Travellers",
      "difficulty": "Easy",
      "topic": "Database",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/top-travellers"
    },
    {
      "title": "Weather Type in Each Country",
      "difficulty": "Easy",
      "topic": "Database",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/weather-type-in-each-country"
    },
    {
      "title": "Evaluate Boolean Expression",
      "difficulty": "Medium",
      "topic": "Database",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/evaluate-boolean-expression"
    },
    {
      "title": "Restaurant Growth",
      "difficulty": "Medium",
      "topic": "Database",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/restaurant-growth"
    },
    {
      "title": "Replace Employee ID With The Unique Identifier",
      "difficulty": "Easy",
      "topic": "Database",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier"
    },
    {
      "title": "Maximum OR",
      "difficulty": "Medium",
      "topic": "Array, Greedy, Bit Manipulation, Prefix Sum",
      "freq": 67.6,
      "link": "https://leetcode.com/problems/maximum-or"
    }
  ],
  "optiver": [
    {
      "title": "Design Circular Queue",
      "difficulty": "Medium",
      "topic": "Array, Linked List, Design, Queue",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/design-circular-queue"
    },
    {
      "title": "Design Skiplist",
      "difficulty": "Hard",
      "topic": "Linked List, Design",
      "freq": 96.7,
      "link": "https://leetcode.com/problems/design-skiplist"
    },
    {
      "title": "Design Order Management System",
      "difficulty": "Medium",
      "topic": "Hash Table, Design",
      "freq": 88.0,
      "link": "https://leetcode.com/problems/design-order-management-system"
    },
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 77.9,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Number of Days Between Two Dates",
      "difficulty": "Easy",
      "topic": "Math, String",
      "freq": 77.9,
      "link": "https://leetcode.com/problems/number-of-days-between-two-dates"
    },
    {
      "title": "Best Time to Buy and Sell Stock",
      "difficulty": "Easy",
      "topic": "Array, Dynamic Programming",
      "freq": 77.9,
      "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock"
    },
    {
      "title": "Best Time to Buy and Sell Stock II",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming, Greedy",
      "freq": 58.2,
      "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii"
    }
  ],
  "drw": [
    {
      "title": "Maximize Score After Pair Deletions",
      "difficulty": "Medium",
      "topic": "Array, Greedy",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/maximize-score-after-pair-deletions"
    },
    {
      "title": "Subsequence of Size K With the Largest Even Sum",
      "difficulty": "Medium",
      "topic": "Array, Greedy, Sorting",
      "freq": 95.3,
      "link": "https://leetcode.com/problems/subsequence-of-size-k-with-the-largest-even-sum"
    },
    {
      "title": "Counting Elements",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 95.3,
      "link": "https://leetcode.com/problems/counting-elements"
    }
  ],
  "samsung": [
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Longest Increasing Subsequence",
      "difficulty": "Medium",
      "topic": "Array, Binary Search, Dynamic Programming, Longest Increasing Subsequence",
      "freq": 97.9,
      "link": "https://leetcode.com/problems/longest-increasing-subsequence"
    },
    {
      "title": "Burst Balloons",
      "difficulty": "Hard",
      "topic": "Array, Dynamic Programming",
      "freq": 95.6,
      "link": "https://leetcode.com/problems/burst-balloons"
    },
    {
      "title": "Count Prefix and Suffix Pairs II",
      "difficulty": "Hard",
      "topic": "Array, String, Trie, Rolling Hash, String Matching, Hash Function, Z Algorithm",
      "freq": 93.0,
      "link": "https://leetcode.com/problems/count-prefix-and-suffix-pairs-ii"
    },
    {
      "title": "Mark Elements on Array by Performing Queries",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Sorting, Heap (Priority Queue), Simulation",
      "freq": 93.0,
      "link": "https://leetcode.com/problems/mark-elements-on-array-by-performing-queries"
    },
    {
      "title": "Substring with Concatenation of All Words",
      "difficulty": "Hard",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 93.0,
      "link": "https://leetcode.com/problems/substring-with-concatenation-of-all-words"
    },
    {
      "title": "Guess Number Higher or Lower",
      "difficulty": "Easy",
      "topic": "Binary Search, Interactive",
      "freq": 93.0,
      "link": "https://leetcode.com/problems/guess-number-higher-or-lower"
    },
    {
      "title": "Trapping Rain Water",
      "difficulty": "Hard",
      "topic": "Array, Two Pointers, Dynamic Programming, Stack, Monotonic Stack",
      "freq": 90.3,
      "link": "https://leetcode.com/problems/trapping-rain-water"
    },
    {
      "title": "Vertical Order Traversal of a Binary Tree",
      "difficulty": "Hard",
      "topic": "Hash Table, Tree, Depth-First Search, Breadth-First Search, Sorting, Binary Tree",
      "freq": 90.3,
      "link": "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree"
    },
    {
      "title": "Number of Islands",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Union-Find, Matrix",
      "freq": 90.3,
      "link": "https://leetcode.com/problems/number-of-islands"
    },
    {
      "title": "Number of Paths with Max Score",
      "difficulty": "Hard",
      "topic": "Array, Dynamic Programming, Matrix",
      "freq": 90.3,
      "link": "https://leetcode.com/problems/number-of-paths-with-max-score"
    },
    {
      "title": "Minimum Cost of a Path With Special Roads",
      "difficulty": "Medium",
      "topic": "Array, Graph Theory, Heap (Priority Queue), Shortest Path",
      "freq": 90.3,
      "link": "https://leetcode.com/problems/minimum-cost-of-a-path-with-special-roads"
    }
  ],
  "sony": [
    {
      "title": "Subtree Removal Game with Fibonacci Tree",
      "difficulty": "Hard",
      "topic": "Math, Dynamic Programming, Tree, Binary Tree, Game Theory, Sprague\u2013Grundy Theorem",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/subtree-removal-game-with-fibonacci-tree"
    },
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 78.4,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Random Pick with Weight",
      "difficulty": "Medium",
      "topic": "Array, Math, Binary Search, Prefix Sum, Randomized",
      "freq": 69.4,
      "link": "https://leetcode.com/problems/random-pick-with-weight"
    },
    {
      "title": "Number of Good Pairs",
      "difficulty": "Easy",
      "topic": "Array, Hash Table, Math, Counting",
      "freq": 69.4,
      "link": "https://leetcode.com/problems/number-of-good-pairs"
    },
    {
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "topic": "String, Stack, Bracket Sequences",
      "freq": 69.4,
      "link": "https://leetcode.com/problems/valid-parentheses"
    }
  ],
  "huawei": [
    {
      "title": "Minimum Number of Visited Cells in a Grid",
      "difficulty": "Hard",
      "topic": "Array, Dynamic Programming, Stack, Breadth-First Search, Union-Find, Heap (Priority Queue), Matrix, Monotonic Stack",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/minimum-number-of-visited-cells-in-a-grid"
    },
    {
      "title": "Maximum Binary String After Change",
      "difficulty": "Medium",
      "topic": "String, Greedy",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/maximum-binary-string-after-change"
    },
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 82.9,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Number of Islands",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Union-Find, Matrix",
      "freq": 82.9,
      "link": "https://leetcode.com/problems/number-of-islands"
    },
    {
      "title": "Generate Parentheses",
      "difficulty": "Medium",
      "topic": "String, Dynamic Programming, Backtracking, Bracket Sequences",
      "freq": 82.9,
      "link": "https://leetcode.com/problems/generate-parentheses"
    },
    {
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "topic": "String, Stack, Bracket Sequences",
      "freq": 75.7,
      "link": "https://leetcode.com/problems/valid-parentheses"
    },
    {
      "title": "Merge Two Sorted Lists",
      "difficulty": "Easy",
      "topic": "Linked List, Recursion",
      "freq": 75.7,
      "link": "https://leetcode.com/problems/merge-two-sorted-lists"
    },
    {
      "title": "Longest Palindromic Substring",
      "difficulty": "Medium",
      "topic": "Two Pointers, String, Dynamic Programming, Manacher",
      "freq": 75.7,
      "link": "https://leetcode.com/problems/longest-palindromic-substring"
    },
    {
      "title": "Longest Increasing Subsequence",
      "difficulty": "Medium",
      "topic": "Array, Binary Search, Dynamic Programming, Longest Increasing Subsequence",
      "freq": 75.7,
      "link": "https://leetcode.com/problems/longest-increasing-subsequence"
    },
    {
      "title": "Decode String",
      "difficulty": "Medium",
      "topic": "String, Stack, Recursion",
      "freq": 65.7,
      "link": "https://leetcode.com/problems/decode-string"
    },
    {
      "title": "Maximum Subarray",
      "difficulty": "Medium",
      "topic": "Array, Divide and Conquer, Dynamic Programming",
      "freq": 65.7,
      "link": "https://leetcode.com/problems/maximum-subarray"
    },
    {
      "title": "N-Queens",
      "difficulty": "Hard",
      "topic": "Array, Backtracking, Algorithm X",
      "freq": 65.7,
      "link": "https://leetcode.com/problems/n-queens"
    }
  ],
  "qualcomm": [
    {
      "title": "Reverse Nodes in k-Group",
      "difficulty": "Hard",
      "topic": "Linked List, Recursion",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/reverse-nodes-in-k-group"
    },
    {
      "title": "String Compression III",
      "difficulty": "Medium",
      "topic": "String",
      "freq": 97.2,
      "link": "https://leetcode.com/problems/string-compression-iii"
    },
    {
      "title": "Maximum Number of Ones",
      "difficulty": "Hard",
      "topic": "Math, Greedy, Sorting, Heap (Priority Queue)",
      "freq": 94.0,
      "link": "https://leetcode.com/problems/maximum-number-of-ones"
    },
    {
      "title": "Reverse Linked List",
      "difficulty": "Easy",
      "topic": "Linked List, Recursion",
      "freq": 90.5,
      "link": "https://leetcode.com/problems/reverse-linked-list"
    },
    {
      "title": "Number of Islands",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Union-Find, Matrix",
      "freq": 90.5,
      "link": "https://leetcode.com/problems/number-of-islands"
    },
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 90.5,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 90.5,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    },
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 86.4,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Reverse String",
      "difficulty": "Easy",
      "topic": "Two Pointers, String",
      "freq": 81.5,
      "link": "https://leetcode.com/problems/reverse-string"
    },
    {
      "title": "Palindrome Number",
      "difficulty": "Easy",
      "topic": "Math",
      "freq": 75.6,
      "link": "https://leetcode.com/problems/palindrome-number"
    },
    {
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "topic": "String, Stack, Bracket Sequences",
      "freq": 75.6,
      "link": "https://leetcode.com/problems/valid-parentheses"
    },
    {
      "title": "Rotate Image",
      "difficulty": "Medium",
      "topic": "Array, Math, Matrix",
      "freq": 75.6,
      "link": "https://leetcode.com/problems/rotate-image"
    }
  ],
  "amd": [
    {
      "title": "Roman to Integer",
      "difficulty": "Easy",
      "topic": "Hash Table, Math, String",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/roman-to-integer"
    },
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 93.8,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Number of Islands",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Union-Find, Matrix",
      "freq": 93.8,
      "link": "https://leetcode.com/problems/number-of-islands"
    },
    {
      "title": "Spiral Matrix",
      "difficulty": "Medium",
      "topic": "Array, Matrix, Simulation",
      "freq": 85.9,
      "link": "https://leetcode.com/problems/spiral-matrix"
    },
    {
      "title": "Subarray Sum Equals K",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Prefix Sum",
      "freq": 85.9,
      "link": "https://leetcode.com/problems/subarray-sum-equals-k"
    },
    {
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Quicksort",
      "freq": 85.9,
      "link": "https://leetcode.com/problems/merge-intervals"
    },
    {
      "title": "Merge Sorted Array",
      "difficulty": "Easy",
      "topic": "Array, Two Pointers, Sorting",
      "freq": 85.9,
      "link": "https://leetcode.com/problems/merge-sorted-array"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 74.7,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    },
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 74.7,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Palindrome Number",
      "difficulty": "Easy",
      "topic": "Math",
      "freq": 74.7,
      "link": "https://leetcode.com/problems/palindrome-number"
    },
    {
      "title": "Move Zeroes",
      "difficulty": "Easy",
      "topic": "Array, Two Pointers",
      "freq": 74.7,
      "link": "https://leetcode.com/problems/move-zeroes"
    },
    {
      "title": "Top K Frequent Elements",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Divide and Conquer, Sorting, Heap (Priority Queue), Bucket Sort, Counting, Quickselect",
      "freq": 74.7,
      "link": "https://leetcode.com/problems/top-k-frequent-elements"
    }
  ],
  "ti": [
    {
      "title": "Minimum Path Sum",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming, Matrix",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/minimum-path-sum"
    },
    {
      "title": "Substring with Concatenation of All Words",
      "difficulty": "Hard",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 88.2,
      "link": "https://leetcode.com/problems/substring-with-concatenation-of-all-words"
    },
    {
      "title": "Kth Largest Element in an Array",
      "difficulty": "Medium",
      "topic": "Array, Divide and Conquer, Sorting, Heap (Priority Queue), Quickselect",
      "freq": 88.2,
      "link": "https://leetcode.com/problems/kth-largest-element-in-an-array"
    },
    {
      "title": "Delete Node in a Linked List",
      "difficulty": "Medium",
      "topic": "Linked List",
      "freq": 88.2,
      "link": "https://leetcode.com/problems/delete-node-in-a-linked-list"
    }
  ],
  "dell": [
    {
      "title": "Count Binary Substrings",
      "difficulty": "Easy",
      "topic": "Two Pointers, String",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/count-binary-substrings"
    },
    {
      "title": "Break a Palindrome",
      "difficulty": "Medium",
      "topic": "String, Greedy",
      "freq": 81.3,
      "link": "https://leetcode.com/problems/break-a-palindrome"
    },
    {
      "title": "Minimum Value to Get Positive Step by Step Sum",
      "difficulty": "Easy",
      "topic": "Array, Prefix Sum",
      "freq": 72.3,
      "link": "https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 66.0,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    },
    {
      "title": "Group Anagrams",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Sorting",
      "freq": 66.0,
      "link": "https://leetcode.com/problems/group-anagrams"
    },
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 66.0,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Maximum Subarray",
      "difficulty": "Medium",
      "topic": "Array, Divide and Conquer, Dynamic Programming",
      "freq": 66.0,
      "link": "https://leetcode.com/problems/maximum-subarray"
    },
    {
      "title": "Delete Duplicate Emails",
      "difficulty": "Easy",
      "topic": "Database",
      "freq": 57.1,
      "link": "https://leetcode.com/problems/delete-duplicate-emails"
    },
    {
      "title": "Department Top Three Salaries",
      "difficulty": "Hard",
      "topic": "Database",
      "freq": 57.1,
      "link": "https://leetcode.com/problems/department-top-three-salaries"
    },
    {
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "topic": "String, Stack, Bracket Sequences",
      "freq": 57.1,
      "link": "https://leetcode.com/problems/valid-parentheses"
    },
    {
      "title": "Valid Anagram",
      "difficulty": "Easy",
      "topic": "Hash Table, String, Sorting",
      "freq": 57.1,
      "link": "https://leetcode.com/problems/valid-anagram"
    },
    {
      "title": "Generate Parentheses",
      "difficulty": "Medium",
      "topic": "String, Dynamic Programming, Backtracking, Bracket Sequences",
      "freq": 57.1,
      "link": "https://leetcode.com/problems/generate-parentheses"
    }
  ],
  "hp": [
    {
      "title": "Minimum Recolors to Get K Consecutive Black Blocks",
      "difficulty": "Easy",
      "topic": "String, Sliding Window",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks"
    },
    {
      "title": "Minimum Cost Homecoming of a Robot in a Grid",
      "difficulty": "Medium",
      "topic": "Array, Greedy",
      "freq": 90.8,
      "link": "https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid"
    },
    {
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "topic": "String, Stack, Bracket Sequences",
      "freq": 84.3,
      "link": "https://leetcode.com/problems/valid-parentheses"
    },
    {
      "title": "Longest Palindrome",
      "difficulty": "Easy",
      "topic": "Hash Table, String, Greedy",
      "freq": 75.2,
      "link": "https://leetcode.com/problems/longest-palindrome"
    },
    {
      "title": "Valid Parenthesis String",
      "difficulty": "Medium",
      "topic": "String, Dynamic Programming, Stack, Greedy, Bracket Sequences",
      "freq": 75.2,
      "link": "https://leetcode.com/problems/valid-parenthesis-string"
    }
  ],
  "vmware": [
    {
      "title": "Break a Palindrome",
      "difficulty": "Medium",
      "topic": "String, Greedy",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/break-a-palindrome"
    },
    {
      "title": "Find Palindrome With Fixed Length",
      "difficulty": "Medium",
      "topic": "Array, Math",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/find-palindrome-with-fixed-length"
    },
    {
      "title": "Make Array Non-decreasing or Non-increasing",
      "difficulty": "Hard",
      "topic": "Array, Dynamic Programming, Greedy, Heap (Priority Queue)",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/make-array-non-decreasing-or-non-increasing"
    },
    {
      "title": "Koko Eating Bananas",
      "difficulty": "Medium",
      "topic": "Array, Binary Search",
      "freq": 68.0,
      "link": "https://leetcode.com/problems/koko-eating-bananas"
    },
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 68.0,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Time Based Key-Value Store",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Binary Search, Design",
      "freq": 68.0,
      "link": "https://leetcode.com/problems/time-based-key-value-store"
    },
    {
      "title": "Median of Two Sorted Arrays",
      "difficulty": "Hard",
      "topic": "Array, Binary Search, Divide and Conquer",
      "freq": 68.0,
      "link": "https://leetcode.com/problems/median-of-two-sorted-arrays"
    }
  ],
  "autodesk": [
    {
      "title": "Number of Subarrays That Match a Pattern I",
      "difficulty": "Medium",
      "topic": "Array, Rolling Hash, String Matching, Hash Function",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-i"
    },
    {
      "title": "Distribute Elements Into Two Arrays I",
      "difficulty": "Easy",
      "topic": "Array, Simulation",
      "freq": 97.3,
      "link": "https://leetcode.com/problems/distribute-elements-into-two-arrays-i"
    },
    {
      "title": "Distribute Elements Into Two Arrays II",
      "difficulty": "Hard",
      "topic": "Array, Binary Indexed Tree, Segment Tree, Simulation",
      "freq": 94.3,
      "link": "https://leetcode.com/problems/distribute-elements-into-two-arrays-ii"
    },
    {
      "title": "Number of Subarrays That Match a Pattern II",
      "difficulty": "Hard",
      "topic": "Array, Rolling Hash, String Matching, Hash Function",
      "freq": 94.3,
      "link": "https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-ii"
    },
    {
      "title": "Count Prefix and Suffix Pairs II",
      "difficulty": "Hard",
      "topic": "Array, String, Trie, Rolling Hash, String Matching, Hash Function, Z Algorithm",
      "freq": 94.3,
      "link": "https://leetcode.com/problems/count-prefix-and-suffix-pairs-ii"
    },
    {
      "title": "Count Prefix and Suffix Pairs I",
      "difficulty": "Easy",
      "topic": "Array, String, Trie, Rolling Hash, String Matching, Hash Function",
      "freq": 94.3,
      "link": "https://leetcode.com/problems/count-prefix-and-suffix-pairs-i"
    },
    {
      "title": "Number of Changing Keys",
      "difficulty": "Easy",
      "topic": "String",
      "freq": 94.3,
      "link": "https://leetcode.com/problems/number-of-changing-keys"
    },
    {
      "title": "Search in Rotated Sorted Array",
      "difficulty": "Medium",
      "topic": "Array, Binary Search",
      "freq": 87.0,
      "link": "https://leetcode.com/problems/search-in-rotated-sorted-array"
    },
    {
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "topic": "String, Stack, Bracket Sequences",
      "freq": 82.4,
      "link": "https://leetcode.com/problems/valid-parentheses"
    },
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 76.7,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Sliding Window Maximum",
      "difficulty": "Hard",
      "topic": "Array, Queue, Sliding Window, Heap (Priority Queue), Monotonic Queue, Range Minimum/Maximum Query",
      "freq": 69.4,
      "link": "https://leetcode.com/problems/sliding-window-maximum"
    },
    {
      "title": "Median of Two Sorted Arrays",
      "difficulty": "Hard",
      "topic": "Array, Binary Search, Divide and Conquer",
      "freq": 69.4,
      "link": "https://leetcode.com/problems/median-of-two-sorted-arrays"
    }
  ],
  "intuit": [
    {
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "topic": "String, Stack, Bracket Sequences",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/valid-parentheses"
    },
    {
      "title": "Plus One",
      "difficulty": "Easy",
      "topic": "Array, Math",
      "freq": 80.9,
      "link": "https://leetcode.com/problems/plus-one"
    },
    {
      "title": "Maximum Product of Three Numbers",
      "difficulty": "Easy",
      "topic": "Array, Math, Sorting",
      "freq": 79.0,
      "link": "https://leetcode.com/problems/maximum-product-of-three-numbers"
    },
    {
      "title": "Count Islands With Total Value Divisible by K",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Union-Find, Matrix",
      "freq": 79.0,
      "link": "https://leetcode.com/problems/count-islands-with-total-value-divisible-by-k"
    },
    {
      "title": "Dungeon Game",
      "difficulty": "Hard",
      "topic": "Array, Dynamic Programming, Matrix",
      "freq": 79.0,
      "link": "https://leetcode.com/problems/dungeon-game"
    },
    {
      "title": "Maximum Difference Score in a Grid",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming, Matrix",
      "freq": 76.9,
      "link": "https://leetcode.com/problems/maximum-difference-score-in-a-grid"
    },
    {
      "title": "Most Profitable Path in a Tree",
      "difficulty": "Medium",
      "topic": "Array, Tree, Depth-First Search, Breadth-First Search, Graph Theory",
      "freq": 76.9,
      "link": "https://leetcode.com/problems/most-profitable-path-in-a-tree"
    },
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 74.6,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Number of Distinct Substrings in a String",
      "difficulty": "Medium",
      "topic": "String, Trie, Rolling Hash, Suffix Array, Hash Function",
      "freq": 74.6,
      "link": "https://leetcode.com/problems/number-of-distinct-substrings-in-a-string"
    },
    {
      "title": "Length of the Longest Subsequence That Sums to Target",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming, Knapsack Problem, 0-1 Knapsack",
      "freq": 72.1,
      "link": "https://leetcode.com/problems/length-of-the-longest-subsequence-that-sums-to-target"
    },
    {
      "title": "Maximum Total Beauty of the Gardens",
      "difficulty": "Hard",
      "topic": "Array, Two Pointers, Binary Search, Greedy, Sorting, Enumeration, Prefix Sum",
      "freq": 72.1,
      "link": "https://leetcode.com/problems/maximum-total-beauty-of-the-gardens"
    },
    {
      "title": "Make String Anti-palindrome",
      "difficulty": "Hard",
      "topic": "String, Greedy, Sorting, Counting Sort",
      "freq": 72.1,
      "link": "https://leetcode.com/problems/make-string-anti-palindrome"
    }
  ],
  "godaddy": [
    {
      "title": "Arranging Coins",
      "difficulty": "Easy",
      "topic": "Math, Binary Search",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/arranging-coins"
    },
    {
      "title": "String Compression",
      "difficulty": "Medium",
      "topic": "Two Pointers, String",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/string-compression"
    },
    {
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Quicksort",
      "freq": 89.3,
      "link": "https://leetcode.com/problems/merge-intervals"
    },
    {
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "topic": "String, Stack, Bracket Sequences",
      "freq": 77.7,
      "link": "https://leetcode.com/problems/valid-parentheses"
    },
    {
      "title": "Minimum Degree of a Connected Trio in a Graph",
      "difficulty": "Hard",
      "topic": "Graph Theory, Enumeration",
      "freq": 68.5,
      "link": "https://leetcode.com/problems/minimum-degree-of-a-connected-trio-in-a-graph"
    }
  ],
  "squarespace": [
    {
      "title": "Merge Sorted Array",
      "difficulty": "Easy",
      "topic": "Array, Two Pointers, Sorting",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/merge-sorted-array"
    },
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 85.4,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Check if All the Integers in a Range Are Covered",
      "difficulty": "Easy",
      "topic": "Array, Hash Table, Prefix Sum",
      "freq": 83.5,
      "link": "https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered"
    },
    {
      "title": "Merge Two Sorted Lists",
      "difficulty": "Easy",
      "topic": "Linked List, Recursion",
      "freq": 63.2,
      "link": "https://leetcode.com/problems/merge-two-sorted-lists"
    },
    {
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Quicksort",
      "freq": 55.7,
      "link": "https://leetcode.com/problems/merge-intervals"
    }
  ],
  "wix": [
    {
      "title": "Number of Islands",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Union-Find, Matrix",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/number-of-islands"
    },
    {
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Quicksort",
      "freq": 93.1,
      "link": "https://leetcode.com/problems/merge-intervals"
    },
    {
      "title": "Container With Most Water",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Greedy",
      "freq": 90.4,
      "link": "https://leetcode.com/problems/container-with-most-water"
    },
    {
      "title": "Integer to Roman",
      "difficulty": "Medium",
      "topic": "Hash Table, Math, String",
      "freq": 90.4,
      "link": "https://leetcode.com/problems/integer-to-roman"
    },
    {
      "title": "Rotting Oranges",
      "difficulty": "Medium",
      "topic": "Array, Breadth-First Search, Matrix",
      "freq": 90.4,
      "link": "https://leetcode.com/problems/rotting-oranges"
    },
    {
      "title": "Add Two Numbers",
      "difficulty": "Medium",
      "topic": "Linked List, Math, Recursion",
      "freq": 87.3,
      "link": "https://leetcode.com/problems/add-two-numbers"
    },
    {
      "title": "Longest Palindromic Substring",
      "difficulty": "Medium",
      "topic": "Two Pointers, String, Dynamic Programming, Manacher",
      "freq": 87.3,
      "link": "https://leetcode.com/problems/longest-palindromic-substring"
    },
    {
      "title": "Alien Dictionary",
      "difficulty": "Hard",
      "topic": "Array, String, Depth-First Search, Breadth-First Search, Graph Theory, Topological Sort, Directed Acyclic Graph",
      "freq": 87.3,
      "link": "https://leetcode.com/problems/alien-dictionary"
    },
    {
      "title": "3Sum",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Sorting",
      "freq": 87.3,
      "link": "https://leetcode.com/problems/3sum"
    },
    {
      "title": "Merge Two Sorted Lists",
      "difficulty": "Easy",
      "topic": "Linked List, Recursion",
      "freq": 87.3,
      "link": "https://leetcode.com/problems/merge-two-sorted-lists"
    },
    {
      "title": "Move Zeroes",
      "difficulty": "Easy",
      "topic": "Array, Two Pointers",
      "freq": 87.3,
      "link": "https://leetcode.com/problems/move-zeroes"
    },
    {
      "title": "Diameter of Binary Tree",
      "difficulty": "Easy",
      "topic": "Tree, Depth-First Search, Binary Tree, DP on Trees",
      "freq": 87.3,
      "link": "https://leetcode.com/problems/diameter-of-binary-tree"
    }
  ],
  "docusign": [
    {
      "title": "Count Non Decreasing Arrays With Given Digit Sums",
      "difficulty": "Hard",
      "topic": "Array, Dynamic Programming, Prefix Sum",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/count-non-decreasing-arrays-with-given-digit-sums"
    },
    {
      "title": "Design Authentication Manager",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 96.5,
      "link": "https://leetcode.com/problems/design-authentication-manager"
    },
    {
      "title": "Implement Trie (Prefix Tree)",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Design, Trie",
      "freq": 92.4,
      "link": "https://leetcode.com/problems/implement-trie-prefix-tree"
    },
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 87.6,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Find Maximum Area of a Triangle",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Math, Greedy, Geometry, Enumeration",
      "freq": 87.6,
      "link": "https://leetcode.com/problems/find-maximum-area-of-a-triangle"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 81.7,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    },
    {
      "title": "Insert Delete GetRandom O(1)",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Math, Design, Randomized",
      "freq": 81.7,
      "link": "https://leetcode.com/problems/insert-delete-getrandom-o1"
    },
    {
      "title": "Search Suggestions System",
      "difficulty": "Medium",
      "topic": "Array, String, Binary Search, Trie, Sorting, Heap (Priority Queue)",
      "freq": 81.7,
      "link": "https://leetcode.com/problems/search-suggestions-system"
    },
    {
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Quicksort",
      "freq": 74.1,
      "link": "https://leetcode.com/problems/merge-intervals"
    },
    {
      "title": "Top K Frequent Elements",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Divide and Conquer, Sorting, Heap (Priority Queue), Bucket Sort, Counting, Quickselect",
      "freq": 74.1,
      "link": "https://leetcode.com/problems/top-k-frequent-elements"
    },
    {
      "title": "Find Median from Data Stream",
      "difficulty": "Hard",
      "topic": "Two Pointers, Design, Sorting, Heap (Priority Queue), Data Stream",
      "freq": 74.1,
      "link": "https://leetcode.com/problems/find-median-from-data-stream"
    },
    {
      "title": "Integer to Roman",
      "difficulty": "Medium",
      "topic": "Hash Table, Math, String",
      "freq": 74.1,
      "link": "https://leetcode.com/problems/integer-to-roman"
    }
  ],
  "cloudflare": [
    {
      "title": "Design Circular Queue",
      "difficulty": "Medium",
      "topic": "Array, Linked List, Design, Queue",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/design-circular-queue"
    },
    {
      "title": "Reaching Points",
      "difficulty": "Hard",
      "topic": "Math, Euclidean Algorithm, Greatest Common Divisor",
      "freq": 87.4,
      "link": "https://leetcode.com/problems/reaching-points"
    },
    {
      "title": "Design a Stack With Increment Operation",
      "difficulty": "Medium",
      "topic": "Array, Stack, Design",
      "freq": 84.5,
      "link": "https://leetcode.com/problems/design-a-stack-with-increment-operation"
    },
    {
      "title": "3Sum",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Sorting",
      "freq": 81.0,
      "link": "https://leetcode.com/problems/3sum"
    },
    {
      "title": "4Sum",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Sorting",
      "freq": 71.2,
      "link": "https://leetcode.com/problems/4sum"
    },
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 71.2,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Merge k Sorted Lists",
      "difficulty": "Hard",
      "topic": "Linked List, Divide and Conquer, Heap (Priority Queue), Merge Sort, Tournament Sort",
      "freq": 71.2,
      "link": "https://leetcode.com/problems/merge-k-sorted-lists"
    },
    {
      "title": "Design Hit Counter",
      "difficulty": "Medium",
      "topic": "Array, Binary Search, Design, Queue, Data Stream",
      "freq": 63.5,
      "link": "https://leetcode.com/problems/design-hit-counter"
    },
    {
      "title": "Number of Islands",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Union-Find, Matrix",
      "freq": 63.5,
      "link": "https://leetcode.com/problems/number-of-islands"
    },
    {
      "title": "Logger Rate Limiter",
      "difficulty": "Easy",
      "topic": "Hash Table, Design, Data Stream",
      "freq": 63.5,
      "link": "https://leetcode.com/problems/logger-rate-limiter"
    },
    {
      "title": "Course Schedule",
      "difficulty": "Medium",
      "topic": "Depth-First Search, Breadth-First Search, Graph Theory, Topological Sort, Directed Acyclic Graph",
      "freq": 58.0,
      "link": "https://leetcode.com/problems/course-schedule"
    }
  ],
  "paloalto": [
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Find the Longest Equal Subarray",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Binary Search, Sliding Window",
      "freq": 86.7,
      "link": "https://leetcode.com/problems/find-the-longest-equal-subarray"
    },
    {
      "title": "Logger Rate Limiter",
      "difficulty": "Easy",
      "topic": "Hash Table, Design, Data Stream",
      "freq": 78.7,
      "link": "https://leetcode.com/problems/logger-rate-limiter"
    },
    {
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Quicksort",
      "freq": 75.2,
      "link": "https://leetcode.com/problems/merge-intervals"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 71.1,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    },
    {
      "title": "String Compression",
      "difficulty": "Medium",
      "topic": "Two Pointers, String",
      "freq": 71.1,
      "link": "https://leetcode.com/problems/string-compression"
    },
    {
      "title": "Group Anagrams",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Sorting",
      "freq": 66.0,
      "link": "https://leetcode.com/problems/group-anagrams"
    },
    {
      "title": "Design HashMap",
      "difficulty": "Easy",
      "topic": "Array, Hash Table, Linked List, Design, Hash Function",
      "freq": 66.0,
      "link": "https://leetcode.com/problems/design-hashmap"
    },
    {
      "title": "Search in Rotated Sorted Array",
      "difficulty": "Medium",
      "topic": "Array, Binary Search",
      "freq": 66.0,
      "link": "https://leetcode.com/problems/search-in-rotated-sorted-array"
    },
    {
      "title": "Minimum Number of Food Buckets to Feed the Hamsters",
      "difficulty": "Medium",
      "topic": "String, Dynamic Programming, Greedy",
      "freq": 66.0,
      "link": "https://leetcode.com/problems/minimum-number-of-food-buckets-to-feed-the-hamsters"
    },
    {
      "title": "Decode String",
      "difficulty": "Medium",
      "topic": "String, Stack, Recursion",
      "freq": 66.0,
      "link": "https://leetcode.com/problems/decode-string"
    },
    {
      "title": "Merge Sorted Array",
      "difficulty": "Easy",
      "topic": "Array, Two Pointers, Sorting",
      "freq": 66.0,
      "link": "https://leetcode.com/problems/merge-sorted-array"
    }
  ],
  "crowdstrike": [
    {
      "title": "String Compression",
      "difficulty": "Medium",
      "topic": "Two Pointers, String",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/string-compression"
    },
    {
      "title": "Number of Islands",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Union-Find, Matrix",
      "freq": 96.8,
      "link": "https://leetcode.com/problems/number-of-islands"
    },
    {
      "title": "Encode and Decode Strings",
      "difficulty": "Medium",
      "topic": "Array, String, Design",
      "freq": 88.7,
      "link": "https://leetcode.com/problems/encode-and-decode-strings"
    },
    {
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Quicksort",
      "freq": 76.5,
      "link": "https://leetcode.com/problems/merge-intervals"
    },
    {
      "title": "Time Based Key-Value Store",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Binary Search, Design",
      "freq": 66.8,
      "link": "https://leetcode.com/problems/time-based-key-value-store"
    },
    {
      "title": "Trapping Rain Water",
      "difficulty": "Hard",
      "topic": "Array, Two Pointers, Dynamic Programming, Stack, Monotonic Stack",
      "freq": 66.8,
      "link": "https://leetcode.com/problems/trapping-rain-water"
    },
    {
      "title": "Squares of a Sorted Array",
      "difficulty": "Easy",
      "topic": "Array, Two Pointers, Sorting",
      "freq": 66.8,
      "link": "https://leetcode.com/problems/squares-of-a-sorted-array"
    },
    {
      "title": "Course Schedule",
      "difficulty": "Medium",
      "topic": "Depth-First Search, Breadth-First Search, Graph Theory, Topological Sort, Directed Acyclic Graph",
      "freq": 66.8,
      "link": "https://leetcode.com/problems/course-schedule"
    },
    {
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "topic": "String, Stack, Bracket Sequences",
      "freq": 66.8,
      "link": "https://leetcode.com/problems/valid-parentheses"
    },
    {
      "title": "Clone Graph",
      "difficulty": "Medium",
      "topic": "Hash Table, Depth-First Search, Breadth-First Search, Graph Theory",
      "freq": 66.8,
      "link": "https://leetcode.com/problems/clone-graph"
    },
    {
      "title": "Group Anagrams",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Sorting",
      "freq": 66.8,
      "link": "https://leetcode.com/problems/group-anagrams"
    }
  ],
  "fortinet": [
    {
      "title": "Construct String With Repeat Limit",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Greedy, Heap (Priority Queue), Counting",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/construct-string-with-repeat-limit"
    },
    {
      "title": "Percentage of Users Attended a Contest",
      "difficulty": "Easy",
      "topic": "Database",
      "freq": 89.1,
      "link": "https://leetcode.com/problems/percentage-of-users-attended-a-contest"
    },
    {
      "title": "Number of Ways to Paint N \u00d7 3 Grid",
      "difficulty": "Hard",
      "topic": "Dynamic Programming, Graph Coloring",
      "freq": 89.1,
      "link": "https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid"
    },
    {
      "title": "Valid Palindrome II",
      "difficulty": "Easy",
      "topic": "Two Pointers, String, Greedy",
      "freq": 89.1,
      "link": "https://leetcode.com/problems/valid-palindrome-ii"
    }
  ],
  "sap": [
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Maximum Path Quality of a Graph",
      "difficulty": "Hard",
      "topic": "Array, Backtracking, Graph Theory",
      "freq": 91.8,
      "link": "https://leetcode.com/problems/maximum-path-quality-of-a-graph"
    },
    {
      "title": "Count the Number of Infection Sequences",
      "difficulty": "Hard",
      "topic": "Array, Math, Combinatorics, Fermat's Little Theorem",
      "freq": 91.8,
      "link": "https://leetcode.com/problems/count-the-number-of-infection-sequences"
    },
    {
      "title": "Maximum Students Taking Exam",
      "difficulty": "Hard",
      "topic": "Array, Dynamic Programming, Bit Manipulation, Matrix, Bitmask, Maximum Flow, Maximum Matching, Bipartite Graph, Edmonds\u2013Karp Algorithm, MPM Algorithm, Push-Relabel Algorithm, Minimum Cut, Matching (Graph), Flow Network, Dinic's Algorithm",
      "freq": 91.8,
      "link": "https://leetcode.com/problems/maximum-students-taking-exam"
    },
    {
      "title": "Movie Rating",
      "difficulty": "Medium",
      "topic": "Database",
      "freq": 91.8,
      "link": "https://leetcode.com/problems/movie-rating"
    },
    {
      "title": "Count Increasing Quadruplets",
      "difficulty": "Hard",
      "topic": "Array, Dynamic Programming, Binary Indexed Tree, Enumeration, Prefix Sum",
      "freq": 91.8,
      "link": "https://leetcode.com/problems/count-increasing-quadruplets"
    },
    {
      "title": "Container With Most Water",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Greedy",
      "freq": 88.4,
      "link": "https://leetcode.com/problems/container-with-most-water"
    },
    {
      "title": "Longest Common Prefix",
      "difficulty": "Easy",
      "topic": "Array, String, Trie",
      "freq": 84.4,
      "link": "https://leetcode.com/problems/longest-common-prefix"
    },
    {
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "topic": "String, Stack, Bracket Sequences",
      "freq": 84.4,
      "link": "https://leetcode.com/problems/valid-parentheses"
    },
    {
      "title": "Best Time to Buy and Sell Stock",
      "difficulty": "Easy",
      "topic": "Array, Dynamic Programming",
      "freq": 79.7,
      "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock"
    },
    {
      "title": "Number of Islands",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Union-Find, Matrix",
      "freq": 79.7,
      "link": "https://leetcode.com/problems/number-of-islands"
    },
    {
      "title": "Longest Palindromic Substring",
      "difficulty": "Medium",
      "topic": "Two Pointers, String, Dynamic Programming, Manacher",
      "freq": 79.7,
      "link": "https://leetcode.com/problems/longest-palindromic-substring"
    }
  ],
  "siemens": [
    {
      "title": "Peaks in Array",
      "difficulty": "Hard",
      "topic": "Array, Binary Indexed Tree, Segment Tree",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/peaks-in-array"
    },
    {
      "title": "Minimized Maximum of Products Distributed to Any Store",
      "difficulty": "Medium",
      "topic": "Array, Binary Search, Greedy",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store"
    },
    {
      "title": "Number of Islands",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Union-Find, Matrix",
      "freq": 96.6,
      "link": "https://leetcode.com/problems/number-of-islands"
    },
    {
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Quicksort",
      "freq": 88.2,
      "link": "https://leetcode.com/problems/merge-intervals"
    },
    {
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "topic": "String, Stack, Bracket Sequences",
      "freq": 82.5,
      "link": "https://leetcode.com/problems/valid-parentheses"
    },
    {
      "title": "The Skyline Problem",
      "difficulty": "Hard",
      "topic": "Array, Divide and Conquer, Binary Indexed Tree, Segment Tree, Sweep Line, Sorting, Heap (Priority Queue), Ordered Set",
      "freq": 75.3,
      "link": "https://leetcode.com/problems/the-skyline-problem"
    },
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 75.3,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Merge Two Sorted Lists",
      "difficulty": "Easy",
      "topic": "Linked List, Recursion",
      "freq": 65.1,
      "link": "https://leetcode.com/problems/merge-two-sorted-lists"
    },
    {
      "title": "Valid Anagram",
      "difficulty": "Easy",
      "topic": "Hash Table, String, Sorting",
      "freq": 65.1,
      "link": "https://leetcode.com/problems/valid-anagram"
    },
    {
      "title": "Angle Between Hands of a Clock",
      "difficulty": "Medium",
      "topic": "Math",
      "freq": 65.1,
      "link": "https://leetcode.com/problems/angle-between-hands-of-a-clock"
    },
    {
      "title": "Remove Duplicates from Sorted Array",
      "difficulty": "Easy",
      "topic": "Array, Two Pointers",
      "freq": 65.1,
      "link": "https://leetcode.com/problems/remove-duplicates-from-sorted-array"
    },
    {
      "title": "Group Anagrams",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Sorting",
      "freq": 65.1,
      "link": "https://leetcode.com/problems/group-anagrams"
    }
  ],
  "ge": [
    {
      "title": "Degree of an Array",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/degree-of-an-array"
    },
    {
      "title": "Minimum Cost to Set Cooking Time",
      "difficulty": "Medium",
      "topic": "Math, Enumeration",
      "freq": 80.0,
      "link": "https://leetcode.com/problems/minimum-cost-to-set-cooking-time"
    },
    {
      "title": "Minimum Remove to Make Valid Parentheses",
      "difficulty": "Medium",
      "topic": "String, Stack",
      "freq": 71.7,
      "link": "https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses"
    }
  ],
  "honeywell": [
    {
      "title": "Minimum Distance to the Target Element",
      "difficulty": "Easy",
      "topic": "Array",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/minimum-distance-to-the-target-element"
    },
    {
      "title": "Maximum Matrix Sum",
      "difficulty": "Medium",
      "topic": "Array, Greedy, Matrix",
      "freq": 76.7,
      "link": "https://leetcode.com/problems/maximum-matrix-sum"
    },
    {
      "title": "Count Zero Request Servers",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Sliding Window, Sorting",
      "freq": 76.7,
      "link": "https://leetcode.com/problems/count-zero-request-servers"
    },
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 68.1,
      "link": "https://leetcode.com/problems/two-sum"
    }
  ],
  "tesla": [
    {
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Quicksort",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/merge-intervals"
    },
    {
      "title": "Best Time to Buy and Sell Stock",
      "difficulty": "Easy",
      "topic": "Array, Dynamic Programming",
      "freq": 89.2,
      "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock"
    },
    {
      "title": "Number of Islands",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Union-Find, Matrix",
      "freq": 89.2,
      "link": "https://leetcode.com/problems/number-of-islands"
    },
    {
      "title": "Basic Calculator II",
      "difficulty": "Medium",
      "topic": "Math, String, Stack",
      "freq": 89.2,
      "link": "https://leetcode.com/problems/basic-calculator-ii"
    },
    {
      "title": "Reorganize String",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Greedy, Sorting, Heap (Priority Queue), Counting",
      "freq": 86.3,
      "link": "https://leetcode.com/problems/reorganize-string"
    },
    {
      "title": "Find Followers Count",
      "difficulty": "Easy",
      "topic": "Database",
      "freq": 86.3,
      "link": "https://leetcode.com/problems/find-followers-count"
    },
    {
      "title": "Minimum Changes To Make Alternating Binary String",
      "difficulty": "Easy",
      "topic": "String",
      "freq": 86.3,
      "link": "https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string"
    },
    {
      "title": "Design Circular Queue",
      "difficulty": "Medium",
      "topic": "Array, Linked List, Design, Queue",
      "freq": 83.1,
      "link": "https://leetcode.com/problems/design-circular-queue"
    },
    {
      "title": "Building H2O",
      "difficulty": "Medium",
      "topic": "Concurrency",
      "freq": 83.1,
      "link": "https://leetcode.com/problems/building-h2o"
    },
    {
      "title": "Trapping Rain Water",
      "difficulty": "Hard",
      "topic": "Array, Two Pointers, Dynamic Programming, Stack, Monotonic Stack",
      "freq": 83.1,
      "link": "https://leetcode.com/problems/trapping-rain-water"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 69.4,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    },
    {
      "title": "Letter Combinations of a Phone Number",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Backtracking",
      "freq": 69.4,
      "link": "https://leetcode.com/problems/letter-combinations-of-a-phone-number"
    }
  ],
  "rivian": [
    {
      "title": "Number of Islands",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Union-Find, Matrix",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/number-of-islands"
    },
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Degree of an Array",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 92.2,
      "link": "https://leetcode.com/problems/degree-of-an-array"
    },
    {
      "title": "Flatten Deeply Nested Array",
      "difficulty": "Medium",
      "topic": "General",
      "freq": 81.1,
      "link": "https://leetcode.com/problems/flatten-deeply-nested-array"
    },
    {
      "title": "String Compression",
      "difficulty": "Medium",
      "topic": "Two Pointers, String",
      "freq": 81.1,
      "link": "https://leetcode.com/problems/string-compression"
    },
    {
      "title": "Rotate String",
      "difficulty": "Easy",
      "topic": "String, String Matching",
      "freq": 81.1,
      "link": "https://leetcode.com/problems/rotate-string"
    },
    {
      "title": "Merge k Sorted Lists",
      "difficulty": "Hard",
      "topic": "Linked List, Divide and Conquer, Heap (Priority Queue), Merge Sort, Tournament Sort",
      "freq": 81.1,
      "link": "https://leetcode.com/problems/merge-k-sorted-lists"
    },
    {
      "title": "Max Increase to Keep City Skyline",
      "difficulty": "Medium",
      "topic": "Array, Greedy, Matrix",
      "freq": 81.1,
      "link": "https://leetcode.com/problems/max-increase-to-keep-city-skyline"
    },
    {
      "title": "Basic Calculator II",
      "difficulty": "Medium",
      "topic": "Math, String, Stack",
      "freq": 81.1,
      "link": "https://leetcode.com/problems/basic-calculator-ii"
    }
  ],
  "waymo": [
    {
      "title": "Max Points on a Line",
      "difficulty": "Hard",
      "topic": "Array, Hash Table, Math, Geometry, Euclidean Algorithm, Greatest Common Divisor",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/max-points-on-a-line"
    },
    {
      "title": "Number of Islands",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Union-Find, Matrix",
      "freq": 87.2,
      "link": "https://leetcode.com/problems/number-of-islands"
    },
    {
      "title": "Logger Rate Limiter",
      "difficulty": "Easy",
      "topic": "Hash Table, Design, Data Stream",
      "freq": 83.6,
      "link": "https://leetcode.com/problems/logger-rate-limiter"
    },
    {
      "title": "Meeting Rooms II",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Greedy, Sorting, Heap (Priority Queue), Prefix Sum",
      "freq": 79.2,
      "link": "https://leetcode.com/problems/meeting-rooms-ii"
    },
    {
      "title": "Minimum Number of Refueling Stops",
      "difficulty": "Hard",
      "topic": "Array, Dynamic Programming, Greedy, Heap (Priority Queue)",
      "freq": 79.2,
      "link": "https://leetcode.com/problems/minimum-number-of-refueling-stops"
    },
    {
      "title": "Random Pick with Weight",
      "difficulty": "Medium",
      "topic": "Array, Math, Binary Search, Prefix Sum, Randomized",
      "freq": 79.2,
      "link": "https://leetcode.com/problems/random-pick-with-weight"
    },
    {
      "title": "Shortest Distance from All Buildings",
      "difficulty": "Hard",
      "topic": "Array, Breadth-First Search, Matrix",
      "freq": 74.0,
      "link": "https://leetcode.com/problems/shortest-distance-from-all-buildings"
    },
    {
      "title": "Number of Visible People in a Queue",
      "difficulty": "Hard",
      "topic": "Array, Stack, Monotonic Stack",
      "freq": 74.0,
      "link": "https://leetcode.com/problems/number-of-visible-people-in-a-queue"
    },
    {
      "title": "Design Tic-Tac-Toe",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Design, Matrix, Simulation",
      "freq": 67.2,
      "link": "https://leetcode.com/problems/design-tic-tac-toe"
    },
    {
      "title": "Minimum Knight Moves",
      "difficulty": "Medium",
      "topic": "Breadth-First Search, Heuristic Search, Bidirectional Search, A* Search",
      "freq": 67.2,
      "link": "https://leetcode.com/problems/minimum-knight-moves"
    },
    {
      "title": "Design Excel Sum Formula",
      "difficulty": "Hard",
      "topic": "Array, Hash Table, String, Graph Theory, Design, Topological Sort, Matrix",
      "freq": 67.2,
      "link": "https://leetcode.com/problems/design-excel-sum-formula"
    },
    {
      "title": "Minimum Area Rectangle",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Math, Geometry, Sorting",
      "freq": 67.2,
      "link": "https://leetcode.com/problems/minimum-area-rectangle"
    }
  ],
  "cruise": [
    {
      "title": "Synonymous Sentences",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Backtracking, Sort, Union-Find",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/synonymous-sentences"
    },
    {
      "title": "Course Schedule",
      "difficulty": "Medium",
      "topic": "Depth-First Search, Breadth-First Search, Graph Theory, Topological Sort, Directed Acyclic Graph",
      "freq": 72.0,
      "link": "https://leetcode.com/problems/course-schedule"
    }
  ],
  "sofi": [
    {
      "title": "Minimum Number of Steps to Make Two Strings Anagram",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Counting",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram"
    },
    {
      "title": "Longest Mountain in Array",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Dynamic Programming, Enumeration",
      "freq": 96.0,
      "link": "https://leetcode.com/problems/longest-mountain-in-array"
    },
    {
      "title": "Insert Delete GetRandom O(1)",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Math, Design, Randomized",
      "freq": 96.0,
      "link": "https://leetcode.com/problems/insert-delete-getrandom-o1"
    },
    {
      "title": "Minimum Window Substring",
      "difficulty": "Hard",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 91.4,
      "link": "https://leetcode.com/problems/minimum-window-substring"
    },
    {
      "title": "Top K Frequent Elements",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Divide and Conquer, Sorting, Heap (Priority Queue), Bucket Sort, Counting, Quickselect",
      "freq": 91.4,
      "link": "https://leetcode.com/problems/top-k-frequent-elements"
    },
    {
      "title": "Number of Islands",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Union-Find, Matrix",
      "freq": 78.3,
      "link": "https://leetcode.com/problems/number-of-islands"
    },
    {
      "title": "Asteroid Collision",
      "difficulty": "Medium",
      "topic": "Array, Stack, Simulation",
      "freq": 78.3,
      "link": "https://leetcode.com/problems/asteroid-collision"
    },
    {
      "title": "Degree of an Array",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 78.3,
      "link": "https://leetcode.com/problems/degree-of-an-array"
    },
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 78.3,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Maximum Number of Non-overlapping Palindrome Substrings",
      "difficulty": "Hard",
      "topic": "Two Pointers, String, Dynamic Programming, Greedy",
      "freq": 78.3,
      "link": "https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings"
    },
    {
      "title": "Merge k Sorted Lists",
      "difficulty": "Hard",
      "topic": "Linked List, Divide and Conquer, Heap (Priority Queue), Merge Sort, Tournament Sort",
      "freq": 67.9,
      "link": "https://leetcode.com/problems/merge-k-sorted-lists"
    },
    {
      "title": "Meeting Scheduler",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Sorting",
      "freq": 67.9,
      "link": "https://leetcode.com/problems/meeting-scheduler"
    }
  ],
  "chime": [
    {
      "title": "Design Browser History",
      "difficulty": "Medium",
      "topic": "Array, Linked List, Stack, Design, Doubly-Linked List, Data Stream",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/design-browser-history"
    },
    {
      "title": "Detonate the Maximum Bombs",
      "difficulty": "Medium",
      "topic": "Array, Math, Depth-First Search, Breadth-First Search, Graph Theory, Geometry",
      "freq": 85.1,
      "link": "https://leetcode.com/problems/detonate-the-maximum-bombs"
    },
    {
      "title": "Daily Temperatures",
      "difficulty": "Medium",
      "topic": "Array, Stack, Monotonic Stack",
      "freq": 68.5,
      "link": "https://leetcode.com/problems/daily-temperatures"
    }
  ],
  "affirm": [
    {
      "title": "Insert Delete GetRandom O(1)",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Math, Design, Randomized",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/insert-delete-getrandom-o1"
    },
    {
      "title": "Shortest Uncommon Substring in an Array",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Trie",
      "freq": 86.3,
      "link": "https://leetcode.com/problems/shortest-uncommon-substring-in-an-array"
    },
    {
      "title": "Parse Lisp Expression",
      "difficulty": "Hard",
      "topic": "Hash Table, String, Stack, Recursion",
      "freq": 75.7,
      "link": "https://leetcode.com/problems/parse-lisp-expression"
    },
    {
      "title": "Group Anagrams",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Sorting",
      "freq": 70.3,
      "link": "https://leetcode.com/problems/group-anagrams"
    },
    {
      "title": "Insert Delete GetRandom O(1) - Duplicates allowed",
      "difficulty": "Hard",
      "topic": "Array, Hash Table, Math, Design, Randomized",
      "freq": 70.3,
      "link": "https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed"
    },
    {
      "title": "Design Hit Counter",
      "difficulty": "Medium",
      "topic": "Array, Binary Search, Design, Queue, Data Stream",
      "freq": 62.7,
      "link": "https://leetcode.com/problems/design-hit-counter"
    },
    {
      "title": "String Compression",
      "difficulty": "Medium",
      "topic": "Two Pointers, String",
      "freq": 62.7,
      "link": "https://leetcode.com/problems/string-compression"
    },
    {
      "title": "Valid Anagram",
      "difficulty": "Easy",
      "topic": "Hash Table, String, Sorting",
      "freq": 62.7,
      "link": "https://leetcode.com/problems/valid-anagram"
    },
    {
      "title": "Coin Change",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming, Breadth-First Search, Knapsack Problem, Complete Knapsack",
      "freq": 57.2,
      "link": "https://leetcode.com/problems/coin-change"
    },
    {
      "title": "Optimal Account Balancing",
      "difficulty": "Hard",
      "topic": "Array, Dynamic Programming, Backtracking, Bit Manipulation, Bitmask",
      "freq": 49.6,
      "link": "https://leetcode.com/problems/optimal-account-balancing"
    }
  ],
  "upstart": [
    {
      "title": "Maximum Subarray",
      "difficulty": "Medium",
      "topic": "Array, Divide and Conquer, Dynamic Programming",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/maximum-subarray"
    },
    {
      "title": "Valid Sudoku",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Matrix",
      "freq": 67.6,
      "link": "https://leetcode.com/problems/valid-sudoku"
    },
    {
      "title": "Simplify Path",
      "difficulty": "Medium",
      "topic": "String, Stack",
      "freq": 62.3,
      "link": "https://leetcode.com/problems/simplify-path"
    },
    {
      "title": "Range Sum Query 2D - Immutable",
      "difficulty": "Medium",
      "topic": "Array, Design, Matrix, Prefix Sum",
      "freq": 62.3,
      "link": "https://leetcode.com/problems/range-sum-query-2d-immutable"
    },
    {
      "title": "Triangle",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming",
      "freq": 54.8,
      "link": "https://leetcode.com/problems/triangle"
    },
    {
      "title": "Group Anagrams",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Sorting",
      "freq": 54.8,
      "link": "https://leetcode.com/problems/group-anagrams"
    }
  ],
  "wealthfront": [
    {
      "title": "Minimum Number of Steps to Make Two Strings Anagram II",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Counting",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii"
    }
  ],
  "fiverr": [
    {
      "title": "Rotate Array",
      "difficulty": "Medium",
      "topic": "Array, Math, Two Pointers",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/rotate-array"
    },
    {
      "title": "Subsets",
      "difficulty": "Medium",
      "topic": "Array, Backtracking, Bit Manipulation",
      "freq": 90.8,
      "link": "https://leetcode.com/problems/subsets"
    }
  ],
  "toptal": [
    {
      "title": "String Compression II",
      "difficulty": "Hard",
      "topic": "String, Dynamic Programming",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/string-compression-ii"
    },
    {
      "title": "Airplane Seat Assignment Probability",
      "difficulty": "Medium",
      "topic": "Math, Dynamic Programming, Brainteaser, Probability and Statistics",
      "freq": 71.8,
      "link": "https://leetcode.com/problems/airplane-seat-assignment-probability"
    },
    {
      "title": "Number of Steps to Reduce a Number in Binary Representation to One",
      "difficulty": "Medium",
      "topic": "String, Bit Manipulation, Simulation",
      "freq": 71.8,
      "link": "https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one"
    }
  ],
  "alibaba": [
    {
      "title": "Split Array with Equal Sum",
      "difficulty": "Hard",
      "topic": "Array, Hash Table, Prefix Sum",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/split-array-with-equal-sum"
    },
    {
      "title": "Split Concatenated Strings",
      "difficulty": "Medium",
      "topic": "Array, String, Greedy",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/split-concatenated-strings"
    },
    {
      "title": "Path Sum IV",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Tree, Depth-First Search, Binary Tree",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/path-sum-iv"
    },
    {
      "title": "Valid Parenthesis String",
      "difficulty": "Medium",
      "topic": "String, Dynamic Programming, Stack, Greedy, Bracket Sequences",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/valid-parenthesis-string"
    },
    {
      "title": "Kth Largest Element in an Array",
      "difficulty": "Medium",
      "topic": "Array, Divide and Conquer, Sorting, Heap (Priority Queue), Quickselect",
      "freq": 67.6,
      "link": "https://leetcode.com/problems/kth-largest-element-in-an-array"
    }
  ],
  "baidu": [
    {
      "title": "Binary Tree Maximum Path Sum",
      "difficulty": "Hard",
      "topic": "Dynamic Programming, Tree, Depth-First Search, Binary Tree, DP on Trees",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/binary-tree-maximum-path-sum"
    },
    {
      "title": "Longest Substring with At Least K Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Divide and Conquer, Sliding Window",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters"
    },
    {
      "title": "Integer Replacement",
      "difficulty": "Medium",
      "topic": "Dynamic Programming, Greedy, Bit Manipulation, Memoization",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/integer-replacement"
    },
    {
      "title": "Split Array Largest Sum",
      "difficulty": "Hard",
      "topic": "Array, Binary Search, Dynamic Programming, Greedy, Prefix Sum",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/split-array-largest-sum"
    },
    {
      "title": "Arithmetic Slices",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming, Sliding Window",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/arithmetic-slices"
    },
    {
      "title": "Arithmetic Slices II - Subsequence",
      "difficulty": "Hard",
      "topic": "Array, Dynamic Programming",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/arithmetic-slices-ii-subsequence"
    },
    {
      "title": "Zuma Game",
      "difficulty": "Hard",
      "topic": "String, Dynamic Programming, Stack, Breadth-First Search, Memoization",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/zuma-game"
    },
    {
      "title": "Out of Boundary Paths",
      "difficulty": "Medium",
      "topic": "Dynamic Programming",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/out-of-boundary-paths"
    },
    {
      "title": "Design In-Memory File System",
      "difficulty": "Hard",
      "topic": "Hash Table, String, Design, Trie, Sorting",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/design-in-memory-file-system"
    },
    {
      "title": "Length of Longest Fibonacci Subsequence",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Dynamic Programming",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/length-of-longest-fibonacci-subsequence"
    },
    {
      "title": "Search a 2D Matrix II",
      "difficulty": "Medium",
      "topic": "Array, Binary Search, Divide and Conquer, Matrix",
      "freq": 66.2,
      "link": "https://leetcode.com/problems/search-a-2d-matrix-ii"
    }
  ],
  "tencent": [
    {
      "title": "Decode String",
      "difficulty": "Medium",
      "topic": "String, Stack, Recursion",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/decode-string"
    },
    {
      "title": "Remove Boxes",
      "difficulty": "Hard",
      "topic": "Array, Dynamic Programming, Memoization",
      "freq": 90.2,
      "link": "https://leetcode.com/problems/remove-boxes"
    },
    {
      "title": "Minimum Factorization",
      "difficulty": "Medium",
      "topic": "Math, Greedy, Prime Factorization",
      "freq": 90.2,
      "link": "https://leetcode.com/problems/minimum-factorization"
    }
  ],
  "bytedance": [
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Remove Duplicate Letters",
      "difficulty": "Medium",
      "topic": "String, Stack, Greedy, Monotonic Stack",
      "freq": 85.1,
      "link": "https://leetcode.com/problems/remove-duplicate-letters"
    },
    {
      "title": "Smallest Subsequence of Distinct Characters",
      "difficulty": "Medium",
      "topic": "String, Stack, Greedy, Monotonic Stack",
      "freq": 82.6,
      "link": "https://leetcode.com/problems/smallest-subsequence-of-distinct-characters"
    },
    {
      "title": "First Day Where You Have Been in All the Rooms",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming",
      "freq": 79.9,
      "link": "https://leetcode.com/problems/first-day-where-you-have-been-in-all-the-rooms"
    },
    {
      "title": "Number of Islands",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Union-Find, Matrix",
      "freq": 79.9,
      "link": "https://leetcode.com/problems/number-of-islands"
    },
    {
      "title": "Course Schedule",
      "difficulty": "Medium",
      "topic": "Depth-First Search, Breadth-First Search, Graph Theory, Topological Sort, Directed Acyclic Graph",
      "freq": 76.8,
      "link": "https://leetcode.com/problems/course-schedule"
    },
    {
      "title": "Combination Sum",
      "difficulty": "Medium",
      "topic": "Array, Backtracking",
      "freq": 69.0,
      "link": "https://leetcode.com/problems/combination-sum"
    },
    {
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Quicksort",
      "freq": 69.0,
      "link": "https://leetcode.com/problems/merge-intervals"
    },
    {
      "title": "Basic Calculator II",
      "difficulty": "Medium",
      "topic": "Math, String, Stack",
      "freq": 69.0,
      "link": "https://leetcode.com/problems/basic-calculator-ii"
    },
    {
      "title": "Maximal Square",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming, Matrix",
      "freq": 69.0,
      "link": "https://leetcode.com/problems/maximal-square"
    },
    {
      "title": "Shortest Bridge",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Matrix",
      "freq": 69.0,
      "link": "https://leetcode.com/problems/shortest-bridge"
    },
    {
      "title": "House Robber",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming",
      "freq": 63.8,
      "link": "https://leetcode.com/problems/house-robber"
    }
  ],
  "grab": [
    {
      "title": "Minimum Cost For Tickets",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/minimum-cost-for-tickets"
    },
    {
      "title": "Adding Two Negabinary Numbers",
      "difficulty": "Medium",
      "topic": "Array, Math",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/adding-two-negabinary-numbers"
    },
    {
      "title": "Minimum Number of Food Buckets to Feed the Hamsters",
      "difficulty": "Medium",
      "topic": "String, Dynamic Programming, Greedy",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/minimum-number-of-food-buckets-to-feed-the-hamsters"
    },
    {
      "title": "Reconstruct a 2-Row Binary Matrix",
      "difficulty": "Medium",
      "topic": "Array, Greedy, Matrix",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/reconstruct-a-2-row-binary-matrix"
    },
    {
      "title": "Accounts Merge",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Depth-First Search, Breadth-First Search, Union-Find, Sorting",
      "freq": 82.9,
      "link": "https://leetcode.com/problems/accounts-merge"
    },
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 75.7,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "topic": "String, Stack, Bracket Sequences",
      "freq": 75.7,
      "link": "https://leetcode.com/problems/valid-parentheses"
    },
    {
      "title": "Simplify Path",
      "difficulty": "Medium",
      "topic": "String, Stack",
      "freq": 75.7,
      "link": "https://leetcode.com/problems/simplify-path"
    },
    {
      "title": "Daily Temperatures",
      "difficulty": "Medium",
      "topic": "Array, Stack, Monotonic Stack",
      "freq": 75.7,
      "link": "https://leetcode.com/problems/daily-temperatures"
    },
    {
      "title": "House Robber",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming",
      "freq": 75.7,
      "link": "https://leetcode.com/problems/house-robber"
    },
    {
      "title": "Repeated Substring Pattern",
      "difficulty": "Easy",
      "topic": "String, String Matching, Z Algorithm, Knuth\u2013Morris\u2013Pratt Algorithm",
      "freq": 75.7,
      "link": "https://leetcode.com/problems/repeated-substring-pattern"
    },
    {
      "title": "Number of Steps to Reduce a Number in Binary Representation to One",
      "difficulty": "Medium",
      "topic": "String, Bit Manipulation, Simulation",
      "freq": 65.7,
      "link": "https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one"
    }
  ],
  "shopee": [
    {
      "title": "Count Pairs in Two Arrays",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Binary Search, Sorting",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/count-pairs-in-two-arrays"
    },
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 77.4,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Jump Game",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming, Greedy",
      "freq": 68.1,
      "link": "https://leetcode.com/problems/jump-game"
    },
    {
      "title": "Random Pick with Weight",
      "difficulty": "Medium",
      "topic": "Array, Math, Binary Search, Prefix Sum, Randomized",
      "freq": 68.1,
      "link": "https://leetcode.com/problems/random-pick-with-weight"
    },
    {
      "title": "Serialize and Deserialize BST",
      "difficulty": "Medium",
      "topic": "String, Tree, Depth-First Search, Breadth-First Search, Design, Binary Search Tree, Binary Tree",
      "freq": 68.1,
      "link": "https://leetcode.com/problems/serialize-and-deserialize-bst"
    },
    {
      "title": "Longest Palindromic Substring",
      "difficulty": "Medium",
      "topic": "Two Pointers, String, Dynamic Programming, Manacher",
      "freq": 68.1,
      "link": "https://leetcode.com/problems/longest-palindromic-substring"
    },
    {
      "title": "Bus Routes",
      "difficulty": "Hard",
      "topic": "Array, Hash Table, Breadth-First Search",
      "freq": 68.1,
      "link": "https://leetcode.com/problems/bus-routes"
    }
  ],
  "rakuten": [
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Combination Sum II",
      "difficulty": "Medium",
      "topic": "Array, Backtracking",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/combination-sum-ii"
    },
    {
      "title": "Rotate Image",
      "difficulty": "Medium",
      "topic": "Array, Math, Matrix",
      "freq": 88.0,
      "link": "https://leetcode.com/problems/rotate-image"
    },
    {
      "title": "String Compression",
      "difficulty": "Medium",
      "topic": "Two Pointers, String",
      "freq": 88.0,
      "link": "https://leetcode.com/problems/string-compression"
    },
    {
      "title": "Rotting Oranges",
      "difficulty": "Medium",
      "topic": "Array, Breadth-First Search, Matrix",
      "freq": 88.0,
      "link": "https://leetcode.com/problems/rotting-oranges"
    },
    {
      "title": "Climbing Stairs",
      "difficulty": "Easy",
      "topic": "Math, Dynamic Programming, Memoization",
      "freq": 88.0,
      "link": "https://leetcode.com/problems/climbing-stairs"
    },
    {
      "title": "Trapping Rain Water",
      "difficulty": "Hard",
      "topic": "Array, Two Pointers, Dynamic Programming, Stack, Monotonic Stack",
      "freq": 88.0,
      "link": "https://leetcode.com/problems/trapping-rain-water"
    }
  ],
  "coupang": [
    {
      "title": "LFU Cache",
      "difficulty": "Hard",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/lfu-cache"
    },
    {
      "title": "Decode String",
      "difficulty": "Medium",
      "topic": "String, Stack, Recursion",
      "freq": 97.5,
      "link": "https://leetcode.com/problems/decode-string"
    },
    {
      "title": "Subsets",
      "difficulty": "Medium",
      "topic": "Array, Backtracking, Bit Manipulation",
      "freq": 94.8,
      "link": "https://leetcode.com/problems/subsets"
    },
    {
      "title": "Word Break",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Dynamic Programming, Trie, Memoization, Brute-Force Search",
      "freq": 94.8,
      "link": "https://leetcode.com/problems/word-break"
    },
    {
      "title": "Range Module",
      "difficulty": "Hard",
      "topic": "Design, Segment Tree, Ordered Set",
      "freq": 91.8,
      "link": "https://leetcode.com/problems/range-module"
    },
    {
      "title": "Find Pivot Index",
      "difficulty": "Easy",
      "topic": "Array, Prefix Sum",
      "freq": 91.8,
      "link": "https://leetcode.com/problems/find-pivot-index"
    },
    {
      "title": "Split BST",
      "difficulty": "Medium",
      "topic": "Tree, Binary Search Tree, Recursion, Binary Tree",
      "freq": 91.8,
      "link": "https://leetcode.com/problems/split-bst"
    },
    {
      "title": "Longest Substring with At Most K Distinct Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 91.8,
      "link": "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters"
    },
    {
      "title": "Course Schedule",
      "difficulty": "Medium",
      "topic": "Depth-First Search, Breadth-First Search, Graph Theory, Topological Sort, Directed Acyclic Graph",
      "freq": 88.3,
      "link": "https://leetcode.com/problems/course-schedule"
    },
    {
      "title": "LRU Cache",
      "difficulty": "Medium",
      "topic": "Hash Table, Linked List, Design, Doubly-Linked List",
      "freq": 84.3,
      "link": "https://leetcode.com/problems/lru-cache"
    },
    {
      "title": "Shortest Bridge",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Matrix",
      "freq": 84.3,
      "link": "https://leetcode.com/problems/shortest-bridge"
    },
    {
      "title": "Longest Repeating Substring",
      "difficulty": "Medium",
      "topic": "String, Binary Search, Dynamic Programming, Rolling Hash, Suffix Array, Hash Function, Suffix Automaton, Suffix Tree",
      "freq": 79.6,
      "link": "https://leetcode.com/problems/longest-repeating-substring"
    }
  ],
  "yandex": [
    {
      "title": "Longest Subarray of 1's After Deleting One Element",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming, Sliding Window",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element"
    },
    {
      "title": "Maximize Distance to Closest Person",
      "difficulty": "Medium",
      "topic": "Array",
      "freq": 91.5,
      "link": "https://leetcode.com/problems/maximize-distance-to-closest-person"
    },
    {
      "title": "Summary Ranges",
      "difficulty": "Easy",
      "topic": "Array",
      "freq": 89.4,
      "link": "https://leetcode.com/problems/summary-ranges"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 83.0,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    },
    {
      "title": "Find K Closest Elements",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Binary Search, Sliding Window, Sorting, Heap (Priority Queue)",
      "freq": 82.5,
      "link": "https://leetcode.com/problems/find-k-closest-elements"
    },
    {
      "title": "String Compression",
      "difficulty": "Medium",
      "topic": "Two Pointers, String",
      "freq": 80.9,
      "link": "https://leetcode.com/problems/string-compression"
    },
    {
      "title": "Valid Palindrome II",
      "difficulty": "Easy",
      "topic": "Two Pointers, String, Greedy",
      "freq": 80.3,
      "link": "https://leetcode.com/problems/valid-palindrome-ii"
    },
    {
      "title": "Subarray Sum Equals K",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Prefix Sum",
      "freq": 78.5,
      "link": "https://leetcode.com/problems/subarray-sum-equals-k"
    },
    {
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Quicksort",
      "freq": 77.8,
      "link": "https://leetcode.com/problems/merge-intervals"
    },
    {
      "title": "Move Zeroes",
      "difficulty": "Easy",
      "topic": "Array, Two Pointers",
      "freq": 73.4,
      "link": "https://leetcode.com/problems/move-zeroes"
    },
    {
      "title": "Isomorphic Strings",
      "difficulty": "Easy",
      "topic": "Hash Table, String",
      "freq": 71.6,
      "link": "https://leetcode.com/problems/isomorphic-strings"
    },
    {
      "title": "Valid Palindrome",
      "difficulty": "Easy",
      "topic": "Two Pointers, String",
      "freq": 70.7,
      "link": "https://leetcode.com/problems/valid-palindrome"
    }
  ],
  "revolut": [
    {
      "title": "Longest Common Prefix",
      "difficulty": "Easy",
      "topic": "Array, String, Trie",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/longest-common-prefix"
    },
    {
      "title": "Perfect Squares",
      "difficulty": "Medium",
      "topic": "Math, Dynamic Programming, Breadth-First Search, Knapsack Problem, Complete Knapsack",
      "freq": 96.9,
      "link": "https://leetcode.com/problems/perfect-squares"
    },
    {
      "title": "Reverse Linked List II",
      "difficulty": "Medium",
      "topic": "Linked List",
      "freq": 89.1,
      "link": "https://leetcode.com/problems/reverse-linked-list-ii"
    },
    {
      "title": "Binary Tree Paths",
      "difficulty": "Easy",
      "topic": "String, Backtracking, Tree, Depth-First Search, Binary Tree",
      "freq": 89.1,
      "link": "https://leetcode.com/problems/binary-tree-paths"
    },
    {
      "title": "Find All Anagrams in a String",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 83.9,
      "link": "https://leetcode.com/problems/find-all-anagrams-in-a-string"
    },
    {
      "title": "Longest Increasing Subsequence",
      "difficulty": "Medium",
      "topic": "Array, Binary Search, Dynamic Programming, Longest Increasing Subsequence",
      "freq": 83.9,
      "link": "https://leetcode.com/problems/longest-increasing-subsequence"
    },
    {
      "title": "Restaurant Growth",
      "difficulty": "Medium",
      "topic": "Database",
      "freq": 77.2,
      "link": "https://leetcode.com/problems/restaurant-growth"
    },
    {
      "title": "Random Pick with Weight",
      "difficulty": "Medium",
      "topic": "Array, Math, Binary Search, Prefix Sum, Randomized",
      "freq": 67.9,
      "link": "https://leetcode.com/problems/random-pick-with-weight"
    },
    {
      "title": "Missing Number",
      "difficulty": "Easy",
      "topic": "Array, Hash Table, Math, Binary Search, Bit Manipulation, Sorting",
      "freq": 67.9,
      "link": "https://leetcode.com/problems/missing-number"
    },
    {
      "title": "Encode and Decode TinyURL",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Design, Hash Function",
      "freq": 67.9,
      "link": "https://leetcode.com/problems/encode-and-decode-tinyurl"
    },
    {
      "title": "Simple Bank System",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Design, Simulation",
      "freq": 67.9,
      "link": "https://leetcode.com/problems/simple-bank-system"
    },
    {
      "title": "Subarray Product Less Than K",
      "difficulty": "Medium",
      "topic": "Array, Binary Search, Sliding Window, Prefix Sum",
      "freq": 67.9,
      "link": "https://leetcode.com/problems/subarray-product-less-than-k"
    }
  ],
  "wise": [
    {
      "title": "Maximal Square",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming, Matrix",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/maximal-square"
    },
    {
      "title": "Design Tic-Tac-Toe",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Design, Matrix, Simulation",
      "freq": 85.4,
      "link": "https://leetcode.com/problems/design-tic-tac-toe"
    },
    {
      "title": "Number of Perfect Pairs",
      "difficulty": "Medium",
      "topic": "Array, Math, Two Pointers, Sorting",
      "freq": 80.7,
      "link": "https://leetcode.com/problems/number-of-perfect-pairs"
    },
    {
      "title": "Subarray Product Less Than K",
      "difficulty": "Medium",
      "topic": "Array, Binary Search, Sliding Window, Prefix Sum",
      "freq": 66.1,
      "link": "https://leetcode.com/problems/subarray-product-less-than-k"
    },
    {
      "title": "Odd String Difference",
      "difficulty": "Easy",
      "topic": "Array, Hash Table, String",
      "freq": 66.1,
      "link": "https://leetcode.com/problems/odd-string-difference"
    },
    {
      "title": "Design Hit Counter",
      "difficulty": "Medium",
      "topic": "Array, Binary Search, Design, Queue, Data Stream",
      "freq": 66.1,
      "link": "https://leetcode.com/problems/design-hit-counter"
    }
  ],
  "makemytrip": [
    {
      "title": "Length of Longest Subarray With at Most K Frequency",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Sliding Window",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency"
    },
    {
      "title": "Sum Of Special Evenly-Spaced Elements In Array",
      "difficulty": "Hard",
      "topic": "Array, Dynamic Programming, Sqrt Decomposition",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/sum-of-special-evenly-spaced-elements-in-array"
    },
    {
      "title": "Longest Ideal Subsequence",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Dynamic Programming",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/longest-ideal-subsequence"
    },
    {
      "title": "Reachable Nodes With Restrictions",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Tree, Depth-First Search, Breadth-First Search, Union-Find, Graph Theory",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/reachable-nodes-with-restrictions"
    },
    {
      "title": "First Missing Positive",
      "difficulty": "Hard",
      "topic": "Array, Hash Table",
      "freq": 87.9,
      "link": "https://leetcode.com/problems/first-missing-positive"
    },
    {
      "title": "Cheapest Flights Within K Stops",
      "difficulty": "Medium",
      "topic": "Dynamic Programming, Depth-First Search, Breadth-First Search, Graph Theory, Heap (Priority Queue), Shortest Path",
      "freq": 74.8,
      "link": "https://leetcode.com/problems/cheapest-flights-within-k-stops"
    },
    {
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Quicksort",
      "freq": 74.8,
      "link": "https://leetcode.com/problems/merge-intervals"
    },
    {
      "title": "Generate Parentheses",
      "difficulty": "Medium",
      "topic": "String, Dynamic Programming, Backtracking, Bracket Sequences",
      "freq": 64.4,
      "link": "https://leetcode.com/problems/generate-parentheses"
    },
    {
      "title": "Trapping Rain Water",
      "difficulty": "Hard",
      "topic": "Array, Two Pointers, Dynamic Programming, Stack, Monotonic Stack",
      "freq": 64.4,
      "link": "https://leetcode.com/problems/trapping-rain-water"
    },
    {
      "title": "Longest Valid Parentheses",
      "difficulty": "Hard",
      "topic": "String, Dynamic Programming, Stack, Bracket Sequences",
      "freq": 64.4,
      "link": "https://leetcode.com/problems/longest-valid-parentheses"
    },
    {
      "title": "Longest Palindromic Substring",
      "difficulty": "Medium",
      "topic": "Two Pointers, String, Dynamic Programming, Manacher",
      "freq": 64.4,
      "link": "https://leetcode.com/problems/longest-palindromic-substring"
    },
    {
      "title": "Word Search",
      "difficulty": "Medium",
      "topic": "Array, String, Backtracking, Depth-First Search, Matrix",
      "freq": 64.4,
      "link": "https://leetcode.com/problems/word-search"
    }
  ],
  "myntra": [
    {
      "title": "Maximum Earnings From Taxi",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Binary Search, Dynamic Programming, Sorting",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/maximum-earnings-from-taxi"
    },
    {
      "title": "Repeated Substring Pattern",
      "difficulty": "Easy",
      "topic": "String, String Matching, Z Algorithm, Knuth\u2013Morris\u2013Pratt Algorithm",
      "freq": 72.8,
      "link": "https://leetcode.com/problems/repeated-substring-pattern"
    },
    {
      "title": "Best Time to Buy and Sell Stock",
      "difficulty": "Easy",
      "topic": "Array, Dynamic Programming",
      "freq": 72.8,
      "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock"
    },
    {
      "title": "Largest Rectangle in Histogram",
      "difficulty": "Hard",
      "topic": "Array, Stack, Monotonic Stack, Range Minimum/Maximum Query",
      "freq": 72.8,
      "link": "https://leetcode.com/problems/largest-rectangle-in-histogram"
    },
    {
      "title": "First Missing Positive",
      "difficulty": "Hard",
      "topic": "Array, Hash Table",
      "freq": 72.8,
      "link": "https://leetcode.com/problems/first-missing-positive"
    },
    {
      "title": "Target Sum",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming, Backtracking, Knapsack Problem, 0-1 Knapsack",
      "freq": 72.8,
      "link": "https://leetcode.com/problems/target-sum"
    },
    {
      "title": "Deepest Leaves Sum",
      "difficulty": "Medium",
      "topic": "Tree, Depth-First Search, Breadth-First Search, Binary Tree",
      "freq": 72.8,
      "link": "https://leetcode.com/problems/deepest-leaves-sum"
    },
    {
      "title": "Find Pivot Index",
      "difficulty": "Easy",
      "topic": "Array, Prefix Sum",
      "freq": 72.8,
      "link": "https://leetcode.com/problems/find-pivot-index"
    },
    {
      "title": "Asteroid Collision",
      "difficulty": "Medium",
      "topic": "Array, Stack, Simulation",
      "freq": 62.8,
      "link": "https://leetcode.com/problems/asteroid-collision"
    },
    {
      "title": "Largest Number",
      "difficulty": "Medium",
      "topic": "Array, String, Greedy, Sorting",
      "freq": 62.8,
      "link": "https://leetcode.com/problems/largest-number"
    },
    {
      "title": "3Sum",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Sorting",
      "freq": 62.8,
      "link": "https://leetcode.com/problems/3sum"
    },
    {
      "title": "Wiggle Sort",
      "difficulty": "Medium",
      "topic": "Array, Greedy, Sorting",
      "freq": 62.8,
      "link": "https://leetcode.com/problems/wiggle-sort"
    }
  ],
  "meesho": [
    {
      "title": "Number of Unique XOR Triplets II",
      "difficulty": "Medium",
      "topic": "Array, Math, Bit Manipulation, Enumeration",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/number-of-unique-xor-triplets-ii"
    },
    {
      "title": "Number of Unique XOR Triplets I",
      "difficulty": "Medium",
      "topic": "Array, Math, Bit Manipulation",
      "freq": 97.6,
      "link": "https://leetcode.com/problems/number-of-unique-xor-triplets-i"
    },
    {
      "title": "Number of Strings Which Can Be Rearranged to Contain Substring",
      "difficulty": "Medium",
      "topic": "Math, Dynamic Programming, Combinatorics",
      "freq": 91.9,
      "link": "https://leetcode.com/problems/number-of-strings-which-can-be-rearranged-to-contain-substring"
    },
    {
      "title": "Number of Possible Sets of Closing Branches",
      "difficulty": "Hard",
      "topic": "Bit Manipulation, Graph Theory, Heap (Priority Queue), Enumeration, Shortest Path",
      "freq": 91.9,
      "link": "https://leetcode.com/problems/number-of-possible-sets-of-closing-branches"
    },
    {
      "title": "Count Complete Substrings",
      "difficulty": "Hard",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 91.9,
      "link": "https://leetcode.com/problems/count-complete-substrings"
    },
    {
      "title": "Design Exam Scores Tracker",
      "difficulty": "Medium",
      "topic": "Array, Binary Search, Design, Prefix Sum",
      "freq": 91.9,
      "link": "https://leetcode.com/problems/design-exam-scores-tracker"
    },
    {
      "title": "Sum of Perfect Square Ancestors",
      "difficulty": "Hard",
      "topic": "Array, Hash Table, Math, Tree, Depth-First Search, Counting, Number Theory",
      "freq": 91.9,
      "link": "https://leetcode.com/problems/sum-of-perfect-square-ancestors"
    },
    {
      "title": "Rising Temperature",
      "difficulty": "Easy",
      "topic": "Database",
      "freq": 84.5,
      "link": "https://leetcode.com/problems/rising-temperature"
    },
    {
      "title": "Count Subarrays With Fixed Bounds",
      "difficulty": "Hard",
      "topic": "Array, Queue, Sliding Window, Monotonic Queue",
      "freq": 79.9,
      "link": "https://leetcode.com/problems/count-subarrays-with-fixed-bounds"
    },
    {
      "title": "Reach a Number",
      "difficulty": "Medium",
      "topic": "Math, Binary Search",
      "freq": 79.9,
      "link": "https://leetcode.com/problems/reach-a-number"
    },
    {
      "title": "Consecutive Numbers",
      "difficulty": "Medium",
      "topic": "Database",
      "freq": 74.2,
      "link": "https://leetcode.com/problems/consecutive-numbers"
    },
    {
      "title": "Minimum Time to Complete Trips",
      "difficulty": "Medium",
      "topic": "Array, Binary Search",
      "freq": 74.2,
      "link": "https://leetcode.com/problems/minimum-time-to-complete-trips"
    }
  ],
  "nykaa": [
    {
      "title": "Largest Number",
      "difficulty": "Medium",
      "topic": "Array, String, Greedy, Sorting",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/largest-number"
    },
    {
      "title": "Longest Valid Parentheses",
      "difficulty": "Hard",
      "topic": "String, Dynamic Programming, Stack, Bracket Sequences",
      "freq": 92.6,
      "link": "https://leetcode.com/problems/longest-valid-parentheses"
    },
    {
      "title": "Set Matrix Zeroes",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Matrix",
      "freq": 82.2,
      "link": "https://leetcode.com/problems/set-matrix-zeroes"
    },
    {
      "title": "Reverse Words in a String",
      "difficulty": "Medium",
      "topic": "Two Pointers, String",
      "freq": 82.2,
      "link": "https://leetcode.com/problems/reverse-words-in-a-string"
    }
  ],
  "lenskart": [
    {
      "title": "Valid Number",
      "difficulty": "Hard",
      "topic": "String",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/valid-number"
    }
  ],
  "groww": [
    {
      "title": "Minimum Number of Operations to Make X and Y Equal",
      "difficulty": "Medium",
      "topic": "Dynamic Programming, Breadth-First Search, Memoization",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal"
    },
    {
      "title": "Maximize Score After N Operations",
      "difficulty": "Hard",
      "topic": "Array, Math, Dynamic Programming, Backtracking, Bit Manipulation, Number Theory, Bitmask",
      "freq": 96.9,
      "link": "https://leetcode.com/problems/maximize-score-after-n-operations"
    },
    {
      "title": "Best Time to Buy and Sell Stock",
      "difficulty": "Easy",
      "topic": "Array, Dynamic Programming",
      "freq": 83.9,
      "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock"
    },
    {
      "title": "Maximum Good Subarray Sum",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Prefix Sum",
      "freq": 77.2,
      "link": "https://leetcode.com/problems/maximum-good-subarray-sum"
    },
    {
      "title": "Maximum Length of a Concatenated String with Unique Characters",
      "difficulty": "Medium",
      "topic": "Array, String, Backtracking, Bit Manipulation",
      "freq": 77.2,
      "link": "https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters"
    },
    {
      "title": "Container With Most Water",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Greedy",
      "freq": 67.7,
      "link": "https://leetcode.com/problems/container-with-most-water"
    },
    {
      "title": "Best Time to Buy and Sell Stock II",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming, Greedy",
      "freq": 67.7,
      "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii"
    }
  ],
  "cred": [
    {
      "title": "Longest Repeating Character Replacement",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/longest-repeating-character-replacement"
    },
    {
      "title": "Count Elements With Maximum Frequency",
      "difficulty": "Easy",
      "topic": "Array, Hash Table, Counting",
      "freq": 89.2,
      "link": "https://leetcode.com/problems/count-elements-with-maximum-frequency"
    }
  ],
  "phonepe": [
    {
      "title": "Most Stones Removed with Same Row or Column",
      "difficulty": "Medium",
      "topic": "Hash Table, Depth-First Search, Union-Find, Graph Theory, Bipartite Graph",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column"
    },
    {
      "title": "Viewers Turned Streamers",
      "difficulty": "Hard",
      "topic": "Database",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/viewers-turned-streamers"
    },
    {
      "title": "Find Beautiful Indices in the Given Array II",
      "difficulty": "Hard",
      "topic": "Two Pointers, String, Binary Search, Rolling Hash, String Matching, Hash Function, Z Algorithm, Knuth\u2013Morris\u2013Pratt Algorithm, Boyer\u2013Moore String-Search Algorithm",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-ii"
    },
    {
      "title": "Count the Number of Arrays with K Matching Adjacent Elements",
      "difficulty": "Hard",
      "topic": "Math, Combinatorics, Fermat's Little Theorem",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/count-the-number-of-arrays-with-k-matching-adjacent-elements"
    },
    {
      "title": "Maximum Amount of Money Robot Can Earn",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming, Matrix",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/maximum-amount-of-money-robot-can-earn"
    },
    {
      "title": "Frequencies of Shortest Supersequences",
      "difficulty": "Hard",
      "topic": "Array, String, Bit Manipulation, Graph Theory, Topological Sort, Enumeration",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/frequencies-of-shortest-supersequences"
    },
    {
      "title": "Smallest Range Covering Elements from K Lists",
      "difficulty": "Hard",
      "topic": "Array, Hash Table, Greedy, Sliding Window, Sorting, Heap (Priority Queue)",
      "freq": 97.0,
      "link": "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists"
    },
    {
      "title": "Maximum Tastiness of Candy Basket",
      "difficulty": "Medium",
      "topic": "Array, Binary Search, Greedy, Sorting",
      "freq": 93.5,
      "link": "https://leetcode.com/problems/maximum-tastiness-of-candy-basket"
    },
    {
      "title": "Check if Point Is Reachable",
      "difficulty": "Hard",
      "topic": "Math, Number Theory, Euclidean Algorithm, Greatest Common Divisor",
      "freq": 93.5,
      "link": "https://leetcode.com/problems/check-if-point-is-reachable"
    },
    {
      "title": "Simple Bank System",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Design, Simulation",
      "freq": 93.5,
      "link": "https://leetcode.com/problems/simple-bank-system"
    },
    {
      "title": "Smallest String With Swaps",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Depth-First Search, Breadth-First Search, Union-Find, Sorting",
      "freq": 93.5,
      "link": "https://leetcode.com/problems/smallest-string-with-swaps"
    },
    {
      "title": "Longest Palindromic Substring",
      "difficulty": "Medium",
      "topic": "Two Pointers, String, Dynamic Programming, Manacher",
      "freq": 89.7,
      "link": "https://leetcode.com/problems/longest-palindromic-substring"
    }
  ],
  "dream11": [
    {
      "title": "Final Prices With a Special Discount in a Shop",
      "difficulty": "Easy",
      "topic": "Array, Stack, Monotonic Stack",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop"
    },
    {
      "title": "Asteroid Collision",
      "difficulty": "Medium",
      "topic": "Array, Stack, Simulation",
      "freq": 88.8,
      "link": "https://leetcode.com/problems/asteroid-collision"
    },
    {
      "title": "Gas Station",
      "difficulty": "Medium",
      "topic": "Array, Greedy",
      "freq": 76.7,
      "link": "https://leetcode.com/problems/gas-station"
    },
    {
      "title": "Minimum Falling Path Sum",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming, Matrix",
      "freq": 67.1,
      "link": "https://leetcode.com/problems/minimum-falling-path-sum"
    },
    {
      "title": "3Sum",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Sorting",
      "freq": 67.1,
      "link": "https://leetcode.com/problems/3sum"
    },
    {
      "title": "Number of Ways to Select Buildings",
      "difficulty": "Medium",
      "topic": "String, Dynamic Programming, Prefix Sum",
      "freq": 67.1,
      "link": "https://leetcode.com/problems/number-of-ways-to-select-buildings"
    },
    {
      "title": "Minimum Number of Increments on Subarrays to Form a Target Array",
      "difficulty": "Hard",
      "topic": "Array, Dynamic Programming, Stack, Greedy, Monotonic Stack",
      "freq": 67.1,
      "link": "https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array"
    },
    {
      "title": "Partition Equal Subset Sum",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming, Knapsack Problem, 0-1 Knapsack",
      "freq": 67.1,
      "link": "https://leetcode.com/problems/partition-equal-subset-sum"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 67.1,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    },
    {
      "title": "Rotting Oranges",
      "difficulty": "Medium",
      "topic": "Array, Breadth-First Search, Matrix",
      "freq": 67.1,
      "link": "https://leetcode.com/problems/rotting-oranges"
    },
    {
      "title": "3Sum Closest",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Sorting",
      "freq": 67.1,
      "link": "https://leetcode.com/problems/3sum-closest"
    },
    {
      "title": "Container With Most Water",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Greedy",
      "freq": 67.1,
      "link": "https://leetcode.com/problems/container-with-most-water"
    }
  ],
  "urbancompany": [
    {
      "title": "Pacific Atlantic Water Flow",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Matrix",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/pacific-atlantic-water-flow"
    },
    {
      "title": "Candy",
      "difficulty": "Hard",
      "topic": "Array, Greedy",
      "freq": 88.8,
      "link": "https://leetcode.com/problems/candy"
    },
    {
      "title": "Trapping Rain Water",
      "difficulty": "Hard",
      "topic": "Array, Two Pointers, Dynamic Programming, Stack, Monotonic Stack",
      "freq": 88.8,
      "link": "https://leetcode.com/problems/trapping-rain-water"
    },
    {
      "title": "Find Peak Element",
      "difficulty": "Medium",
      "topic": "Array, Binary Search",
      "freq": 88.8,
      "link": "https://leetcode.com/problems/find-peak-element"
    },
    {
      "title": "Minimum Deletions to Make String Balanced",
      "difficulty": "Medium",
      "topic": "String, Dynamic Programming, Stack",
      "freq": 88.8,
      "link": "https://leetcode.com/problems/minimum-deletions-to-make-string-balanced"
    },
    {
      "title": "Evaluate Division",
      "difficulty": "Medium",
      "topic": "Array, String, Depth-First Search, Breadth-First Search, Union-Find, Graph Theory, Shortest Path, Bellman\u2013Ford Algorithm, Floyd\u2013Warshall Algorithm",
      "freq": 88.8,
      "link": "https://leetcode.com/problems/evaluate-division"
    },
    {
      "title": "Frequency of the Most Frequent Element",
      "difficulty": "Medium",
      "topic": "Array, Binary Search, Greedy, Sliding Window, Sorting, Prefix Sum",
      "freq": 88.8,
      "link": "https://leetcode.com/problems/frequency-of-the-most-frequent-element"
    }
  ],
  "delhivery": [
    {
      "title": "Consecutive Numbers",
      "difficulty": "Medium",
      "topic": "Database",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/consecutive-numbers"
    },
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Maximum Product Subarray",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/maximum-product-subarray"
    },
    {
      "title": "Search in Rotated Sorted Array",
      "difficulty": "Medium",
      "topic": "Array, Binary Search",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/search-in-rotated-sorted-array"
    }
  ],
  "infoedge": [
    {
      "title": "Find the Maximum Factor Score of Array",
      "difficulty": "Medium",
      "topic": "Array, Math, Number Theory, Least Common Multiple",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/find-the-maximum-factor-score-of-array"
    },
    {
      "title": "Count Almost Equal Pairs I",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Sorting, Counting, Enumeration",
      "freq": 97.6,
      "link": "https://leetcode.com/problems/count-almost-equal-pairs-i"
    },
    {
      "title": "Find the Minimum and Maximum Number of Nodes Between Critical Points",
      "difficulty": "Medium",
      "topic": "Linked List",
      "freq": 94.8,
      "link": "https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points"
    },
    {
      "title": "Two Out of Three",
      "difficulty": "Easy",
      "topic": "Array, Hash Table, Bit Manipulation",
      "freq": 84.0,
      "link": "https://leetcode.com/problems/two-out-of-three"
    },
    {
      "title": "Bus Routes",
      "difficulty": "Hard",
      "topic": "Array, Hash Table, Breadth-First Search",
      "freq": 72.2,
      "link": "https://leetcode.com/problems/bus-routes"
    },
    {
      "title": "Subrectangle Queries",
      "difficulty": "Medium",
      "topic": "Array, Design, Matrix",
      "freq": 72.2,
      "link": "https://leetcode.com/problems/subrectangle-queries"
    },
    {
      "title": "Longest Palindromic Substring",
      "difficulty": "Medium",
      "topic": "Two Pointers, String, Dynamic Programming, Manacher",
      "freq": 62.9,
      "link": "https://leetcode.com/problems/longest-palindromic-substring"
    },
    {
      "title": "Sort Colors",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Sorting, Quicksort, Bubble Sort",
      "freq": 62.9,
      "link": "https://leetcode.com/problems/sort-colors"
    }
  ],
  "zepto": [
    {
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Quicksort",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/merge-intervals"
    },
    {
      "title": "Longest Univalue Path",
      "difficulty": "Medium",
      "topic": "Tree, Depth-First Search, Binary Tree, DP on Trees",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/longest-univalue-path"
    },
    {
      "title": "Longest Consecutive Sequence",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, Union-Find",
      "freq": 93.7,
      "link": "https://leetcode.com/problems/longest-consecutive-sequence"
    },
    {
      "title": "Minimum Cost For Tickets",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming",
      "freq": 93.7,
      "link": "https://leetcode.com/problems/minimum-cost-for-tickets"
    },
    {
      "title": "Koko Eating Bananas",
      "difficulty": "Medium",
      "topic": "Array, Binary Search",
      "freq": 85.7,
      "link": "https://leetcode.com/problems/koko-eating-bananas"
    },
    {
      "title": "Find Peak Element",
      "difficulty": "Medium",
      "topic": "Array, Binary Search",
      "freq": 85.7,
      "link": "https://leetcode.com/problems/find-peak-element"
    },
    {
      "title": "Maximum Width Ramp",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Stack, Monotonic Stack",
      "freq": 85.7,
      "link": "https://leetcode.com/problems/maximum-width-ramp"
    },
    {
      "title": "Sliding Window Maximum",
      "difficulty": "Hard",
      "topic": "Array, Queue, Sliding Window, Heap (Priority Queue), Monotonic Queue, Range Minimum/Maximum Query",
      "freq": 85.7,
      "link": "https://leetcode.com/problems/sliding-window-maximum"
    },
    {
      "title": "Car Pooling",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Heap (Priority Queue), Simulation, Prefix Sum",
      "freq": 74.3,
      "link": "https://leetcode.com/problems/car-pooling"
    },
    {
      "title": "Path Sum III",
      "difficulty": "Medium",
      "topic": "Tree, Depth-First Search, Binary Tree",
      "freq": 74.3,
      "link": "https://leetcode.com/problems/path-sum-iii"
    },
    {
      "title": "Find the Distance Value Between Two Arrays",
      "difficulty": "Easy",
      "topic": "Array, Two Pointers, Binary Search, Sorting",
      "freq": 74.3,
      "link": "https://leetcode.com/problems/find-the-distance-value-between-two-arrays"
    },
    {
      "title": "Make Array Empty",
      "difficulty": "Hard",
      "topic": "Array, Binary Search, Greedy, Binary Indexed Tree, Segment Tree, Sorting, Ordered Set",
      "freq": 74.3,
      "link": "https://leetcode.com/problems/make-array-empty"
    }
  ],
  "cognizant": [
    {
      "title": "Count Subarrays of Length Three With a Condition",
      "difficulty": "Easy",
      "topic": "Array",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/count-subarrays-of-length-three-with-a-condition"
    },
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 92.9,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Palindrome Number",
      "difficulty": "Easy",
      "topic": "Math",
      "freq": 92.9,
      "link": "https://leetcode.com/problems/palindrome-number"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 87.3,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    },
    {
      "title": "Smallest Value of the Rearranged Number",
      "difficulty": "Medium",
      "topic": "Math, Sorting",
      "freq": 79.9,
      "link": "https://leetcode.com/problems/smallest-value-of-the-rearranged-number"
    },
    {
      "title": "Longest Palindromic Substring",
      "difficulty": "Medium",
      "topic": "Two Pointers, String, Dynamic Programming, Manacher",
      "freq": 79.9,
      "link": "https://leetcode.com/problems/longest-palindromic-substring"
    },
    {
      "title": "Sort Array By Absolute Value",
      "difficulty": "Easy",
      "topic": "Array, Math, Two Pointers, Sorting",
      "freq": 79.9,
      "link": "https://leetcode.com/problems/sort-array-by-absolute-value"
    },
    {
      "title": "Fibonacci Number",
      "difficulty": "Easy",
      "topic": "Math, Dynamic Programming, Recursion, Memoization",
      "freq": 76.8,
      "link": "https://leetcode.com/problems/fibonacci-number"
    },
    {
      "title": "Second Highest Salary",
      "difficulty": "Medium",
      "topic": "Database",
      "freq": 76.8,
      "link": "https://leetcode.com/problems/second-highest-salary"
    },
    {
      "title": "Valid Anagram",
      "difficulty": "Easy",
      "topic": "Hash Table, String, Sorting",
      "freq": 73.2,
      "link": "https://leetcode.com/problems/valid-anagram"
    },
    {
      "title": "Merge Sorted Array",
      "difficulty": "Easy",
      "topic": "Array, Two Pointers, Sorting",
      "freq": 69.0,
      "link": "https://leetcode.com/problems/merge-sorted-array"
    },
    {
      "title": "Move Zeroes",
      "difficulty": "Easy",
      "topic": "Array, Two Pointers",
      "freq": 69.0,
      "link": "https://leetcode.com/problems/move-zeroes"
    }
  ],
  "capgemini": [
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Reverse Degree of a String",
      "difficulty": "Easy",
      "topic": "String, Simulation",
      "freq": 89.2,
      "link": "https://leetcode.com/problems/reverse-degree-of-a-string"
    },
    {
      "title": "Number of Unique Subjects Taught by Each Teacher",
      "difficulty": "Easy",
      "topic": "Database",
      "freq": 84.0,
      "link": "https://leetcode.com/problems/number-of-unique-subjects-taught-by-each-teacher"
    },
    {
      "title": "Move Zeroes",
      "difficulty": "Easy",
      "topic": "Array, Two Pointers",
      "freq": 73.2,
      "link": "https://leetcode.com/problems/move-zeroes"
    },
    {
      "title": "Remove Duplicates from Sorted Array",
      "difficulty": "Easy",
      "topic": "Array, Two Pointers",
      "freq": 68.0,
      "link": "https://leetcode.com/problems/remove-duplicates-from-sorted-array"
    },
    {
      "title": "Best Time to Buy and Sell Stock",
      "difficulty": "Easy",
      "topic": "Array, Dynamic Programming",
      "freq": 68.0,
      "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock"
    },
    {
      "title": "Rotate Array",
      "difficulty": "Medium",
      "topic": "Array, Math, Two Pointers",
      "freq": 68.0,
      "link": "https://leetcode.com/problems/rotate-array"
    },
    {
      "title": "Valid Anagram",
      "difficulty": "Easy",
      "topic": "Hash Table, String, Sorting",
      "freq": 68.0,
      "link": "https://leetcode.com/problems/valid-anagram"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 68.0,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    },
    {
      "title": "Contains Duplicate",
      "difficulty": "Easy",
      "topic": "Array, Hash Table, Sorting",
      "freq": 68.0,
      "link": "https://leetcode.com/problems/contains-duplicate"
    },
    {
      "title": "Palindrome Number",
      "difficulty": "Easy",
      "topic": "Math",
      "freq": 61.4,
      "link": "https://leetcode.com/problems/palindrome-number"
    },
    {
      "title": "Longest Common Prefix",
      "difficulty": "Easy",
      "topic": "Array, String, Trie",
      "freq": 61.4,
      "link": "https://leetcode.com/problems/longest-common-prefix"
    }
  ],
  "hcl": [
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "topic": "String, Stack, Bracket Sequences",
      "freq": 83.3,
      "link": "https://leetcode.com/problems/valid-parentheses"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 78.0,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    },
    {
      "title": "Merge Sorted Array",
      "difficulty": "Easy",
      "topic": "Array, Two Pointers, Sorting",
      "freq": 78.0,
      "link": "https://leetcode.com/problems/merge-sorted-array"
    },
    {
      "title": "Valid Palindrome",
      "difficulty": "Easy",
      "topic": "Two Pointers, String",
      "freq": 78.0,
      "link": "https://leetcode.com/problems/valid-palindrome"
    },
    {
      "title": "Best Time to Buy and Sell Stock",
      "difficulty": "Easy",
      "topic": "Array, Dynamic Programming",
      "freq": 71.1,
      "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock"
    },
    {
      "title": "Reverse String",
      "difficulty": "Easy",
      "topic": "Two Pointers, String",
      "freq": 61.4,
      "link": "https://leetcode.com/problems/reverse-string"
    },
    {
      "title": "Second Highest Salary",
      "difficulty": "Medium",
      "topic": "Database",
      "freq": 61.4,
      "link": "https://leetcode.com/problems/second-highest-salary"
    },
    {
      "title": "Department Top Three Salaries",
      "difficulty": "Hard",
      "topic": "Database",
      "freq": 61.4,
      "link": "https://leetcode.com/problems/department-top-three-salaries"
    },
    {
      "title": "Longest Palindromic Substring",
      "difficulty": "Medium",
      "topic": "Two Pointers, String, Dynamic Programming, Manacher",
      "freq": 61.4,
      "link": "https://leetcode.com/problems/longest-palindromic-substring"
    },
    {
      "title": "Palindromic Substrings",
      "difficulty": "Medium",
      "topic": "Two Pointers, String, Dynamic Programming",
      "freq": 61.4,
      "link": "https://leetcode.com/problems/palindromic-substrings"
    },
    {
      "title": "Reverse Words in a String",
      "difficulty": "Medium",
      "topic": "Two Pointers, String",
      "freq": 61.4,
      "link": "https://leetcode.com/problems/reverse-words-in-a-string"
    }
  ],
  "deloitte": [
    {
      "title": "Merge k Sorted Lists",
      "difficulty": "Hard",
      "topic": "Linked List, Divide and Conquer, Heap (Priority Queue), Merge Sort, Tournament Sort",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/merge-k-sorted-lists"
    },
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 98.6,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Change Null Values in a Table to the Previous Value",
      "difficulty": "Medium",
      "topic": "Database",
      "freq": 82.3,
      "link": "https://leetcode.com/problems/change-null-values-in-a-table-to-the-previous-value"
    },
    {
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "topic": "String, Stack, Bracket Sequences",
      "freq": 79.2,
      "link": "https://leetcode.com/problems/valid-parentheses"
    },
    {
      "title": "Second Highest Salary",
      "difficulty": "Medium",
      "topic": "Database",
      "freq": 79.2,
      "link": "https://leetcode.com/problems/second-highest-salary"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 79.2,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    },
    {
      "title": "Best Time to Buy and Sell Stock",
      "difficulty": "Easy",
      "topic": "Array, Dynamic Programming",
      "freq": 75.6,
      "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock"
    },
    {
      "title": "Longest Palindromic Substring",
      "difficulty": "Medium",
      "topic": "Two Pointers, String, Dynamic Programming, Manacher",
      "freq": 75.6,
      "link": "https://leetcode.com/problems/longest-palindromic-substring"
    },
    {
      "title": "Palindrome Number",
      "difficulty": "Easy",
      "topic": "Math",
      "freq": 71.3,
      "link": "https://leetcode.com/problems/palindrome-number"
    },
    {
      "title": "Longest Common Prefix",
      "difficulty": "Easy",
      "topic": "Array, String, Trie",
      "freq": 71.3,
      "link": "https://leetcode.com/problems/longest-common-prefix"
    },
    {
      "title": "Group Anagrams",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Sorting",
      "freq": 71.3,
      "link": "https://leetcode.com/problems/group-anagrams"
    },
    {
      "title": "Managers with at Least 5 Direct Reports",
      "difficulty": "Medium",
      "topic": "Database",
      "freq": 66.1,
      "link": "https://leetcode.com/problems/managers-with-at-least-5-direct-reports"
    }
  ],
  "ey": [
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Wiggle Sort II",
      "difficulty": "Medium",
      "topic": "Array, Divide and Conquer, Greedy, Sorting, Quickselect",
      "freq": 88.8,
      "link": "https://leetcode.com/problems/wiggle-sort-ii"
    }
  ],
  "pwc": [
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Longest Common Prefix",
      "difficulty": "Easy",
      "topic": "Array, String, Trie",
      "freq": 83.3,
      "link": "https://leetcode.com/problems/longest-common-prefix"
    },
    {
      "title": "Median of Two Sorted Arrays",
      "difficulty": "Hard",
      "topic": "Array, Binary Search, Divide and Conquer",
      "freq": 73.6,
      "link": "https://leetcode.com/problems/median-of-two-sorted-arrays"
    },
    {
      "title": "Roman to Integer",
      "difficulty": "Easy",
      "topic": "Hash Table, Math, String",
      "freq": 73.6,
      "link": "https://leetcode.com/problems/roman-to-integer"
    }
  ],
  "mckinsey": [
    {
      "title": "Maximal Score After Applying K Operations",
      "difficulty": "Medium",
      "topic": "Array, Greedy, Heap (Priority Queue)",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/maximal-score-after-applying-k-operations"
    },
    {
      "title": "Shortest Bridge",
      "difficulty": "Medium",
      "topic": "Array, Depth-First Search, Breadth-First Search, Matrix",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/shortest-bridge"
    }
  ],
  "thoughtworks": [
    {
      "title": "Number of Subarrays That Match a Pattern II",
      "difficulty": "Hard",
      "topic": "Array, Rolling Hash, String Matching, Hash Function",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-ii"
    },
    {
      "title": "Number of Bit Changes to Make Two Integers Equal",
      "difficulty": "Easy",
      "topic": "Bit Manipulation",
      "freq": 95.3,
      "link": "https://leetcode.com/problems/number-of-bit-changes-to-make-two-integers-equal"
    },
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 66.3,
      "link": "https://leetcode.com/problems/two-sum"
    }
  ],
  "publicissapient": [
    {
      "title": "Sum of Subsequence Widths",
      "difficulty": "Hard",
      "topic": "Array, Math, Sorting",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/sum-of-subsequence-widths"
    },
    {
      "title": "Longest Common Prefix",
      "difficulty": "Easy",
      "topic": "Array, String, Trie",
      "freq": 76.9,
      "link": "https://leetcode.com/problems/longest-common-prefix"
    },
    {
      "title": "Minimum Sideway Jumps",
      "difficulty": "Medium",
      "topic": "Array, Dynamic Programming, Greedy",
      "freq": 76.9,
      "link": "https://leetcode.com/problems/minimum-sideway-jumps"
    },
    {
      "title": "Group Anagrams",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Sorting",
      "freq": 67.4,
      "link": "https://leetcode.com/problems/group-anagrams"
    },
    {
      "title": "Trapping Rain Water",
      "difficulty": "Hard",
      "topic": "Array, Two Pointers, Dynamic Programming, Stack, Monotonic Stack",
      "freq": 67.4,
      "link": "https://leetcode.com/problems/trapping-rain-water"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 67.4,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    },
    {
      "title": "Longest Repeating Character Replacement",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 67.4,
      "link": "https://leetcode.com/problems/longest-repeating-character-replacement"
    },
    {
      "title": "Container With Most Water",
      "difficulty": "Medium",
      "topic": "Array, Two Pointers, Greedy",
      "freq": 67.4,
      "link": "https://leetcode.com/problems/container-with-most-water"
    },
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 67.4,
      "link": "https://leetcode.com/problems/two-sum"
    }
  ],
  "zoho": [
    {
      "title": "Decode String",
      "difficulty": "Medium",
      "topic": "String, Stack, Recursion",
      "freq": 100.0,
      "link": "https://leetcode.com/problems/decode-string"
    },
    {
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topic": "Hash Table, String, Sliding Window",
      "freq": 97.8,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
    },
    {
      "title": "Spiral Matrix",
      "difficulty": "Medium",
      "topic": "Array, Matrix, Simulation",
      "freq": 97.8,
      "link": "https://leetcode.com/problems/spiral-matrix"
    },
    {
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topic": "Array, Sorting, Quicksort",
      "freq": 92.9,
      "link": "https://leetcode.com/problems/merge-intervals"
    },
    {
      "title": "Two Sum",
      "difficulty": "Easy",
      "topic": "Array, Hash Table",
      "freq": 89.9,
      "link": "https://leetcode.com/problems/two-sum"
    },
    {
      "title": "Best Time to Buy and Sell Stock",
      "difficulty": "Easy",
      "topic": "Array, Dynamic Programming",
      "freq": 89.9,
      "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock"
    },
    {
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "topic": "String, Stack, Bracket Sequences",
      "freq": 88.3,
      "link": "https://leetcode.com/problems/valid-parentheses"
    },
    {
      "title": "Group Anagrams",
      "difficulty": "Medium",
      "topic": "Array, Hash Table, String, Sorting",
      "freq": 88.3,
      "link": "https://leetcode.com/problems/group-anagrams"
    },
    {
      "title": "Trapping Rain Water",
      "difficulty": "Hard",
      "topic": "Array, Two Pointers, Dynamic Programming, Stack, Monotonic Stack",
      "freq": 86.6,
      "link": "https://leetcode.com/problems/trapping-rain-water"
    },
    {
      "title": "Longest Palindromic Substring",
      "difficulty": "Medium",
      "topic": "Two Pointers, String, Dynamic Programming, Manacher",
      "freq": 82.8,
      "link": "https://leetcode.com/problems/longest-palindromic-substring"
    },
    {
      "title": "Largest Number",
      "difficulty": "Medium",
      "topic": "Array, String, Greedy, Sorting",
      "freq": 82.8,
      "link": "https://leetcode.com/problems/largest-number"
    },
    {
      "title": "Daily Temperatures",
      "difficulty": "Medium",
      "topic": "Array, Stack, Monotonic Stack",
      "freq": 82.8,
      "link": "https://leetcode.com/problems/daily-temperatures"
    }
  ]
};