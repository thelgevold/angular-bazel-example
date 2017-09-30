
import { Cmp5021Component } from './cmp';
describe('Cmp5021Component', () => {
  it('should add', () => {
    expect(new Cmp5021Component().add5021(1)).toBe(5022);
  });
});