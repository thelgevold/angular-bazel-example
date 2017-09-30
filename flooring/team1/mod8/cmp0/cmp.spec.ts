
import { Cmp5180Component } from './cmp';
describe('Cmp5180Component', () => {
  it('should add', () => {
    expect(new Cmp5180Component().add5180(1)).toBe(5181);
  });
});