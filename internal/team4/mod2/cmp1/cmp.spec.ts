
import { Cmp8421Component } from './cmp';
describe('Cmp8421Component', () => {
  it('should add', () => {
    expect(new Cmp8421Component().add8421(1)).toBe(8422);
  });
});