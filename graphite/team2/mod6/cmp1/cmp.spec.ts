
import { Cmp6261Component } from './cmp';
describe('Cmp6261Component', () => {
  it('should add', () => {
    expect(new Cmp6261Component().add6261(1)).toBe(6262);
  });
});