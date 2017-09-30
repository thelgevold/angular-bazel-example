
import { Cmp8450Component } from './cmp';
describe('Cmp8450Component', () => {
  it('should add', () => {
    expect(new Cmp8450Component().add8450(1)).toBe(8451);
  });
});