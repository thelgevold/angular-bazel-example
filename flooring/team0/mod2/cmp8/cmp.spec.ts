
import { Cmp5028Component } from './cmp';
describe('Cmp5028Component', () => {
  it('should add', () => {
    expect(new Cmp5028Component().add5028(1)).toBe(5029);
  });
});