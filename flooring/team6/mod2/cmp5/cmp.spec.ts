
import { Cmp5625Component } from './cmp';
describe('Cmp5625Component', () => {
  it('should add', () => {
    expect(new Cmp5625Component().add5625(1)).toBe(5626);
  });
});