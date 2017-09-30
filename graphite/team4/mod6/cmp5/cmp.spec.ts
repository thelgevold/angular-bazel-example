
import { Cmp6465Component } from './cmp';
describe('Cmp6465Component', () => {
  it('should add', () => {
    expect(new Cmp6465Component().add6465(1)).toBe(6466);
  });
});