
import { Cmp6110Component } from './cmp';
describe('Cmp6110Component', () => {
  it('should add', () => {
    expect(new Cmp6110Component().add6110(1)).toBe(6111);
  });
});