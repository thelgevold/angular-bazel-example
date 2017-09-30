
import { Cmp8790Component } from './cmp';
describe('Cmp8790Component', () => {
  it('should add', () => {
    expect(new Cmp8790Component().add8790(1)).toBe(8791);
  });
});