
import { Cmp6148Component } from './cmp';
describe('Cmp6148Component', () => {
  it('should add', () => {
    expect(new Cmp6148Component().add6148(1)).toBe(6149);
  });
});