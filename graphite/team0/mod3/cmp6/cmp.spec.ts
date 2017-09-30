
import { Cmp6036Component } from './cmp';
describe('Cmp6036Component', () => {
  it('should add', () => {
    expect(new Cmp6036Component().add6036(1)).toBe(6037);
  });
});