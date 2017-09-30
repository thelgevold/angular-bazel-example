
import { Cmp8675Component } from './cmp';
describe('Cmp8675Component', () => {
  it('should add', () => {
    expect(new Cmp8675Component().add8675(1)).toBe(8676);
  });
});