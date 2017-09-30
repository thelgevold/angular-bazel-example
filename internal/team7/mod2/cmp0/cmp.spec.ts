
import { Cmp8720Component } from './cmp';
describe('Cmp8720Component', () => {
  it('should add', () => {
    expect(new Cmp8720Component().add8720(1)).toBe(8721);
  });
});