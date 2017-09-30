
import { Cmp6580Component } from './cmp';
describe('Cmp6580Component', () => {
  it('should add', () => {
    expect(new Cmp6580Component().add6580(1)).toBe(6581);
  });
});