
import { Cmp6706Component } from './cmp';
describe('Cmp6706Component', () => {
  it('should add', () => {
    expect(new Cmp6706Component().add6706(1)).toBe(6707);
  });
});