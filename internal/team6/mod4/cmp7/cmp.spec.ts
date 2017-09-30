
import { Cmp8647Component } from './cmp';
describe('Cmp8647Component', () => {
  it('should add', () => {
    expect(new Cmp8647Component().add8647(1)).toBe(8648);
  });
});