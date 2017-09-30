
import { Cmp8046Component } from './cmp';
describe('Cmp8046Component', () => {
  it('should add', () => {
    expect(new Cmp8046Component().add8046(1)).toBe(8047);
  });
});