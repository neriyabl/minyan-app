const types = {
  shachrit: "שחרית",
  mincha: "מינחה",
  arvit: "ערבית",
};

export const prayers = [
  {
    _id: 1,
    type: types.shachrit,
    name: "משפחת כהן",
    location: { lat: 1, long: 1 },
    address: "מעלה מכמש, סלעית 1",
    time: "6:30",
  },
  {
    _id: 2,
    type: types.shachrit,
    name: "משפחת דוד",
    location: { lat: 2, long: 2 },
    address: "מצפה יריחו, תרשיש 1",
    time: "8:30",
  },
];
