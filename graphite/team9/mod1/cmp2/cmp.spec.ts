
import { Cmp6912Component } from './cmp';
describe('Cmp6912Component', () => {
  it('should add', () => {
    expect(new Cmp6912Component().add6912(1)).toBe(6913);
  });
});