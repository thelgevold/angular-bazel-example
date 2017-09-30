
import { Cmp6288Component } from './cmp';
describe('Cmp6288Component', () => {
  it('should add', () => {
    expect(new Cmp6288Component().add6288(1)).toBe(6289);
  });
});