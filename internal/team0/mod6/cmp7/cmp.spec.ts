
import { Cmp8067Component } from './cmp';
describe('Cmp8067Component', () => {
  it('should add', () => {
    expect(new Cmp8067Component().add8067(1)).toBe(8068);
  });
});