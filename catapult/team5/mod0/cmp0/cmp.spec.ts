
import { Cmp2500Component } from './cmp';
describe('Cmp2500Component', () => {
  it('should add', () => {
    expect(new Cmp2500Component().add2500(1)).toBe(2501);
  });
});