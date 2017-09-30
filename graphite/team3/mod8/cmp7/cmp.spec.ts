
import { Cmp6387Component } from './cmp';
describe('Cmp6387Component', () => {
  it('should add', () => {
    expect(new Cmp6387Component().add6387(1)).toBe(6388);
  });
});