
import { Cmp6107Component } from './cmp';
describe('Cmp6107Component', () => {
  it('should add', () => {
    expect(new Cmp6107Component().add6107(1)).toBe(6108);
  });
});