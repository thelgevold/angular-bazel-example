
import { Cmp1260Component } from './cmp';
describe('Cmp1260Component', () => {
  it('should add', () => {
    expect(new Cmp1260Component().add1260(1)).toBe(1261);
  });
});