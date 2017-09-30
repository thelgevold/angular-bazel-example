
import { Cmp6821Component } from './cmp';
describe('Cmp6821Component', () => {
  it('should add', () => {
    expect(new Cmp6821Component().add6821(1)).toBe(6822);
  });
});