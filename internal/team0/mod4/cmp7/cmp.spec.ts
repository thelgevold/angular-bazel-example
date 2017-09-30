
import { Cmp8047Component } from './cmp';
describe('Cmp8047Component', () => {
  it('should add', () => {
    expect(new Cmp8047Component().add8047(1)).toBe(8048);
  });
});