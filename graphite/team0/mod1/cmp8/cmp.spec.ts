
import { Cmp6018Component } from './cmp';
describe('Cmp6018Component', () => {
  it('should add', () => {
    expect(new Cmp6018Component().add6018(1)).toBe(6019);
  });
});