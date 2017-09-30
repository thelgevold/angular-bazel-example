
import { Cmp8550Component } from './cmp';
describe('Cmp8550Component', () => {
  it('should add', () => {
    expect(new Cmp8550Component().add8550(1)).toBe(8551);
  });
});