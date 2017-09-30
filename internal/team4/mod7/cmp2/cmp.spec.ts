
import { Cmp8472Component } from './cmp';
describe('Cmp8472Component', () => {
  it('should add', () => {
    expect(new Cmp8472Component().add8472(1)).toBe(8473);
  });
});