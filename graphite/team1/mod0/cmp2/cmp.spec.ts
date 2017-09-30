
import { Cmp6102Component } from './cmp';
describe('Cmp6102Component', () => {
  it('should add', () => {
    expect(new Cmp6102Component().add6102(1)).toBe(6103);
  });
});