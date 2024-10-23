export interface Hotel {
  id: number;
  name: string;
  state: string;
  stars: number;
  pricePerNight: number;
}

const hotels: Hotel[] = [
  { id: 1, name: "Ocean View Hotel", state: "California", stars: 4, pricePerNight: 200 },
  { id: 2, name: "Mountain Retreat", state: "Colorado", stars: 5, pricePerNight: 300 },
  { id: 3, name: "Beachside Inn", state: "Florida", stars: 3, pricePerNight: 180 },
  { id: 4, name: "Urban Oasis", state: "New York", stars: 5, pricePerNight: 400 },
  { id: 5, name: "Lakeside Lodge", state: "Minnesota", stars: 4, pricePerNight: 220 },
  { id: 6, name: "Desert Sun Resort", state: "Arizona", stars: 3, pricePerNight: 150 },
  { id: 7, name: "Southern Comfort Inn", state: "Georgia", stars: 4, pricePerNight: 180 },
  { id: 8, name: "Hilltop Haven", state: "Tennessee", stars: 3, pricePerNight: 170 },
  { id: 9, name: "Liberty Hotel", state: "Massachusetts", stars: 5, pricePerNight: 350 },
  { id: 10, name: "Great Plains Inn", state: "Nebraska", stars: 3, pricePerNight: 140 },
  { id: 11, name: "Golden Gate Hotel", state: "Nevada", stars: 4, pricePerNight: 250 },
  { id: 12, name: "Windy City Inn", state: "Illinois", stars: 4, pricePerNight: 220 },
  { id: 13, name: "Bayou Bliss Hotel", state: "Louisiana", stars: 4, pricePerNight: 200 },
  { id: 14, name: "Music City Lodge", state: "Tennessee", stars: 5, pricePerNight: 270 },
  { id: 15, name: "Lone Star Hotel", state: "Texas", stars: 4, pricePerNight: 230 },
  { id: 16, name: "Evergreen Hotel", state: "Washington", stars: 3, pricePerNight: 160 },
  { id: 17, name: "Blue Ridge Retreat", state: "North Carolina", stars: 4, pricePerNight: 190 },
  { id: 18, name: "Capitol City Inn", state: "Washington D.C.", stars: 5, pricePerNight: 400 },
  { id: 19, name: "Alamo Hotel", state: "Texas", stars: 4, pricePerNight: 210 },
  { id: 20, name: "Sunset Motel", state: "Nevada", stars: 2, pricePerNight: 100 },
  { id: 21, name: "Ozark Oasis", state: "Arkansas", stars: 3, pricePerNight: 170 },
  { id: 22, name: "Pine Tree Lodge", state: "Maine", stars: 4, pricePerNight: 220 },
  { id: 23, name: "Prairie Inn", state: "Kansas", stars: 3, pricePerNight: 150 },
  { id: 24, name: "Bourbon Street Hotel", state: "Louisiana", stars: 5, pricePerNight: 350 },
  { id: 25, name: "Great Lakes Inn", state: "Michigan", stars: 4, pricePerNight: 200 },
  { id: 26, name: "Rocky Mountain Lodge", state: "Montana", stars: 3, pricePerNight: 180 },
  { id: 27, name: "The Cornhusker Hotel", state: "Nebraska", stars: 4, pricePerNight: 190 },
  { id: 28, name: "Peach State Inn", state: "Georgia", stars: 3, pricePerNight: 170 },
  { id: 29, name: "Cactus Flower Hotel", state: "New Mexico", stars: 4, pricePerNight: 180 },
  { id: 30, name: "Empire State Hotel", state: "New York", stars: 5, pricePerNight: 450 },
  { id: 31, name: "Grand Canyon Lodge", state: "Arizona", stars: 5, pricePerNight: 320 },
  { id: 32, name: "Liberty Bell Hotel", state: "Pennsylvania", stars: 4, pricePerNight: 240 },
  { id: 33, name: "Show Me State Inn", state: "Missouri", stars: 3, pricePerNight: 150 },
  { id: 34, name: "Hoosier Hotel", state: "Indiana", stars: 4, pricePerNight: 200 },
  { id: 35, name: "The Buckeye Inn", state: "Ohio", stars: 3, pricePerNight: 160 },
  { id: 36, name: "Green Mountain Lodge", state: "Vermont", stars: 4, pricePerNight: 220 },
  { id: 37, name: "Wild West Hotel", state: "Wyoming", stars: 3, pricePerNight: 180 },
  { id: 38, name: "The Sunflower Hotel", state: "Kansas", stars: 4, pricePerNight: 200 },
  { id: 39, name: "Cheesehead Lodge", state: "Wisconsin", stars: 3, pricePerNight: 150 },
  { id: 40, name: "Tar Heel Hotel", state: "North Carolina", stars: 4, pricePerNight: 230 },
  { id: 41, name: "The Hoosier Hotel", state: "Indiana", stars: 4, pricePerNight: 180 },
  { id: 42, name: "The Gem State Inn", state: "Idaho", stars: 3, pricePerNight: 160 },
  { id: 43, name: "The Palmetto Hotel", state: "South Carolina", stars: 4, pricePerNight: 220 },
  { id: 44, name: "Bluegrass Hotel", state: "Kentucky", stars: 4, pricePerNight: 200 },
  { id: 45, name: "Mardi Gras Lodge", state: "Louisiana", stars: 5, pricePerNight: 320 },
  { id: 46, name: "Hawkeye Inn", state: "Iowa", stars: 3, pricePerNight: 140 },
  { id: 47, name: "The Evergreen Hotel", state: "Oregon", stars: 4, pricePerNight: 200 },
  { id: 48, name: "Show Me Lodge", state: "Missouri", stars: 3, pricePerNight: 170 },
  { id: 49, name: "Land of Lincoln Hotel", state: "Illinois", stars: 4, pricePerNight: 210 },
  { id: 50, name: "Mile High Inn", state: "Colorado", stars: 5, pricePerNight: 300 },
];

export default hotels;
