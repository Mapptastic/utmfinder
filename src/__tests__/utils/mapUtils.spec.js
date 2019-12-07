import { findUTMZone } from '../../utils/mapUtils'

let Berlin;
const BerlinZone = '33 N';
let SaoPaulo;
const SaoPauoloZone = '23 S';

describe('mapUtils', () => {
  beforeEach(() => {
    Berlin = { lng: 13.404954, lat: 52.520007 }
    SaoPaulo = { lng: -46.633309, lat: -23.55052 }
  })
  it(`should return ${BerlinZone} for Berlin`, () => {
    const { lng, lat } = Berlin;
    expect(findUTMZone(lng, lat)).toEqual(BerlinZone);
  });

  it(`should return ${SaoPaulo} for SaoPaulo`, () => {
    const { lng, lat } = SaoPaulo;
    expect(findUTMZone(lng, lat)).toEqual(SaoPauoloZone);
  });
});