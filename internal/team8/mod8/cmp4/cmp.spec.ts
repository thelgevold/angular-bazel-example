
import { Cmp8884Component } from './cmp';
describe('Cmp8884Component', () => {
  it('should add', () => {
    expect(new Cmp8884Component().add8884(1)).toBe(8885);
  });
});