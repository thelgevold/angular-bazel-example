
import { Cmp5179Component } from './cmp';
describe('Cmp5179Component', () => {
  it('should add', () => {
    expect(new Cmp5179Component().add5179(1)).toBe(5180);
  });
});