
import { Cmp8349Component } from './cmp';
describe('Cmp8349Component', () => {
  it('should add', () => {
    expect(new Cmp8349Component().add8349(1)).toBe(8350);
  });
});