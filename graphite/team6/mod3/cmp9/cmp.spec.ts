
import { Cmp6639Component } from './cmp';
describe('Cmp6639Component', () => {
  it('should add', () => {
    expect(new Cmp6639Component().add6639(1)).toBe(6640);
  });
});