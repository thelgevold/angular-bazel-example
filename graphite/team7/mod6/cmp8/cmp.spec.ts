
import { Cmp6768Component } from './cmp';
describe('Cmp6768Component', () => {
  it('should add', () => {
    expect(new Cmp6768Component().add6768(1)).toBe(6769);
  });
});