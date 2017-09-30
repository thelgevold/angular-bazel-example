
import { Cmp8770Component } from './cmp';
describe('Cmp8770Component', () => {
  it('should add', () => {
    expect(new Cmp8770Component().add8770(1)).toBe(8771);
  });
});