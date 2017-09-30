
import { Cmp6040Component } from './cmp';
describe('Cmp6040Component', () => {
  it('should add', () => {
    expect(new Cmp6040Component().add6040(1)).toBe(6041);
  });
});