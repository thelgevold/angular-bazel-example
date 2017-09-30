
import { Cmp6315Component } from './cmp';
describe('Cmp6315Component', () => {
  it('should add', () => {
    expect(new Cmp6315Component().add6315(1)).toBe(6316);
  });
});