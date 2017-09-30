
import { Cmp5753Component } from './cmp';
describe('Cmp5753Component', () => {
  it('should add', () => {
    expect(new Cmp5753Component().add5753(1)).toBe(5754);
  });
});