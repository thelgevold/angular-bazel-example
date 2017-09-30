
import { Cmp8041Component } from './cmp';
describe('Cmp8041Component', () => {
  it('should add', () => {
    expect(new Cmp8041Component().add8041(1)).toBe(8042);
  });
});