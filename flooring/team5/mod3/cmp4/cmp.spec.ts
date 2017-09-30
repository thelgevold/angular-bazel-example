
import { Cmp5534Component } from './cmp';
describe('Cmp5534Component', () => {
  it('should add', () => {
    expect(new Cmp5534Component().add5534(1)).toBe(5535);
  });
});