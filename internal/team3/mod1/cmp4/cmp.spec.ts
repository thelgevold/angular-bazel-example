
import { Cmp8314Component } from './cmp';
describe('Cmp8314Component', () => {
  it('should add', () => {
    expect(new Cmp8314Component().add8314(1)).toBe(8315);
  });
});