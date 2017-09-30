
import { Cmp4500Component } from './cmp';
describe('Cmp4500Component', () => {
  it('should add', () => {
    expect(new Cmp4500Component().add4500(1)).toBe(4501);
  });
});