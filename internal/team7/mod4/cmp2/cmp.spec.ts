
import { Cmp8742Component } from './cmp';
describe('Cmp8742Component', () => {
  it('should add', () => {
    expect(new Cmp8742Component().add8742(1)).toBe(8743);
  });
});