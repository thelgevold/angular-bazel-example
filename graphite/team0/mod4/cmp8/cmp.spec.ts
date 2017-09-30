
import { Cmp6048Component } from './cmp';
describe('Cmp6048Component', () => {
  it('should add', () => {
    expect(new Cmp6048Component().add6048(1)).toBe(6049);
  });
});