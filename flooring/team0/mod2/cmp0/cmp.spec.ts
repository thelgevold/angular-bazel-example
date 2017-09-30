
import { Cmp5020Component } from './cmp';
describe('Cmp5020Component', () => {
  it('should add', () => {
    expect(new Cmp5020Component().add5020(1)).toBe(5021);
  });
});