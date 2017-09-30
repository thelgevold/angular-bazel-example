
import { Cmp6065Component } from './cmp';
describe('Cmp6065Component', () => {
  it('should add', () => {
    expect(new Cmp6065Component().add6065(1)).toBe(6066);
  });
});