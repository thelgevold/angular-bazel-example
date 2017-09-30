
import { Cmp1534Component } from './cmp';
describe('Cmp1534Component', () => {
  it('should add', () => {
    expect(new Cmp1534Component().add1534(1)).toBe(1535);
  });
});