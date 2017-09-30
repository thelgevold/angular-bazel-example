
import { Cmp5256Component } from './cmp';
describe('Cmp5256Component', () => {
  it('should add', () => {
    expect(new Cmp5256Component().add5256(1)).toBe(5257);
  });
});