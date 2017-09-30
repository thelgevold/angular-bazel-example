
import { Cmp9932Component } from './cmp';
describe('Cmp9932Component', () => {
  it('should add', () => {
    expect(new Cmp9932Component().add9932(1)).toBe(9933);
  });
});