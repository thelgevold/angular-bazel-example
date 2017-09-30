
import { Cmp8527Component } from './cmp';
describe('Cmp8527Component', () => {
  it('should add', () => {
    expect(new Cmp8527Component().add8527(1)).toBe(8528);
  });
});