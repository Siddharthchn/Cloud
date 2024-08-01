// src/dashboardCardData.js
import { FaCheck } from 'react-icons/fa';
import { FaBasketShopping, FaBagShopping, FaMoneyBillTrendUp, FaCaretUp, FaCaretDown } from 'react-icons/fa6';

export const dashboardCardData = [
  {
    title: "Total Orders",
    value: "75",
    rate: "3",
    rateArrow: FaCaretUp,
    rateArrowColor: "#0E8262",
    icon: FaBasketShopping,
    color: "#283367",
    iconColor: "#3E61FC",
    subColor: "#6882FB",
    subColorIcon: "+"
  },
  {
    title: "Total Delivered",
    value: "70",
    rate: "3",
    rateArrow: FaCaretDown,
    rateArrowColor: "#BD4A4A",
    icon: FaBagShopping,
    color: "#165246",
    iconColor: "#00C98D",
    subColor: "#75E2C2 ",
    subColorIcon: "✓"
  },
  {
    title: "Total Cancelled",
    value: "05",
    rate: "3",
    rateArrow: FaCaretUp,
    rateArrowColor: "#0E8262",
    icon: FaBagShopping,
    color: "#603337",
    iconColor: "#F25E5E",
    subColor: "#FF9998",
    subColorIcon: "✕"
  },
  {
    title: "Total Revenue",
    value: "$12k",
    rate: "3",
    rateArrow: FaCaretDown,
    rateArrowColor: "#BD4A4A",
    icon: FaMoneyBillTrendUp,
    color: "#5C2B4B",
    iconColor: "#EB40A1",
    subColor: "",
    subColorIcon: ""
  }
];
