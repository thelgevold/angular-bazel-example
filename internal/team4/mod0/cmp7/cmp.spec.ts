
import { Cmp8407Component } from './cmp';
describe('Cmp8407Component', () => {
  it('should add', () => {
    expect(new Cmp8407Component().add8407(1)).toBe(8408);
  });
});