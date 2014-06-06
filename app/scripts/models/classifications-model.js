'use strict';

angular.module('hacktagApp')
  .value('classifications', [
    {
      name: "Office-Based", //b
      classifications: "6251,6317,1216,6076,1210",
      size: "large",
      style: "top: 100px;left: 400px",
    },
    {
      name: "Number Crunching", //m
      classifications: "1200,1203,1214",
      size: "medium",
      style: "top: 427px;left:320px"
    },
    {
      name: "Labour", //m
      classifications: "1206,1225,6058,6092",
      size: "medium",
      style: "top: 356px;left:508px"
    },
    {
      name: "Creative", //s
      classifications: "6008,6304,6263",
      size: "small",
      style: "top: 346px;left:405px"
    },
    {
      name: "Technical", //m
      classifications: "6281,1223,1209",
      style: "top: 22px;left:70px"
    },
    {
      name: "Helping Others", //m
      classifications: "1211,6163",
      style: "top: 129px;left:754px"
    },
    {
      name: "Fitness", //s
      classifications: "6246",
      size: "small",
      style: "top: 172px;left:662px"
    },
    {
      name: "Working Outdoors", //m
      size: "medium",
      classifications: "1206,6205",
      style: "top: 266px;left:634px"
    },
    {
      name: "Telephone Calling", //m
      classifications: "1203",
      size: "medium",
      style: "top: 21px;left:613px"
    },
    {
      name: "Customer-Facing", //b
      classifications: "1204,1212,6043",
      size: "large",
      style: "top: 195px;left:154px"
    },
    {
      name: "Selling", //m
      size: "medium",
      classifications: "1220,6362",
      style: "top: 50px;left:273px"
    },
    {
      name: "Teaching", //s
      size: "small",
      classifications: "6123",
      style: "top: 22px;left:412px"
    }
  ]

  );