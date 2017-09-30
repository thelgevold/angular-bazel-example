
import { Cmp5113Component } from './cmp';
describe('Cmp5113Component', () => {
  it('should add', () => {
    expect(new Cmp5113Component().add5113(1)).toBe(5114);
  });
});