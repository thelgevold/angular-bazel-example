
import { Cmp6194Component } from './cmp';
describe('Cmp6194Component', () => {
  it('should add', () => {
    expect(new Cmp6194Component().add6194(1)).toBe(6195);
  });
});