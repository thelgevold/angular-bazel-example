
import { Cmp8104Component } from './cmp';
describe('Cmp8104Component', () => {
  it('should add', () => {
    expect(new Cmp8104Component().add8104(1)).toBe(8105);
  });
});