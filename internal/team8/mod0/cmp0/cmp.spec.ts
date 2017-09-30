
import { Cmp8800Component } from './cmp';
describe('Cmp8800Component', () => {
  it('should add', () => {
    expect(new Cmp8800Component().add8800(1)).toBe(8801);
  });
});