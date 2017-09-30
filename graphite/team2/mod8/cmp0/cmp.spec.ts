
import { Cmp6280Component } from './cmp';
describe('Cmp6280Component', () => {
  it('should add', () => {
    expect(new Cmp6280Component().add6280(1)).toBe(6281);
  });
});