
import { Cmp6250Component } from './cmp';
describe('Cmp6250Component', () => {
  it('should add', () => {
    expect(new Cmp6250Component().add6250(1)).toBe(6251);
  });
});