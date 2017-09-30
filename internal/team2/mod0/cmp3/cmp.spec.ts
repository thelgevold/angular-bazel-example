
import { Cmp8203Component } from './cmp';
describe('Cmp8203Component', () => {
  it('should add', () => {
    expect(new Cmp8203Component().add8203(1)).toBe(8204);
  });
});