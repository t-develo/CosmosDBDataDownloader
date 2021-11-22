"use strict";
const cosmosDefaultProperty = ["_rid", "_self", "_etag", "_attachments", "_ts"];

// testData
const cosmosDataList = [
  { id: 123, name: "hoge", enableData: true, _rid: 12345 },
  { id: 456, name: "fuga", enableData: false, _rid: 12345, _etag: 123456789 },
  {
    id: 789,
    name: "piyo",
    enableData: false,
    _rid: 12345,
    _self: "test",
    _etag: 123456789,
    _attachments: true,
    _ts: 1234567890,
  },
];

console.log(cosmosDataList);
const fixedCosmosDataList = cosmosDataList.map((data) => {
  const dataKeys = Object.keys(data);
  const fixedKeys = dataKeys.filter(
    (key) => !cosmosDefaultProperty.includes(key)
  );
  const fixedData = {};
  fixedKeys.forEach((key) => {
    fixedData[key] = data[key];
  });
  return fixedData;
});
console.log(fixedCosmosDataList);
