
import { Cmp6020Component } from './cmp';
describe('Cmp6020Component', () => {
  it('should add', () => {
    expect(new Cmp6020Component().add6020(1)).toBe(6021);
  });
});