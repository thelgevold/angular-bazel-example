
import { Cmp6500Component } from './cmp';
describe('Cmp6500Component', () => {
  it('should add', () => {
    expect(new Cmp6500Component().add6500(1)).toBe(6501);
  });
});