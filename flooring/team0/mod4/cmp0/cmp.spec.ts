
import { Cmp5040Component } from './cmp';
describe('Cmp5040Component', () => {
  it('should add', () => {
    expect(new Cmp5040Component().add5040(1)).toBe(5041);
  });
});