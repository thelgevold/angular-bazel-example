
import { Cmp5700Component } from './cmp';
describe('Cmp5700Component', () => {
  it('should add', () => {
    expect(new Cmp5700Component().add5700(1)).toBe(5701);
  });
});