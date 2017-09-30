
import { Cmp8546Component } from './cmp';
describe('Cmp8546Component', () => {
  it('should add', () => {
    expect(new Cmp8546Component().add8546(1)).toBe(8547);
  });
});