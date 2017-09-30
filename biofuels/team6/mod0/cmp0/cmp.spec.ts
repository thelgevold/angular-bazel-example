
import { Cmp1600Component } from './cmp';
describe('Cmp1600Component', () => {
  it('should add', () => {
    expect(new Cmp1600Component().add1600(1)).toBe(1601);
  });
});