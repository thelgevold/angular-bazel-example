
import { Cmp9818Component } from './cmp';
describe('Cmp9818Component', () => {
  it('should add', () => {
    expect(new Cmp9818Component().add9818(1)).toBe(9819);
  });
});