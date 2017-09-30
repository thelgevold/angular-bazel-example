
import { Cmp8177Component } from './cmp';
describe('Cmp8177Component', () => {
  it('should add', () => {
    expect(new Cmp8177Component().add8177(1)).toBe(8178);
  });
});