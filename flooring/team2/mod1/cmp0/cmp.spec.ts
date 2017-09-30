
import { Cmp5210Component } from './cmp';
describe('Cmp5210Component', () => {
  it('should add', () => {
    expect(new Cmp5210Component().add5210(1)).toBe(5211);
  });
});