const findUTMZone = (lng, lat) => {
  const zone = Math.floor((lng + 180) / 6 + 1);
  const area = lat > 0 ? 'N' : 'S'
  return `${zone} ${area}`
}

export { findUTMZone }