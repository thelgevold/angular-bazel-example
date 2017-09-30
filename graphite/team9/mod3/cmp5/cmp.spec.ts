
import { Cmp6935Component } from './cmp';
describe('Cmp6935Component', () => {
  it('should add', () => {
    expect(new Cmp6935Component().add6935(1)).toBe(6936);
  });
});