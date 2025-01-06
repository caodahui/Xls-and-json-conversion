const fs = require('fs')
const json2xls = require('json2xls');

const array = [
    {
        "path": "/",
        "name": "Home",
        "meta": {}
    },
    {
        "path": "/register",
        "name": "Register",
        "meta": {
            "footer": true
        }
    },
    {
        "path": "/login",
        "name": "Login",
        "meta": {
            "footer": true
        }
    },
    {
        "path": "/appTgPage",
        "name": "AppTgPage",
        "meta": {
            "footer": true
        }
    },
    {
        "path": "/app/downLoad",
        "name": "DownLoad",
        "meta": {
            "footer": true
        }
    },
    {
        "path": "/app/downLoad/ioslocal",
        "name": "DownloadIosLocal",
        "meta": {
            "footer": true
        }
    },
    {
        "path": "/app/iosDownLoad",
        "name": "IosDownLoad",
        "meta": {
            "footer": true
        }
    },
    {
        "path": "/app/GoogleAuthenticator",
        "name": "GoogleAuthenticator",
        "meta": {
            "footer": true
        }
    },
    {
        "path": "/region",
        "name": "Region",
        "meta": {
            "footer": true
        }
    },
    {
        "path": "/app/downLoad/downloadStep",
        "name": "DownloadStep",
        "meta": {
            "footer": true
        }
    },
    {
        "path": "/app/downLoad/storeRegister",
        "name": "StoreRegister",
        "meta": {
            "footer": true
        }
    },
    {
        "path": "/app/downLoad/taobaoBuy",
        "name": "TaobaoBuy",
        "meta": {
            "footer": true
        }
    },
    {
        "path": "/app/downLoad/androidQuestion",
        "name": "AndroidQuestion",
        "meta": {
            "footer": true
        }
    },
    {
        "path": "/c2c/trade/creditCard",
        "name": "CreditCard",
        "meta": {
            "footer": true
        }
    },
    {
        "path": "/c2c/trade/CreditCardOrder",
        "name": "creditCardRecord",
        "meta": {
            "footer": true
        }
    },
    {
        "path": "/c2c/trade/simplex",
        "name": "Simplex",
        "meta": {
            "footer": true
        }
    },
    {
        "path": "/c2c/trade/coinify",
        "name": "CoinFy",
        "meta": {
            "footer": true
        }
    },
    {
        "path": "/c2c/trade/pexpay",
        "name": "PexPay",
        "meta": {
            "footer": true
        }
    },
    {
        "path": "/c2c/trade/alchemypay",
        "name": "AlchemyPay",
        "meta": {
            "footer": true
        }
    },
    {
        "path": "/c2c/trade/goAppOrder/success",
        "name": "goAppOrderSuccess",
        "meta": {
            "footer": true
        }
    },
    {
        "path": "/c2c/trade/goAppOrder/failed",
        "name": "goAppOrderFailed",
        "meta": {
            "footer": true
        }
    },
    {
        "path": "/c2c/trade/coiniFyVerifiedResult",
        "name": "CoinFyVerifiedResult",
        "meta": {
            "footer": true
        }
    },
    {
        "path": "/activity/swapTrade/index",
        "name": "SwapTradingCompetitionIndex",
        "meta": {
            "footer": true
        }
    },
    {
        "path": "/support/index",
        "name": "Support",
        "meta": {
            "footer": true
        }
    },
    {
        "path": "/support/nav",
        "name": "HelpNav",
        "meta": {
            "footer": true
        }
    },
    {
        "path": "/support/search",
        "name": "HelpSearch",
        "meta": {
            "footer": true
        }
    },
    {
        "path": "/support/article",
        "name": "HelpArticle",
        "meta": {
            "footer": true
        }
    },
    {
        "path": "/support/announcement",
        "name": "AnnouncementCenter",
        "meta": {
            "footer": true
        }
    },
    {
        "path": "/support/announcement/latest",
        "name": "AnnouncementLatest",
        "meta": {
            "footer": true
        }
    },
    {
        "path": "/support/verify/officialChannel",
        "name": "VerifyOfficialChannel",
        "meta": {
            "footer": true
        }
    },
    {
        "path": "/activity/fifthAnniversary",
        "name": "FifthAnniversaryHome",
        "meta": {
            "footer": true
        }
    },
    {
        "path": "/activity/fifthAnniversary/detail",
        "name": "FifthAnniversaryDetail",
        "meta": {
            "footer": true
        }
    },
    {
        "path": "/learn/index",
        "name": "Learn",
        "meta": {
            "footer": true
        }
    },
    {
        "path": "/learn/list",
        "name": "MoreList",
        "meta": {
            "footer": true
        }
    },
    {
        "path": "/learn/article",
        "name": "LearnArticle",
        "meta": {
            "footer": true
        }
    },
    {
        "path": "/vip/service",
        "name": "VipIndex",
        "meta": {
            "footer": true
        }
    },
    {
        "path": "/vip/application",
        "name": "VipApplication",
        "meta": {
            "footer": true
        }
    },
    {
        "path": "/rateStandard/index",
        "name": "RateStandardIndex",
        "meta": {
            "footer": true
        }
    }
]

function extractNamesWithParents(arr, parentName = '', result = []) {
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        const fullName = parentName ? `${parentName}/${item.path}` : item.path;
        result.push({
            '': '',
            'web': fullName
        });
        if (item.children) {
            extractNamesWithParents(item.children, fullName, result);
        }
    }
    return result;
}

const jsonArray = extractNamesWithParents(array)

const xls = json2xls(jsonArray);
fs.writeFileSync('./dist/router.xlsx', xls, 'binary');
