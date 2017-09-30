
import { Cmp5094Component } from './cmp';
describe('Cmp5094Component', () => {
  it('should add', () => {
    expect(new Cmp5094Component().add5094(1)).toBe(5095);
  });
});