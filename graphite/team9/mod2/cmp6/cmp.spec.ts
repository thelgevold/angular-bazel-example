
import { Cmp6926Component } from './cmp';
describe('Cmp6926Component', () => {
  it('should add', () => {
    expect(new Cmp6926Component().add6926(1)).toBe(6927);
  });
});