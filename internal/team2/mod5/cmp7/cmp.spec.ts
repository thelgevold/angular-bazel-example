
import { Cmp8257Component } from './cmp';
describe('Cmp8257Component', () => {
  it('should add', () => {
    expect(new Cmp8257Component().add8257(1)).toBe(8258);
  });
});