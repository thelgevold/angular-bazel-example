
import { Cmp6983Component } from './cmp';
describe('Cmp6983Component', () => {
  it('should add', () => {
    expect(new Cmp6983Component().add6983(1)).toBe(6984);
  });
});