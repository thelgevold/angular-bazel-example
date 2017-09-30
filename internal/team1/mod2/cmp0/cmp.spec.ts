
import { Cmp8120Component } from './cmp';
describe('Cmp8120Component', () => {
  it('should add', () => {
    expect(new Cmp8120Component().add8120(1)).toBe(8121);
  });
});