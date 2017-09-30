
import { Cmp6801Component } from './cmp';
describe('Cmp6801Component', () => {
  it('should add', () => {
    expect(new Cmp6801Component().add6801(1)).toBe(6802);
  });
});