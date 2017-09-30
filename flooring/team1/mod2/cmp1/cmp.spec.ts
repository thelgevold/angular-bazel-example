
import { Cmp5121Component } from './cmp';
describe('Cmp5121Component', () => {
  it('should add', () => {
    expect(new Cmp5121Component().add5121(1)).toBe(5122);
  });
});