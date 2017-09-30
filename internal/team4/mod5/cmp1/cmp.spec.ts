
import { Cmp8451Component } from './cmp';
describe('Cmp8451Component', () => {
  it('should add', () => {
    expect(new Cmp8451Component().add8451(1)).toBe(8452);
  });
});