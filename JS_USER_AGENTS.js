const USER_AGENTS = [
  "jdapp;iPhone;10.0.2;13.2;1b1a1809fa9e106d9b5ef4524b613415d41d8cd9;network/wifi;ADID/04511257-BC65-0EBA-20AA-F795DDCF68D9;model/iPhone9,2;addressid/2380459069;appBuild/167694;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;10.0.1;14.1;a617c6c2f643fe4079f09cd40a113663d41d8cd9;network/wifi;ADID/97E52A87-5038-ED61-9D16-15D64BF08265;model/iPhone9,2;addressid/1225041223;appBuild/167694;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;10.0.0;14.2;9650f4c1e3e737af2ea9ee74eceed75fd41d8cd9;network/wifi;ADID/74BDB274-82DE-BAC3-F176-0B9A65869BEF;model/iPhone9,2;addressid/2079115932;appBuild/167694;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;10.0.2;14.1;a97a4c98db524c570eac56300d5b939cd41d8cd9;network/wifi;ADID/647DDD72-9072-E8D4-3191-522581450A16;model/iPhone9,2;addressid/6829370984;appBuild/167694;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;10.0.1;14.2;bb0a06f01f1aa3fe0c9e47acc21adbdbd41d8cd9;network/wifi;ADID/F7F497D9-7D51-3DF7-6B1E-88517A3EFF26;model/iPhone9,2;addressid/5970651131;appBuild/167694;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;10.0.0;13.5;05ae28270625e903821c9cfe168dc9f1d41d8cd9;network/wifi;ADID/BEFF8BF6-A865-05A0-7B3B-EB29E3D7DA75;model/iPhone9,2;addressid/1886078637;appBuild/167694;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;10.0.0;14.1;cd1a2018e908f73002d73a0fe1edfb24d41d8cd9;network/wifi;ADID/01A22DF8-4028-A71E-A5A0-9B4510EB715F;model/iPhone9,2;addressid/1985588739;appBuild/167694;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
 ]
/**
 * 生成随机数字
 * @param {number} min 最小值（包含）
 * @param {number} max 最大值（不包含）
 */
function randomNumber(min = 0, max = 100) {
  return Math.min(Math.floor(min + Math.random() * (max - min)), max);
}
const USER_AGENT = USER_AGENTS[randomNumber(0, USER_AGENTS.length)];

module.exports = {
  USER_AGENT
}
