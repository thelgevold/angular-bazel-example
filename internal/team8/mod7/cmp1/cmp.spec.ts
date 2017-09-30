
import { Cmp8871Component } from './cmp';
describe('Cmp8871Component', () => {
  it('should add', () => {
    expect(new Cmp8871Component().add8871(1)).toBe(8872);
  });
});