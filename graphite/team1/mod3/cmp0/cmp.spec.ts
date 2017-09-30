
import { Cmp6130Component } from './cmp';
describe('Cmp6130Component', () => {
  it('should add', () => {
    expect(new Cmp6130Component().add6130(1)).toBe(6131);
  });
});