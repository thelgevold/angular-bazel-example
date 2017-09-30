
import { Cmp6792Component } from './cmp';
describe('Cmp6792Component', () => {
  it('should add', () => {
    expect(new Cmp6792Component().add6792(1)).toBe(6793);
  });
});