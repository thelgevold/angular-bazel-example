
import { Cmp8772Component } from './cmp';
describe('Cmp8772Component', () => {
  it('should add', () => {
    expect(new Cmp8772Component().add8772(1)).toBe(8773);
  });
});