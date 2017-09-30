
import { Cmp8874Component } from './cmp';
describe('Cmp8874Component', () => {
  it('should add', () => {
    expect(new Cmp8874Component().add8874(1)).toBe(8875);
  });
});