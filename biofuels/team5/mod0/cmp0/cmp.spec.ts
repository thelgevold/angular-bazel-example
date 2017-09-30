
import { Cmp1500Component } from './cmp';
describe('Cmp1500Component', () => {
  it('should add', () => {
    expect(new Cmp1500Component().add1500(1)).toBe(1501);
  });
});