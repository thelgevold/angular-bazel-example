
import { Cmp8872Component } from './cmp';
describe('Cmp8872Component', () => {
  it('should add', () => {
    expect(new Cmp8872Component().add8872(1)).toBe(8873);
  });
});