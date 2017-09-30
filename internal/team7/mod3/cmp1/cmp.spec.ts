
import { Cmp8731Component } from './cmp';
describe('Cmp8731Component', () => {
  it('should add', () => {
    expect(new Cmp8731Component().add8731(1)).toBe(8732);
  });
});