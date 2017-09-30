
import { Cmp6105Component } from './cmp';
describe('Cmp6105Component', () => {
  it('should add', () => {
    expect(new Cmp6105Component().add6105(1)).toBe(6106);
  });
});