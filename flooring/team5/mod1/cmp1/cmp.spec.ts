
import { Cmp5511Component } from './cmp';
describe('Cmp5511Component', () => {
  it('should add', () => {
    expect(new Cmp5511Component().add5511(1)).toBe(5512);
  });
});