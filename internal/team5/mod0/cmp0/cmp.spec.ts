
import { Cmp8500Component } from './cmp';
describe('Cmp8500Component', () => {
  it('should add', () => {
    expect(new Cmp8500Component().add8500(1)).toBe(8501);
  });
});