
import { Cmp6160Component } from './cmp';
describe('Cmp6160Component', () => {
  it('should add', () => {
    expect(new Cmp6160Component().add6160(1)).toBe(6161);
  });
});