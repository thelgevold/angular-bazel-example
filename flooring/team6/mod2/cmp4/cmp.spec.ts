
import { Cmp5624Component } from './cmp';
describe('Cmp5624Component', () => {
  it('should add', () => {
    expect(new Cmp5624Component().add5624(1)).toBe(5625);
  });
});