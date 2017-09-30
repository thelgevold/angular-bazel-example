
import { Cmp8741Component } from './cmp';
describe('Cmp8741Component', () => {
  it('should add', () => {
    expect(new Cmp8741Component().add8741(1)).toBe(8742);
  });
});