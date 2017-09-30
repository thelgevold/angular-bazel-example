
import { Cmp1625Component } from './cmp';
describe('Cmp1625Component', () => {
  it('should add', () => {
    expect(new Cmp1625Component().add1625(1)).toBe(1626);
  });
});