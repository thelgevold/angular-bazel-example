
import { Cmp8413Component } from './cmp';
describe('Cmp8413Component', () => {
  it('should add', () => {
    expect(new Cmp8413Component().add8413(1)).toBe(8414);
  });
});