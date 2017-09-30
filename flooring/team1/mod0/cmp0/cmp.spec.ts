
import { Cmp5100Component } from './cmp';
describe('Cmp5100Component', () => {
  it('should add', () => {
    expect(new Cmp5100Component().add5100(1)).toBe(5101);
  });
});