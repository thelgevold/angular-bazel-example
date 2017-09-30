
import { Cmp6540Component } from './cmp';
describe('Cmp6540Component', () => {
  it('should add', () => {
    expect(new Cmp6540Component().add6540(1)).toBe(6541);
  });
});