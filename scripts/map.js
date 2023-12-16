function GetMap() {
  let map = new Microsoft.Maps.Map("#myMap");
  let pinCords = new Microsoft.Maps.Location(50.4501, 30.5234);
  let marker = new Microsoft.Maps.Pushpin(pinCords);
  map.entities.push(marker);
}
