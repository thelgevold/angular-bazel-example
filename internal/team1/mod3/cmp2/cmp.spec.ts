
import { Cmp8132Component } from './cmp';
describe('Cmp8132Component', () => {
  it('should add', () => {
    expect(new Cmp8132Component().add8132(1)).toBe(8133);
  });
});