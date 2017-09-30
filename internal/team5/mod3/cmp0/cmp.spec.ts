
import { Cmp8530Component } from './cmp';
describe('Cmp8530Component', () => {
  it('should add', () => {
    expect(new Cmp8530Component().add8530(1)).toBe(8531);
  });
});