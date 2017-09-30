
import { Cmp8822Component } from './cmp';
describe('Cmp8822Component', () => {
  it('should add', () => {
    expect(new Cmp8822Component().add8822(1)).toBe(8823);
  });
});